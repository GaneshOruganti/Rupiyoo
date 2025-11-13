import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BorrowerDashboardPage() {

    const loanRequests = [
        { id: 'LR001', amount: '₹50,000', date: '2023-10-25', status: 'Pending', offers: 3 },
        { id: 'LR002', amount: '₹25,000', date: '2023-10-22', status: 'Connected', offers: 1 },
        { id: 'LR003', amount: '₹1,00,000', date: '2023-10-15', status: 'Closed', offers: 5 },
    ];
    
  return (
    <Tabs defaultValue="post-loan" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="post-loan">Post Loan Requirement</TabsTrigger>
        <TabsTrigger value="track-requests">Track Requests</TabsTrigger>
        <TabsTrigger value="chat">Connect/Chat</TabsTrigger>
      </TabsList>

      <TabsContent value="post-loan">
        <Card>
          <CardHeader>
            <CardTitle>Post a New Loan Requirement</CardTitle>
            <CardDescription>Fill in the details below. Your request will be visible to verified lenders in your area.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="amount">Loan Amount (₹)</Label>
                    <Input id="amount" placeholder="e.g., 50000" type="number" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="purpose">Loan Purpose</Label>
                    <Select>
                        <SelectTrigger id="purpose">
                            <SelectValue placeholder="Select a purpose" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="personal">Personal Use</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="medical">Medical Emergency</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="location">Your Location</Label>
                <Input id="location" placeholder="e.g., Delhi, India" />
                <p className="text-xs text-muted-foreground">Lenders will see requests based on this location.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="details">Basic Details / Message</Label>
              <Textarea id="details" placeholder="Provide a brief description of your need. Do not share personal contact information here." />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Post Loan Request</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="track-requests">
        <Card>
          <CardHeader>
            <CardTitle>Your Loan Requests</CardTitle>
            <CardDescription>Here is a list of your past and current loan requests.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Offers</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loanRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.amount}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell><Badge variant={request.status === 'Pending' ? 'secondary' : request.status === 'Connected' ? 'default' : 'outline'}>{request.status}</Badge></TableCell>
                    <TableCell>{request.offers}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">View Details</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="chat">
        <Card className="h-[600px]">
            <div className="grid grid-cols-12 h-full">
                <div className="col-span-4 border-r">
                    <CardHeader>
                        <CardTitle>Connections</CardTitle>
                    </CardHeader>
                    <ScrollArea className="h-[500px] px-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary cursor-pointer">
                                <Avatar><AvatarImage src="https://picsum.photos/seed/l1/40/40" /><AvatarFallback>AK</AvatarFallback></Avatar>
                                <div><p className="font-semibold">Amit K.</p><p className="text-xs text-muted-foreground">Let's discuss...</p></div>
                            </div>
                            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary cursor-pointer">
                                <Avatar><AvatarImage src="https://picsum.photos/seed/l2/40/40" /><AvatarFallback>RS</AvatarFallback></Avatar>
                                <div><p className="font-semibold">Ravi S.</p><p className="text-xs text-muted-foreground">Okay, agreed.</p></div>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
                <div className="col-span-8 flex flex-col h-full">
                    <div className="p-4 border-b flex items-center gap-3">
                        <Avatar><AvatarImage src="https://picsum.photos/seed/l1/40/40" /><AvatarFallback>AK</AvatarFallback></Avatar>
                        <p className="font-semibold">Amit K.</p>
                    </div>
                    <ScrollArea className="flex-grow p-4 bg-muted/50">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-end"><div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">Hello, I'm interested in your loan request.</div></div>
                            <div className="flex justify-start"><div className="bg-card p-3 rounded-lg max-w-xs border">Hi Amit, thank you. What terms can you offer?</div></div>
                            <div className="flex justify-end"><div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-xs">Let's discuss...</div></div>
                        </div>
                    </ScrollArea>
                    <div className="p-4 border-t">
                        <div className="relative">
                            <Input placeholder="Type a message..." className="pr-16" />
                            <Button size="sm" className="absolute top-1/2 right-1 -translate-y-1/2">Send</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
