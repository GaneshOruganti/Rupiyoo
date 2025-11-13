import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Handshake, FileSearch, Target, Wallet, MessageSquare } from "lucide-react";

const borrowerSteps = [
    {
        icon: <UserPlus className="h-8 w-8 text-primary" />,
        title: "Post Your Requirement",
        description: "Sign up and post your loan needs, including amount and location, securely and privately."
    },
    {
        icon: <FileSearch className="h-8 w-8 text-primary" />,
        title: "Get Matched",
        description: "Our platform connects your request with verified lenders in your vicinity who can meet your needs."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Connect & Transact",
        description: "Communicate directly with interested lenders through our secure chat to finalize terms and receive funds."
    }
];

const lenderSteps = [
    {
        icon: <Wallet className="h-8 w-8 text-accent" />,
        title: "Create Your Profile",
        description: "Register as a lender, complete our secure KYC verification, and set your lending criteria."
    },
    {
        icon: <Target className="h-8 w-8 text-accent" />,
        title: "Discover Requests",
        description: "Browse a real-time feed of loan requests from borrowers in your chosen geographical area."
    },
    {
        icon: <MessageSquare className="h-8 w-8 text-accent" />,
        title: "Connect & Lend",
        description: "Initiate conversations with borrowers, negotiate terms, and grow your lending portfolio safely."
    }
];

export function HowItWorksSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        A Simple Path to Financial Connections
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Whether you need a loan or want to lend, our streamlined process makes it easy and secure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-primary">For Borrowers</h3>
                        <div className="space-y-6">
                            {borrowerSteps.map((step, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">{step.title}</h4>
                                        <p className="text-muted-foreground mt-1">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-accent">For Lenders</h3>
                        <div className="space-y-6">
                            {lenderSteps.map((step, index) => (
                                <div key={index} className="flex items-start gap-4">
                                     <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold">{step.title}</h4>
                                        <p className="text-muted-foreground mt-1">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
