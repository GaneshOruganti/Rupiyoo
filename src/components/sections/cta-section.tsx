import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PLAY_STORE_URL } from '@/lib/constants';

export function CallToActionSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Join the Rupiyoo community today. Whether you're looking to borrow or lend, your next financial connection is just a few clicks away.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              Request a Loan <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              Register as a Lender
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
