import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VerificationForm } from "./verification-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield } from "lucide-react";

export default function VerificationPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>User Identity Verification</CardTitle>
                    <CardDescription>
                        To ensure the safety and security of our community, please complete this one-time identity verification.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Alert className="mb-6">
                        <Shield className="h-4 w-4" />
                        <AlertTitle>Your Privacy is Our Priority</AlertTitle>
                        <AlertDescription>
                            Your documents are encrypted and used solely for verification purposes. They will not be shared with other users.
                        </AlertDescription>
                    </Alert>
                    <VerificationForm />
                </CardContent>
            </Card>
        </div>
    );
}
