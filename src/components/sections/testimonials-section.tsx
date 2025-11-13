import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    name: "Priya S.",
    role: "Borrower, Delhi",
    quote: "Rupiyoo was a real help! I needed funds for a family emergency and was connected to an understanding lender nearby in just a few hours. The entire process was straightforward and clear.",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-1')
  },
  {
    name: "Amit K.",
    role: "Lender, Mumbai",
    quote: "As a lender, platform security is my top priority. Rupiyoo's thorough verification process gave me the assurance I needed to lend. I have successfully found genuine borrowers here.",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-2')
  },
  {
    name: "Sunita R.",
    role: "Borrower, Bangalore",
    quote: "I was initially hesitant about online platforms, but Rupiyoo's commitment to privacy is truly impressive. The secure in-app chat is a great feature, and I never had to disclose my phone number.",
    avatar: PlaceHolderImages.find(p => p.id === 'testimonial-3')
  }
];

export function TestimonialsSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        Valued by Our Community
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Read what our users are saying about their experience with Rupiyoo Connect.
                    </p>
                </div>
                
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className="h-full">
                            <CardContent className="flex flex-col items-start justify-between p-6 h-full">
                                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4 mt-6 pt-6 border-t w-full">
                                    {testimonial.avatar && (
                                        <Avatar>
                                            <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:inline-flex" />
                  <CarouselNext className="hidden md:inline-flex" />
                </Carousel>
            </div>
        </section>
    );
}
