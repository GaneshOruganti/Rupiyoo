import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, MapPin, Bell, MessagesSquare, CheckCircle, FileLock } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: "Verified Users",
        description: "Our mandatory KYC process for all users ensures you connect with trusted and verified individuals only."
    },
    {
        icon: <MapPin className="h-10 w-10 text-primary" />,
        title: "Location-Based Matching",
        description: "Find lenders or borrowers in your immediate vicinity, making transactions more convenient and personal."
    },
    {
        icon: <MessagesSquare className="h-10 w-10 text-primary" />,
        title: "Secure In-App Chat",
        description: "Communicate with potential connections safely and directly through our end-to-end encrypted messaging system."
    },
    {
        icon: <Bell className="h-10 w-10 text-primary" />,
        title: "Real-Time Notifications",
        description: "Get instant alerts for new loan requests, messages, and status updates so you never miss an opportunity."
    },
    {
        icon: <CheckCircle className="h-10 w-10 text-primary" />,
        title: "Profile Moderation",
        description: "We actively moderate profiles and provide tools to report any suspicious activity, ensuring a safe community."
    },
    {
        icon: <FileLock className="h-10 w-10 text-primary" />,
        title: "Data Privacy First",
        description: "Your personal information is protected with industry-standard security. We never share data without consent."
    }
];

export function FeaturesSection() {
    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Why Choose Rupiyoo?
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        We built our platform with your security, privacy, and convenience in mind. Here’s what sets us apart.
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
