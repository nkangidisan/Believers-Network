"use client";

import { useEffect, useState } from "react";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getPersonalizedDevotional } from "@/app/actions";
import type { PersonalizedDevotionalOutput } from "@/ai/flows/personalized-devotionals";
import { Loader2, Sparkles, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatePresence, motion } from "framer-motion";

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

export default function DevotionalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [devotional, setDevotional] = useState<PersonalizedDevotionalOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Open the modal automatically after a short delay on page load
    const timer = setTimeout(() => {
      const hasSeenModal = localStorage.getItem("hasSeenDevotionalModal");
      if (!hasSeenModal) {
        setIsOpen(true);
        localStorage.setItem("hasSeenDevotionalModal", "true");
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const form = useForm<DevotionalFormValues>({
    resolver: zodResolver(devotionalFormSchema),
    defaultValues: {
      preferredTopics: "",
    },
  });

  async function onSubmit(values: DevotionalFormValues) {
    setIsLoading(true);
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

  const resetAndClose = () => {
    setIsOpen(false);
    // Reset state after a delay to allow for exit animation
    setTimeout(() => {
        form.reset();
        setDevotional(null);
    }, 300);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="p-0 max-w-2xl bg-background/80 backdrop-blur-lg border-primary/20 shadow-2xl shadow-primary/20">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-96"
            >
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="mt-4 text-foreground/80">Crafting your message...</p>
            </motion.div>
          ) : devotional ? (
            <motion.div
              key="devotional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8"
            >
              <DialogHeader>
                <DialogTitle className="font-headline text-3xl text-primary flex items-center gap-3">
                  <Sparkles/> {devotional.title}
                </DialogTitle>
                <DialogDescription className="text-foreground/70 pt-2">
                  A personalized word of encouragement for you today.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 text-base text-foreground/90 max-h-[50vh] overflow-y-auto pr-4">
                <p className="whitespace-pre-wrap font-body">{devotional.content}</p>
              </div>
              <Button onClick={resetAndClose} variant="outline" className="w-full mt-6">
                Close
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8"
            >
              <DialogHeader>
                <DialogTitle className="font-headline text-3xl flex items-center gap-3">
                  <Sparkles className="text-accent"/> A Moment with God
                </DialogTitle>
                <DialogDescription className="text-foreground/70 pt-2">
                  Receive a unique devotional tailored to your spiritual journey. Tell us where you are and what's on your heart.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6">
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
                    <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-gold-foreground">
                      Generate My Devotional
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
         <button onClick={resetAndClose} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
        </button>
      </DialogContent>
    </Dialog>
  );
}
