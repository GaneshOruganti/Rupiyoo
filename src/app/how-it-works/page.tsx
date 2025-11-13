import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn the straightforward process for borrowers and lenders on the Rupiyoo platform.',
};

const borrowerSteps = [
    { title: '1. Create an Account', description: 'Sign up in under a minute using your mobile number.' },
    { title: '2. Complete Verification', description: 'A one-time identity check (KYC) is required for your security and to build trust.' },
    { title: '3. Submit a Loan Request', description: 'Detail the loan amount you require, its purpose, and your location. Your personal info stays private.' },
    { title: '4. Get Interest from Lenders', description: 'Verified lenders in your vicinity will view your request and can show interest.' },
    { title: '5. Chat Securely', description: 'Use our end-to-end encrypted chat to discuss terms and repayment with interested lenders.' },
    { title: '6. Finalize Your Agreement', description: 'Once terms are agreed upon, you can complete the transaction directly with the lender. Rupiyoo does not process funds.' },
];

const lenderSteps = [
    { title: '1. Register Your Profile', description: 'Join our lender network by creating a profile and defining your lending criteria.' },
    { title: '2. Undergo Verification', description: 'To maintain a high-trust ecosystem, all lenders must pass our mandatory verification.' },
    { title: '3. Find Loan Opportunities', description: 'Access a real-time feed of loan requests, filtered by location and amount to fit your preferences.' },
    { title: '4. Show Your Interest', description: 'When you find a request you can fulfill, express interest to inform the borrower.' },
    { title: '5. Negotiate via Secure Chat', description: 'Connect with the borrower through our secure messaging to propose and agree on terms.' },
    { title: '6. Lend Confidently', description: 'After agreeing on terms, proceed with the transaction directly. We enable the connection; you manage the lending.' },
];

export default function HowItWorksPage() {
    const borrowerImage = PlaceHolderImages.find(p => p.id === 'how-it-works-borrower');
    const lenderImage = PlaceHolderImages.find(p => p.id === 'how-it-works-lender');
    
  return (
    <>
      <section className="bg-card pt-12">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">The Rupiyoo Process</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A transparent and simple process for both borrowers and lenders. Follow these steps to begin.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 items-stretch">
                <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold tracking-tight text-primary">For Borrowers</h2>
                    <p className="mt-2 text-muted-foreground">The path to securing the financial support you need.</p>
                    <ul className="mt-8 space-y-4">
                        {borrowerSteps.map(step => (
                            <li key={step.title} className="flex items-start gap-4">
                                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                                    {step.title.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold">{step.title}</h4>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {borrowerImage && (
                    <div className="hidden md:block relative">
                         <Image
                            src={borrowerImage.imageUrl}
                            alt={borrowerImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={borrowerImage.imageHint}
                        />
                    </div>
                )}
            </div>
          </Card>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 items-stretch">
                {lenderImage && (
                    <div className="hidden md:block relative">
                         <Image
                            src={lenderImage.imageUrl}
                            alt={lenderImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={lenderImage.imageHint}
                        />
                    </div>
                )}
                <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold tracking-tight text-accent">For Lenders</h2>
                    <p className="mt-2 text-muted-foreground">Expand your lending portfolio by connecting with verified individuals.</p>
                     <ul className="mt-8 space-y-4">
                        {lenderSteps.map(step => (
                            <li key={step.title} className="flex items-start gap-4">
                                <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
                                    {step.title.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold">{step.title}</h4>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Platform Policies and Features</h2>
                 <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Core aspects of our platform that promote a safe and dependable experience for everyone.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader><CardTitle>AI-Enhanced Verification</CardTitle></CardHeader>
                    <CardContent>Our system employs advanced AI to conduct KYC checks, verifying identities to deter fraud and cultivate a trustworthy community. All users must be verified to interact.</CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Instant Notifications</CardTitle></CardHeader>
                    <CardContent>Stay updated with immediate push notifications for new messages, lender interest, and key account alerts. You’ll always be in the loop.</CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Geo-Location Matching</CardTitle></CardHeader>
                    <CardContent>Our platform prioritizes connections within your geographical region, simplifying the process of finding local borrowers or lenders for smoother dealings.</CardContent>
                </Card>
                <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Important Service Disclaimer</AlertTitle>
                    <AlertDescription>
                        Rupiyoo is a technology service that connects users. We do not issue loans, ensure loan approval, or take part in lending decisions. All agreements are exclusively between the borrower and the lender.
                    </AlertDescription>
                </Alert>
            </div>
        </div>
      </section>
    </>
  );
}
