import { HandCoins } from 'lucide-react';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-2 text-2xl font-bold ${className}`}>
        <HandCoins className="h-8 w-8 text-primary" />
        <span className="text-foreground">
            Rupiyoo<span className="text-primary">.</span>
        </span>
    </Link>
  );
}
