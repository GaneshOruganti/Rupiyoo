import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Handshake, FileSearch, Target, Wallet, MessageSquare } from "lucide-react";

const borrowerSteps = [
    {
        icon: <UserPlus className="h-8 w-8 text-primary" />,
        title: "Define Your Requirement",
        description: "Sign up and detail your loan needs, including amount and location, in a secure and private manner."
    },
    {
        icon: <FileSearch className="h-8 w-8 text-primary" />,
        title: "Receive a Match",
        description: "Our system connects your request with verified lenders in your area who are able to meet your needs."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Connect and Finalize",
        description: "Engage directly with interested lenders via our secure chat to agree on terms and receive your funds."
    }
];

const lenderSteps = [
    {
        icon: <Wallet className="h-8 w-8 text-accent" />,
        title: "Build Your Profile",
        description: "Register as a lender, pass our secure KYC verification, and specify your lending preferences."
    },
    {
        icon: <Target className="h-8 w-8 text-accent" />,
        title: "Identify Opportunities",
        description: "Explore a live feed of loan requests from borrowers located in your designated geographical areas."
    },
    {
        icon: <MessageSquare className="h-8 w-8 text-accent" />,
        title: "Engage and Lend",
        description: "Start conversations with borrowers, negotiate terms, and expand your lending portfolio securely."
    }
];

export function HowItWorksSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        An Easy Path to Financial Partnerships
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Whether you're looking to borrow or lend, our efficient process ensures a secure and simple experience.
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
