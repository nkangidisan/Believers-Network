'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, Lock, ArrowRight, Loader2, Sparkles, AlertCircle, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import Link from 'next/link';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [step, setStep] = useState<'options' | 'access-code' | 'success'>('options');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerifyCode = async () => {
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Access Code verification
    if (code === '693840') {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#9333EA', '#ffffff']
      });
      setStep('success');
    } else {
      setError('Invalid access code. Please try again or purchase the book.');
    }
    setIsLoading(false);
  };

  const reset = () => {
    setStep('options');
    setCode('');
    setError('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={reset}>
      <DialogContent className="sm:max-w-[500px] glass p-0 overflow-hidden border-white/10">
        <AnimatePresence mode="wait">
          {step === 'options' && (
            <motion.div
              key="options"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-8 space-y-6"
            >
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold">Get the New Life Book</DialogTitle>
                <DialogDescription className="text-lg">
                  Choose how you'd like to receive your copy of the official New Life Book.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4">
                <button
                  onClick={() => setStep('access-code')}
                  className="group flex items-center justify-between p-6 rounded-2xl bg-gold/10 hover:bg-gold/20 border border-gold/20 transition-all text-left"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gold">Access Code</h3>
                    <p className="text-sm text-foreground/60">For members who have been saved.</p>
                  </div>
                  <Lock className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
                </button>

                <Link
                  href="/donate"
                  onClick={reset}
                  className="group flex items-center justify-between p-6 rounded-2xl bg-accent/10 hover:bg-accent/20 border border-accent/20 transition-all text-left"
                >
                  <div>
                    <h3 className="text-xl font-bold text-accent">Purchase Now</h3>
                    <p className="text-sm text-foreground/60">50,000 UGX / $20</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}

          {step === 'access-code' && (
            <motion.div
              key="access-code"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-8 space-y-6"
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Enter Access Code</DialogTitle>
                <DialogDescription>
                  Enter your unique 6-digit code to unlock your free download of the New Life Book.
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="code" className="text-sm font-medium uppercase tracking-widest text-foreground/60">Code</Label>
                  <Input
                    id="code"
                    placeholder="......"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="h-14 text-center text-3xl font-mono tracking-[1em] glass border-white/10"
                    maxLength={6}
                  />
                  {error && <p className="text-red-500 text-sm flex items-center gap-1"><AlertCircle className="w-4 h-4" /> {error}</p>}
                </div>
                <Button
                  className="w-full h-14 text-lg font-bold bg-gold text-gold-foreground rounded-xl shadow-lg shadow-gold/20"
                  onClick={handleVerifyCode}
                  disabled={isLoading || code.length !== 6}
                >
                  {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Unlock Book'}
                </Button>
                <Button variant="ghost" className="w-full" onClick={() => setStep('options')}>
                  Go back
                </Button>
              </div>
            </motion.div>
          )}

          {step === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 text-center space-y-8"
            >
              <div className="relative mx-auto w-24 h-24">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 10 }}
                  className="absolute inset-0 bg-gold rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-gold-foreground" />
                </motion.div>
                <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-20" />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Access Granted!</h2>
                <p className="text-foreground/60">
                  Your journey through the New Life Book by Iradukunda Pacifique begins now.
                </p>
              </div>

              <Button
                asChild
                className="w-full h-14 text-lg font-bold bg-gold text-gold-foreground rounded-xl shadow-xl shadow-gold/30"
              >
                <a href="/new life book.pdf" download onClick={reset}>
                    <Download className="mr-2 h-5 w-5" />
                    Download New Life Book
                </a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
