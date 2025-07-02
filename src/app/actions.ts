'use server';

import {
  getPersonalizedDevotional as getPersonalizedDevotionalFlow,
  type PersonalizedDevotionalInput,
  type PersonalizedDevotionalOutput,
} from '@/ai/flows/personalized-devotionals';

export async function getPersonalizedDevotional(
  input: PersonalizedDevotionalInput
): Promise<{
  data: PersonalizedDevotionalOutput | null;
  error: string | null;
}> {
  try {
    const result = await getPersonalizedDevotionalFlow(input);
    if (!result.title || !result.content) {
        throw new Error("The generated devotional was incomplete. Please try again.")
    }
    return { data: result, error: null };
  } catch (e: any) {
    console.error('Error getting personalized devotional:', e);
    return {
      data: null,
      error:
        e.message || 'An unexpected error occurred while generating the devotional.',
    };
  }
}
