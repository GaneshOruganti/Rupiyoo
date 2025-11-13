import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// In a real app, you would fetch this data based on the slug
const getPostData = (slug: string) => {
    const posts = [
        {
            slug: 'understanding-your-credit-score',
            title: 'Understanding Your Credit Score and How to Improve It',
            description: 'A deep dive into what makes up your credit score and actionable tips to boost it.',
            category: 'Finance',
            date: 'October 26, 2023',
            image: PlaceHolderImages.find(p => p.id === 'blog-1'),
            content: `
<p>Your credit score is one of the most important numbers in your financial life. It's a three-digit number that lenders use to help them decide how likely they are to be repaid on time if they grant you a loan or a credit card. In this post, we'll break down what a credit score is, what factors influence it, and how you can work to improve it.</p>
<h3 class="font-bold text-xl my-4">What Factors Make Up Your Credit Score?</h3>
<p>While the exact formulas are proprietary to credit bureaus like CIBIL, the general components are well-known:</p>
<ul class="list-disc list-inside space-y-2 my-4">
<li><strong>Payment History (approx. 35%):</strong> This is the most significant factor. Paying your bills on time, every time, is crucial.</li>
<li><strong>Amounts Owed (approx. 30%):</strong> This is your credit utilization ratio—how much of your available credit you're using. Lower is better.</li>
<li><strong>Length of Credit History (approx. 15%):</strong> A longer history of responsible credit management can positively impact your score.</li>
<li><strong>Credit Mix (approx. 10%):</strong> Lenders like to see that you can manage different types of credit, such as credit cards, mortgages, and personal loans.</li>
<li><strong>New Credit (approx. 10%):</strong> Opening several new credit accounts in a short period can be a red flag and temporarily lower your score.</li>
</ul>
<h3 class="font-bold text-xl my-4">Actionable Steps to Improve Your Score</h3>
<p>Improving your credit score is a marathon, not a sprint. Here are some steps to get you on the right track:</p>
<ol class="list-decimal list-inside space-y-2 my-4">
<li><strong>Check Your Credit Report:</strong> Look for errors and dispute any you find. You're entitled to a free report from each bureau annually.</li>
<li><strong>Set Up Payment Reminders:</strong> Automate payments or set up alerts to ensure you never miss a due date.</li>
<li><strong>Pay Down Debt:</strong> Focus on paying down credit card balances to lower your credit utilization ratio.</li>
<li><strong>Avoid Opening Unnecessary Accounts:</strong> Only apply for new credit when you truly need it.</li>
</ol>
<p>By understanding these factors and taking proactive steps, you can build a strong credit history that opens doors to better financial opportunities.</p>
            `
        },
    ];
    return posts.find(p => p.slug === slug);
};


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostData(params.slug);
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | Rupiyoo Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  if (!post) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <p className="mt-4 text-muted-foreground">The blog post you're looking for doesn't exist.</p>
        <Link href="/blog" className="mt-8 inline-block text-primary hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </div>

          <header className="mb-8">
            <Badge variant="secondary">{post.category}</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">{post.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
            <p className="mt-4 text-sm text-muted-foreground">Published on {post.date}</p>
          </header>

          {post.image && (
            <div className="relative aspect-video mb-8">
              <Image
                src={post.image.imageUrl}
                alt={post.title}
                fill
                className="rounded-lg object-cover"
                data-ai-hint={post.image.imageHint}
                priority
              />
            </div>
          )}

          <div 
            className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}
