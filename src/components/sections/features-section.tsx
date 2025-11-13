import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, MapPin, Bell, MessagesSquare, CheckCircle, FileLock } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: "Verified Participants",
        description: "Our mandatory KYC for all users ensures you engage with a community of trusted and verified individuals."
    },
    {
        icon: <MapPin className="h-10 w-10 text-primary" />,
        title: "Location-Based Connections",
        description: "Find lenders or borrowers in your local area, making interactions more convenient and effective."
    },
    {
        icon: <MessagesSquare className="h-10 w-10 text-primary" />,
        title: "Secure Private Chat",
        description: "Engage with potential connections securely through our end-to-end encrypted messaging feature."
    },
    {
        icon: <Bell className="h-10 w-10 text-primary" />,
        title: "Instant Updates",
        description: "Receive real-time alerts for new loan requests, messages, and status changes so you never miss an opportunity."
    },
    {
        icon: <CheckCircle className="h-10 w-10 text-primary" />,
        title: "Profile Oversight",
        description: "We actively monitor profiles and offer tools to report suspicious activity, maintaining a safe environment."
    },
    {
        icon: <FileLock className="h-10 w-10 text-primary" />,
        title: "Privacy by Design",
        description: "Your personal data is safeguarded with top-tier security. We never share your information without explicit consent."
    }
];

export function FeaturesSection() {
    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        What Makes Rupiyoo Different?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Our platform is built with your security, privacy, and convenience as top priorities. Here’s what makes us stand out.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-background border-none shadow-sm hover:shadow-lg transition-shadow">
                            <CardHeader className="flex flex-row items-center gap-4">
                                {feature.icon}
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
