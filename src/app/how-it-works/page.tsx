import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: 'How It Works | Rupiyoo Connect',
  description: 'Understand the step-by-step process for borrowers and lenders on the Rupiyoo platform.',
};

const borrowerSteps = [
    { title: '1. Create Your Account', description: 'Quickly sign up using your mobile number. It takes less than a minute.' },
    { title: '2. Complete Verification (KYC)', description: 'For your security, we require a one-time identity verification. This builds trust within the community.' },
    { title: '3. Post a Loan Request', description: 'Clearly state the loan amount you need, the purpose, and your location. Your personal details remain private.' },
    { title: '4. Receive Lender Interest', description: 'Verified lenders in your area will see your request and can express interest if they can fulfill it.' },
    { title: '5. Connect & Chat Securely', description: 'Use our secure, end-to-end encrypted chat to discuss terms, interest rates, and repayment schedules with potential lenders.' },
    { title: '6. Finalize the Agreement', description: 'Once you agree on the terms, you can finalize the transaction directly with the lender. Rupiyoo does not handle funds.' },
];

const lenderSteps = [
    { title: '1. Register as a Lender', description: 'Join our network by creating a lender profile and setting your lending preferences.' },
    { title: '2. Complete KYC & Verification', description: 'To ensure a high-trust environment, all lenders must complete our mandatory verification process.' },
    { title: '3. Discover Loan Requests', description: 'Browse a live feed of loan requests from borrowers, filtered by location and amount to match your criteria.' },
    { title: '4. Express Interest', description: 'When you find a request you can fulfill, express your interest to notify the borrower.' },
    { title: '5. Negotiate via Secure Chat', description: 'Engage with the borrower through our secure messaging system to propose terms and agree on a plan that works for both of you.' },
    { title: '6. Lend with Confidence', description: 'After finalizing terms, you can proceed with the transaction directly. We provide the secure connection, you control the lending.' },
];

export default function HowItWorksPage() {
    const borrowerImage = PlaceHolderImages.find(p => p.id === 'how-it-works-borrower');
    const lenderImage = PlaceHolderImages.find(p => p.id === 'how-it-works-lender');
    
  return (
    <>
      <section className="bg-card pt-12">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Your Guide to Rupiyoo</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A clear, transparent process for both borrowers and lenders. Follow these simple steps to get started on our platform.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 items-stretch">
                <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold tracking-tight text-primary">For Borrowers</h2>
                    <p className="mt-2 text-muted-foreground">Your journey to finding the right financial support.</p>
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
                    <p className="mt-2 text-muted-foreground">Grow your lending portfolio by connecting with verified borrowers.</p>
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
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Platform Features & Policies</h2>
                 <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Key aspects of our platform that ensure a secure and reliable experience for everyone.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader><CardTitle>AI-Powered Verification</CardTitle></CardHeader>
                    <CardContent>Our system uses advanced AI to perform KYC checks, verifying identities to prevent fraud and build a trustworthy community. All users must be verified to interact.</CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Real-Time Notifications</CardTitle></CardHeader>
                    <CardContent>Stay informed with instant push notifications for new messages, lender interest, and important account updates. You'll never miss a beat.</CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Location-Based System</CardTitle></CardHeader>
                    <CardContent>Our platform intelligently prioritizes connections within your geographical area, making it easier to find local borrowers or lenders for smoother transactions.</CardContent>
                </Card>
                <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Important Service Limitation</AlertTitle>
                    <AlertDescription>
                        Rupiyoo is a technology platform that connects users. We do not provide loans, guarantee loan approval, or participate in the lending decision. All agreements are made strictly between the borrower and the lender.
                    </AlertDescription>
                </Alert>
            </div>
        </div>
      </section>
    </>
  );
}
