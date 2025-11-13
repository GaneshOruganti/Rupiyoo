import Link from 'next/link';
import { Logo } from '@/components/logo';
import { NAV_LINKS, LEGAL_LINKS, USER_AGREEMENT_LINKS, POLICY_LINKS } from '@/lib/constants';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '../ui/button';

export function SiteFooter() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 pr-8">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Rupiyoo is a digital marketplace connecting verified money lenders with borrowers. We are not a lender, but a facilitator of financial connections.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.slice(0,5).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="mt-4 space-y-2">
              {[...LEGAL_LINKS, ...USER_AGREEMENT_LINKS].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Policies</h4>
            <ul className="mt-4 space-y-2">
              {POLICY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col md:flex-row items-center justify-between py-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rupiyoo Connect. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed and developed by{' '}
            <a
              href="https://speedopus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Speedopus
            </a>
          </p>
          <p className="text-xs text-muted-foreground/80 mt-2 md:mt-0 max-w-md text-center md:text-right">
            Disclaimer: Rupiyoo is a technology platform that facilitates connections between borrowers and lenders. We do not lend money directly or guarantee any loans.
          </p>
        </div>
      </div>
    </footer>
  );
}
