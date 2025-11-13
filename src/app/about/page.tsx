import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Eye, FileText, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Rupiyoo Connect',
  description: 'Discover Rupiyoo\'s mission to forge a transparent, secure, and streamlined marketplace for borrowers and lenders.',
};

const values = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Uncompromising Security",
        description: "We utilize advanced security protocols to safeguard your information and privacy at all times."
    },
    {
        icon: <Eye className="h-8 w-8 text-primary" />,
        title: "Total Transparency",
        description: "We operate with complete clarity. You'll find no hidden charges or unexpected conditions on our platform."
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Regulatory Compliance",
        description: "Our commitment is to adhere to all digital lending regulations to foster a fair and lawful marketplace."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Ethical Practices",
        description: "Our ecosystem promotes responsible financial interactions, building a community founded on integrity."
    }
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-hero');

  return (
    <>
      <section className="bg-card pt-12">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Goal: Empowering Finance Through Direct Connections</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are committed to creating a reliable bridge between individuals seeking financial aid and those able to provide it, nurturing a community of mutual growth.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={1200}
                height={600}
                className="rounded-xl object-cover aspect-[2/1]"
                data-ai-hint={aboutImage.imageHint}
              />
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">The Challenge We Address</h2>
                <p className="mt-4 text-muted-foreground">
                    In the current financial environment, securing reliable credit can be a major hurdle for many, while lenders face difficulties in locating verified, credit-worthy borrowers. Conventional financial systems are often sluggish, non-transparent, and not easily accessible. Rupiyoo was created to overcome this gap. We use technology to establish a clear, effective, and safe digital marketplace where both borrowers and lenders can engage with assurance.
                </p>
            </div>
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Our Forward-Looking Vision</h2>
                <p className="mt-4 text-muted-foreground">
                    We envision becoming India's most dependable platform for peer-to-peer financial engagement. Our goal is to empower millions by offering a fair and accessible space where financial needs are met with dignity and transparency. We are dedicated to continuous innovation to enhance the safety, speed, and user-friendliness of our platform, ensuring Rupiyoo sets the benchmark for digital lending marketplaces.
                </p>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Foundational Principles</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Trust is the bedrock of our service. These principles inform every action we take.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map(value => (
                    <Card key={value.title} className="text-center bg-background border-none shadow-sm">
                        <CardHeader className="items-center">
                            {value.icon}
                            <CardTitle className="mt-4">{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{value.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
