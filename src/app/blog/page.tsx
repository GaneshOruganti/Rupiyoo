import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Rupiyoo Connect',
  description: 'Explore our latest articles on financial insights, secure lending, credit health, and fraud awareness.',
};

const blogPosts = [
  {
    slug: 'understanding-your-credit-score',
    title: 'Decoding Your Credit Score and How to Elevate It',
    description: 'An in-depth look at the components of your credit score with practical advice to enhance it.',
    category: 'Financial Wellness',
    date: 'October 26, 2023',
    image: PlaceHolderImages.find(p => p.id === 'blog-1')
  },
  {
    slug: 'safe-lending-practices',
    title: 'Five Secure Lending Strategies for P2P Platforms',
    description: 'Discover how to safeguard your capital when participating in peer-to-peer lending on platforms like Rupiyoo.',
    category: 'Peer-to-Peer Lending',
    image: PlaceHolderImages.find(p => p.id === 'blog-2')
  },
  {
    slug: 'spotting-and-avoiding-fraud',
    title: 'Identifying and Preventing Online Financial Scams',
    description: 'Stay proactive and secure your finances. We discuss prevalent scams and how you can steer clear of them.',
    category: 'Cybersecurity',
    date: 'October 22, 2023',
    image: PlaceHolderImages.find(p => p.id === 'blog-3')
  }
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-card pt-12">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Rupiyoo Insights</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Knowledge on personal finance, safe lending practices, and optimizing your experience on the Rupiyoo platform.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden">
                {post.image && (
                  <div className="relative aspect-video">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={post.image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                  <CardTitle className="mt-2 text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">{post.date}</p>
                    <Link href={`/blog/${post.slug}`} className="flex items-center text-sm font-semibold text-primary hover:underline">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
