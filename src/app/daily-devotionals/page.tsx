
"use client";

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
import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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

export default function DailyDevotionals() {
  const [devotional, setDevotional] = useState<PersonalizedDevotionalOutput | null>(null);
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
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-28 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">
              Daily Devotionals
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
              Start your day with a word from God. Generate a personalized devotional below or read our latest entries.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl flex items-center gap-3"><Sparkles className="text-accent"/> Get a Personalized Devotional</CardTitle>
                  <CardDescription>
                    Receive a unique devotional tailored to your spiritual journey. Tell us where you are and what's on your heart.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="spiritualMaturityLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Spiritual Maturity Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Beginner">Beginner</SelectItem>
                                <SelectItem value="Intermediate">Intermediate</SelectItem>
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
                            <FormLabel>What's on your heart?</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Faith, Forgiveness, Purpose" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" disabled={isLoading} className="w-full bg-gold hover:bg-gold/90 text-gold-foreground">
                        {isLoading ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Sparkles className="mr-2 h-4 w-4" />
                        )}
                        Generate My Devotional
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
                <h2 className="font-headline text-3xl font-bold">Your Word for Today</h2>
                {isLoading ? (
                     <div
                        className="flex flex-col items-center justify-center h-96 border-2 border-dashed border-primary/20 rounded-lg"
                    >
                        <Loader2 className="h-12 w-12 animate-spin text-primary" />
                        <p className="mt-4 text-foreground/80">Crafting your message...</p>
                    </div>
                ) : devotional ? (
                     <Card className="shadow-lg bg-muted">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl text-primary">{devotional.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="whitespace-pre-wrap font-body text-foreground/90">{devotional.content}</p>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center h-96 border-2 border-dashed border-primary/20 rounded-lg p-8">
                        <Sparkles className="h-12 w-12 text-primary/50 mb-4" />
                        <h3 className="font-headline text-xl font-semibold">Your personalized devotional will appear here.</h3>
                        <p className="text-foreground/70 mt-2">Fill out the form to generate a message tailored just for you.</p>
                    </div>
                )}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="font-headline text-3xl font-bold">Recent Devotionals</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">This section will display a feed of recent devotionals added from the admin dashboard.</p>
                </div>
                 {/* Placeholder for devotional feed */}
                <div className="text-center text-foreground/50">
                    <p>Devotional feed coming soon.</p>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
