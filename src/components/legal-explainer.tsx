"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Info, Loader2 } from "lucide-react";
import { explainLegalTerm } from "@/ai/flows/legal-terminology-explainer-flow";

interface LegalExplainerProps {
  term: string;
}

export function LegalExplainer({ term }: LegalExplainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleExplain = async () => {
    setIsOpen(true);
    if (!explanation) {
      setIsLoading(true);
      try {
        const result = await explainLegalTerm({ term });
        setExplanation(result.explanation);
      } catch (error) {
        setExplanation("Sorry, could not fetch explanation at this time.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-4 w-4 p-0 ml-1 text-accent hover:text-accent/80" 
        onClick={handleExplain}
        title={`What is ${term}?`}
      >
        <Info className="h-3 w-3" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Explaining: {term}
            </DialogTitle>
            <DialogDescription>
              AI-generated explanation for legal land terminology.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                <p className="text-sm text-muted-foreground">Consulting legal expert AI...</p>
              </div>
            ) : (
              <div className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                {explanation}
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}