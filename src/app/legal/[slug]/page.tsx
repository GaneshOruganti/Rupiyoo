import { legalContent } from '@/lib/legal-content';
import { ALL_LEGAL_LINKS } from '@/lib/constants';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = legalContent[params.slug];
  if (!doc) {
    return { title: 'Document Not Found' };
  }
  return {
    title: `${doc.title} | Rupiyoo Connect`,
    description: `Read the ${doc.title} for Rupiyoo Connect.`,
  };
}

export async function generateStaticParams() {
  return ALL_LEGAL_LINKS.map(link => ({
    slug: link.slug,
  }));
}

export default function LegalPage({ params }: { params: { slug: string } }) {
  const doc = legalContent[params.slug];

  if (!doc) {
    notFound();
  }

  return (
    <div className="bg-card">
      <div className="container mx-auto max-w-4xl py-12 md:py-16">
        <header className="mb-8 border-b pb-4">
          <h1 className="text-4xl font-extrabold tracking-tight">{doc.title}</h1>
        </header>
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary prose-ul:text-muted-foreground prose-p:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: doc.content }}
        />
      </div>
    </div>
  );
}
