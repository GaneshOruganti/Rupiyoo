'use server';

/**
 * @fileOverview A legal document library maintenance AI agent.
 *
 * - maintainLegalDocumentLibrary - A function that maintains the legal document library.
 * - MaintainLegalDocumentLibraryInput - The input type for the maintainLegalDocumentLibrary function.
 * - MaintainLegalDocumentLibraryOutput - The return type for the maintainLegalDocumentLibrary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MaintainLegalDocumentLibraryInputSchema = z.object({
  operatingRegion: z
    .string()
    .describe('The operating region for which to maintain legal documents.'),
});
export type MaintainLegalDocumentLibraryInput = z.infer<typeof MaintainLegalDocumentLibraryInputSchema>;

const MaintainLegalDocumentLibraryOutputSchema = z.object({
  legalDocuments: z
    .array(z.string())
    .describe('A list of up-to-date legal documents for the operating region.'),
});
export type MaintainLegalDocumentLibraryOutput = z.infer<typeof MaintainLegalDocumentLibraryOutputSchema>;

export async function maintainLegalDocumentLibrary(
  input: MaintainLegalDocumentLibraryInput
): Promise<MaintainLegalDocumentLibraryOutput> {
  return maintainLegalDocumentLibraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'maintainLegalDocumentLibraryPrompt',
  input: {schema: MaintainLegalDocumentLibraryInputSchema},
  output: {schema: MaintainLegalDocumentLibraryOutputSchema},
  prompt: `You are a legal expert specializing in digital lending guidelines.

You will maintain a library of legal documents related to digital lending guidelines for Rupiyoo's operating region.

Operating Region: {{{operatingRegion}}}

You will generate a list of legal documents that are up-to-date for the operating region.

Output the legal documents as a JSON array of strings.
`,
});

const maintainLegalDocumentLibraryFlow = ai.defineFlow(
  {
    name: 'maintainLegalDocumentLibraryFlow',
    inputSchema: MaintainLegalDocumentLibraryInputSchema,
    outputSchema: MaintainLegalDocumentLibraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
