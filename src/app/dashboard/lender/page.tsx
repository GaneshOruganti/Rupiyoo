import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, UserCheck } from "lucide-react"

export default function LenderDashboardPage() {

    const loanRequests = [
        { id: 'LR001', amount: '₹50,000', location: 'Delhi', purpose: 'Personal Use' },
        { id: 'LR004', amount: '₹1,20,000', location: 'Mumbai', purpose: 'Business' },
        { id: 'LR005', amount: '₹30,000', location: 'Delhi', purpose: 'Medical' },
    ];

  return (
    <Tabs defaultValue="view-requests" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="view-requests">View Nearby Loan Requests</TabsTrigger>
        <TabsTrigger value="profile">Profile Management</TabsTrigger>
        <TabsTrigger value="verification">Verification</TabsTrigger>
      </TabsList>

      <TabsContent value="view-requests">
        <Card>
          <CardHeader>
            <CardTitle>Loan Requests Near You</CardTitle>
            <CardDescription>Here are the latest loan requests in your selected area.</CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loanRequests.map(request => (
                <Card key={request.id}>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            <span>{request.amount}</span>
                            <UserCheck className="h-5 w-5 text-green-500" />
                        </CardTitle>
                        <CardDescription>{request.purpose}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {request.location}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Connect with Borrower</Button>
                    </CardFooter>
                </Card>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Manage Your Profile</CardTitle>
            <CardDescription>Keep your information up to date to build trust with borrowers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Amit Kumar" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="lending-area">Preferred Lending Area</Label>
                <Input id="lending-area" defaultValue="Delhi, NCR" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="bio">Short Bio</Label>
                <Textarea id="bio" placeholder="Tell borrowers a little about yourself." defaultValue="Experienced lender focused on personal and small business loans." />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="verification">
        <Card>
          <CardHeader>
            <CardTitle>Your Verification Status</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center text-center p-8">
            <UserCheck className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-green-600">You are Verified!</h3>
            <p className="text-muted-foreground mt-2">Your profile is trusted and visible to borrowers. You can view and connect with loan requests.</p>
            <Button variant="link" className="mt-4">View Verification Details</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
