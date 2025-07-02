'use server';

/**
 * @fileOverview Provides personalized daily devotionals based on the user's spiritual maturity level.
 *
 * - getPersonalizedDevotional - A function that generates a personalized devotional.
 * - PersonalizedDevotionalInput - The input type for the getPersonalizedDevotional function.
 * - PersonalizedDevotionalOutput - The return type for the getPersonalizedDevotional function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedDevotionalInputSchema = z.object({
  spiritualMaturityLevel: z
    .enum(['Beginner', 'Intermediate', 'Advanced'])
    .describe('The spiritual maturity level of the user.'),
  preferredTopics: z
    .string()
    .describe(
      'A comma-separated list of preferred topics for the devotional.'
    ),
});
export type PersonalizedDevotionalInput = z.infer<
  typeof PersonalizedDevotionalInputSchema
>;

const PersonalizedDevotionalOutputSchema = z.object({
  title: z.string().describe('The title of the devotional.'),
  content: z.string().describe('The personalized content of the devotional.'),
});
export type PersonalizedDevotionalOutput = z.infer<
  typeof PersonalizedDevotionalOutputSchema
>;

export async function getPersonalizedDevotional(
  input: PersonalizedDevotionalInput
): Promise<PersonalizedDevotionalOutput> {
  return personalizedDevotionalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedDevotionalPrompt',
  input: {schema: PersonalizedDevotionalInputSchema},
  output: {schema: PersonalizedDevotionalOutputSchema},
  prompt: `You are a devotional writer who specializes in creating personalized devotionals based on the user's spiritual maturity level and preferred topics.

  Spiritual Maturity Level: {{{spiritualMaturityLevel}}}
  Preferred Topics: {{{preferredTopics}}}

  Write a devotional that is appropriate for the user's spiritual maturity level and covers the user's preferred topics. The devotional should be faith-filled, youth-friendly, and globally welcoming.
  The title should be captivating and relevant to the content of the devotional.
  The content should be engaging, insightful, and provide practical guidance for deepening their faith and connection with God.
  `,
});

const personalizedDevotionalFlow = ai.defineFlow(
  {
    name: 'personalizedDevotionalFlow',
    inputSchema: PersonalizedDevotionalInputSchema,
    outputSchema: PersonalizedDevotionalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
