import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PLAY_STORE_URL } from '@/lib/constants';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'app-in-phone');

  return (
    <section className="relative bg-card overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
      <div className="container relative py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              Your Financial Connection is Here. Download the App.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Join thousands of users on Rupiyoo. The trusted digital marketplace to find verified lenders or discover creditworthy individuals. Fast, secure, and transparent.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                  Install the App <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
             <div className="mt-8">
                <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Image src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" width={180} height={68} />
                </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span>10,000+ Happy Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-5 w-5 text-accent" />
                <span>50,000+ App Downloads</span>
              </div>
            </div>
          </div>
          <div className="relative hidden md:flex items-center justify-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={350}
                height={700}
                data-ai-hint={heroImage.imageHint}
                className="rounded-lg object-contain"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
