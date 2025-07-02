"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPersonalizedDevotional } from "@/app/actions";
import type { PersonalizedDevotionalOutput } from "@/ai/flows/personalized-devotionals";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const devotionalFormSchema = z.object({
  spiritualMaturityLevel: z.enum(["Beginner", "Intermediate", "Advanced"], {
    required_error: "Please select your spiritual maturity level.",
  }),
  preferredTopics: z
    .string()
    .min(3, { message: "Please enter at least one topic." })
    .max(100, { message: "Topics are too long." }),
});

type DevotionalFormValues = z.infer<typeof devotionalFormSchema>;

export default function DevotionalSection() {
  const [devotional, setDevotional] =
    useState<PersonalizedDevotionalOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<DevotionalFormValues>({
    resolver: zodResolver(devotionalFormSchema),
    defaultValues: {
      preferredTopics: "",
    },
  });

  async function onSubmit(values: DevotionalFormValues) {
    setIsLoading(true);
    setDevotional(null);
    const { data, error } = await getPersonalizedDevotional(values);
    setIsLoading(false);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error Generating Devotional",
        description: error,
      });
    } else if (data) {
      setDevotional(data);
    }
  }

  return (
    <section id="devotionals" className="w-full py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Personalized Daily Devotionals
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Receive a unique devotional tailored to your spiritual journey. Tell us where you are and what's on your heart.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2">
                  <Sparkles className="text-accent w-6 h-6" />
                  Create Your Devotional
                </CardTitle>
                <CardDescription>
                  Fill out the form to get a personalized message.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="spiritualMaturityLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Spiritual Maturity Level</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            disabled={isLoading}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Beginner">Beginner</SelectItem>
                              <SelectItem value="Intermediate">
                                Intermediate
                              </SelectItem>
                              <SelectItem value="Advanced">Advanced</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="preferredTopics"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Topics</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., Faith, Forgiveness, Purpose"
                              {...field}
                              disabled={isLoading}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Generate Devotional
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="min-h-full shadow-lg bg-muted/50">
              <CardHeader>
                <CardTitle className="font-headline">Your Message from God</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="flex flex-col items-center justify-center h-64">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="mt-4 text-foreground/80">Generating your devotional...</p>
                  </div>
                )}
                {devotional && (
                  <div className="prose prose-lg max-w-none">
                    <h3 className="font-headline text-2xl text-primary">{devotional.title}</h3>
                    <p className="whitespace-pre-wrap font-body">{devotional.content}</p>
                  </div>
                )}
                {!isLoading && !devotional && (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <Sparkles className="h-12 w-12 text-primary/50" />
                    <p className="mt-4 text-foreground/60">Your personalized devotional will appear here.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
