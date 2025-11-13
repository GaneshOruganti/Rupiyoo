'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { verifyUserIdentity, VerifyUserIdentityOutput } from '@/ai/flows/verify-user-identity';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, UploadCloud, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  userName: z.string().min(2, { message: 'Please enter your full name.' }),
  document: z.custom<FileList>().refine(files => files?.length > 0, 'Please upload a document.'),
});

type FormValues = z.infer<typeof formSchema>;

export function VerificationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VerifyUserIdentityOutput | null>(null);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
    },
  });

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    setResult(null);

    try {
      const file = data.document[0];
      if (!file) throw new Error('File not found');

      const documentDataUri = await fileToBase64(file);

      const verificationResult = await verifyUserIdentity({
        userName: data.userName,
        documentDataUri,
      });

      setResult(verificationResult);
      toast({
        title: 'Verification Complete',
        description: verificationResult.summary,
      });
    } catch (error) {
      console.error('Verification failed:', error);
      toast({
        title: 'Verification Failed',
        description: 'An error occurred during verification. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (result) {
    return (
      <Card className={result.isVerified ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}>
        <CardHeader className="items-center text-center">
          {result.isVerified ? (
            <CheckCircle className="h-12 w-12 text-green-500" />
          ) : (
            <XCircle className="h-12 w-12 text-red-500" />
          )}
          <CardTitle className={result.isVerified ? 'text-green-700' : 'text-red-700'}>
            Verification {result.isVerified ? 'Successful' : 'Failed'}
          </CardTitle>
          <CardDescription>Confidence Score: {(result.confidenceScore * 100).toFixed(0)}%</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">{result.summary}</p>
          <Button onClick={() => { setResult(null); form.reset(); setFileName(''); }} className="mt-6 w-full">
            Start Over
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name (as on document)</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="document"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Identity Document</FormLabel>
              <FormControl>
                <div 
                    className="relative flex justify-center items-center w-full h-32 px-6 py-10 border-2 border-dashed rounded-md cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <Input
                        type="file"
                        accept="image/*,.pdf"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={(e) => {
                            field.onChange(e.target.files);
                            setFileName(e.target.files?.[0]?.name || '');
                        }}
                    />
                    <div className="text-center">
                        <UploadCloud className="w-8 h-8 mx-auto text-muted-foreground" />
                        {fileName ? (
                            <p className="mt-2 text-sm text-foreground">{fileName}</p>
                        ) : (
                            <p className="mt-2 text-sm text-muted-foreground">
                                <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                            </p>
                        )}
                        <p className="text-xs text-muted-foreground">PNG, JPG, or PDF</p>
                    </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...
            </>
          ) : (
            'Submit for Verification'
          )}
        </Button>
      </form>
    </Form>
  );
}
