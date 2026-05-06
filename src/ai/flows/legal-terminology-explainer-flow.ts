'use server';
/**
 * @fileOverview A Genkit flow for providing explanations of legal and land-related terms.
 *
 * - explainLegalTerm - A function that handles the explanation of a given legal term.
 * - LegalTermInput - The input type for the explainLegalTerm function.
 * - LegalTermOutput - The return type for the explainLegalTerm function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LegalTermInputSchema = z.object({
  term: z.string().describe('The legal or land-related term to be explained.'),
});
export type LegalTermInput = z.infer<typeof LegalTermInputSchema>;

const LegalTermOutputSchema = z.object({
  explanation: z
    .string()
    .describe('A clear and concise explanation of the provided term.'),
});
export type LegalTermOutput = z.infer<typeof LegalTermOutputSchema>;

export async function explainLegalTerm(
  input: LegalTermInput
): Promise<LegalTermOutput> {
  return legalTerminologyExplainerFlow(input);
}

const legalTerminologyExplainerPrompt = ai.definePrompt({
  name: 'legalTerminologyExplainerPrompt',
  input: {schema: LegalTermInputSchema},
  output: {schema: LegalTermOutputSchema},
  prompt: `You are an expert in legal and land-related terminology in India. Your task is to provide a clear, concise, and easy-to-understand explanation for the given term.

Term: {{{term}}}

Provide the explanation in the 'explanation' field of the JSON output.`, 
});

const legalTerminologyExplainerFlow = ai.defineFlow(
  {
    name: 'legalTerminologyExplainerFlow',
    inputSchema: LegalTermInputSchema,
    outputSchema: LegalTermOutputSchema,
  },
  async input => {
    const {output} = await legalTerminologyExplainerPrompt(input);
    return output!;
  }
);
