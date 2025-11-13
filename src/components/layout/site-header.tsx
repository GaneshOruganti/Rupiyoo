'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, HandCoins } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/constants';
import { Logo } from '@/components/logo';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Logo />
        <nav className="hidden flex-1 md:flex md:items-center md:justify-center md:gap-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === link.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button variant="outline" asChild className="hidden md:inline-flex">
            <Link href="/dashboard/lender">Register as Lender</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/dashboard/borrower">Request a Loan</Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Logo />
                </div>
                <nav className="flex flex-col gap-4 p-4 text-lg font-medium">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'transition-colors hover:text-foreground/80',
                        pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2 p-4 border-t">
                    <Button variant="outline" asChild size="lg">
                        <Link href="/dashboard/lender">Register as Lender</Link>
                    </Button>
                    <Button asChild size="lg">
                        <Link href="/dashboard/borrower">Request a Loan</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
