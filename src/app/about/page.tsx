import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Eye, FileText, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Rupiyoo Connect',
  description: 'Learn about Rupiyoo\'s mission to create a transparent, secure, and efficient marketplace for borrowers and lenders.',
};

const values = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Security",
        description: "We employ state-of-the-art security measures to protect your data and privacy at every step."
    },
    {
        icon: <Eye className="h-8 w-8 text-primary" />,
        title: "Transparency",
        description: "We believe in clear communication. There are no hidden fees or surprise terms on our platform."
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Compliance",
        description: "We are committed to upholding all applicable laws and digital lending guidelines to ensure a fair marketplace."
    },
    {
        icon: <Handshake className="h-8 w-8 text-primary" />,
        title: "Fair Practices",
        description: "Our platform promotes responsible lending and borrowing, fostering a community built on mutual respect."
    }
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-hero');

  return (
    <>
      <section className="bg-card pt-12">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Mission: Financial Empowerment Through Connection</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are dedicated to building a trusted bridge between those who need financial support and those who can provide it, fostering a community of growth and opportunity.
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
                <h2 className="text-3xl font-bold tracking-tight">The Problem We Solve</h2>
                <p className="mt-4 text-muted-foreground">
                    In today's financial landscape, finding trustworthy credit can be challenging for individuals, while lenders struggle to find verified, creditworthy borrowers. Traditional systems are often slow, opaque, and inaccessible. Rupiyoo was born from the desire to solve this disconnect. We leverage technology to create a transparent, efficient, and secure digital marketplace where both parties can connect with confidence.
                </p>
            </div>
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Our Vision for the Future</h2>
                <p className="mt-4 text-muted-foreground">
                    Our vision is to be India's most trusted platform for peer-to-peer financial connections. We aim to empower millions by providing a level playing field where financial needs are met with integrity and respect. We are constantly innovating to make our platform safer, faster, and more user-friendly, ensuring that Rupiyoo remains the gold standard for digital lending marketplaces.
                </p>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Core Values</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Trust is the foundation of our platform. These values guide every decision we make.
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
