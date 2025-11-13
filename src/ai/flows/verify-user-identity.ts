'use server';

/**
 * @fileOverview A user identity verification AI agent.
 *
 * - verifyUserIdentity - A function that handles the user identity verification process.
 * - VerifyUserIdentityInput - The input type for the verifyUserIdentity function.
 * - VerifyUserIdentityOutput - The return type for the verifyUserIdentity function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VerifyUserIdentityInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "A government-issued identification document or address proof, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  userName: z.string().describe('The name of the user.'),
});
export type VerifyUserIdentityInput = z.infer<typeof VerifyUserIdentityInputSchema>;

const VerifyUserIdentityOutputSchema = z.object({
  isVerified: z.boolean().describe('Whether or not the user is verified.'),
  confidenceScore: z
    .number()
    .describe('The confidence score of the verification (0-1).'),
  summary: z.string().describe('Summary of the verification result.'),
});
export type VerifyUserIdentityOutput = z.infer<typeof VerifyUserIdentityOutputSchema>;

export async function verifyUserIdentity(
  input: VerifyUserIdentityInput
): Promise<VerifyUserIdentityOutput> {
  return verifyUserIdentityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'verifyUserIdentityPrompt',
  input: {schema: VerifyUserIdentityInputSchema},
  output: {schema: VerifyUserIdentityOutputSchema},
  prompt: `You are an expert in identity verification and fraud detection. Review the provided document and user name to determine if the identity is valid. You will make a determination as to whether the user is verified or not, and set the isVerified output field appropriately.

  The confidenceScore should be a number between 0 and 1, representing the confidence in the verification result.

  Provide a summary of the verification result, highlighting any issues or concerns.

  User Name: {{{userName}}}
  Document: {{media url=documentDataUri}}`,
});

const verifyUserIdentityFlow = ai.defineFlow(
  {
    name: 'verifyUserIdentityFlow',
    inputSchema: VerifyUserIdentityInputSchema,
    outputSchema: VerifyUserIdentityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
