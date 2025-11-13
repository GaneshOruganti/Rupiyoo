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
            title: 'Decoding Your Credit Score and How to Elevate It',
            description: 'An in-depth look at the components of your credit score with practical advice to enhance it.',
            category: 'Financial Wellness',
            date: 'October 26, 2023',
            image: PlaceHolderImages.find(p => p.id === 'blog-1'),
            content: `
<p>Your credit score is a pivotal number in your financial journey. It serves as a key indicator for lenders to assess the likelihood of timely repayments if they extend a loan or credit card. This article will clarify what a credit score is, the factors that shape it, and the steps you can take to improve it.</p>
<h3 class="font-bold text-xl my-4">What Are the Key Elements of Your Credit Score?</h3>
<p>While the precise calculations are proprietary to credit reporting agencies, the primary components are widely recognized:</p>
<ul class="list-disc list-inside space-y-2 my-4">
<li><strong>Payment Record (approx. 35%):</strong> This is the most critical element. Consistently paying bills on time is essential.</li>
<li><strong>Credit Utilization (approx. 30%):</strong> This refers to the proportion of your available credit that you are using. A lower ratio is generally better.</li>
<li><strong>Duration of Credit History (approx. 15%):</strong> A longer and well-managed credit history can have a positive effect on your score.</li>
<li><strong>Diversity of Credit (approx. 10%):</strong> Lenders appreciate seeing a mix of different credit types, such as credit cards, mortgages, and installment loans.</li>
<li><strong>Recent Credit Inquiries (approx. 10%):</strong> Applying for multiple new credit lines in a brief period can be seen as a risk and may temporarily reduce your score.</li>
</ul>
<h3 class="font-bold text-xl my-4">Practical Strategies for Score Improvement</h3>
<p>Enhancing your credit score is a long-term commitment. Here are some effective strategies:</p>
<ol class="list-decimal list-inside space-y-2 my-4">
<li><strong>Review Your Credit Report:</strong> Check for any inaccuracies and dispute them. You are entitled to a complimentary report from each major bureau every year.</li>
<li><strong>Automate Payments:</strong> Set up automatic payments or reminders to avoid missing due dates.</li>
<li><strong>Reduce Existing Debt:</strong> Concentrate on paying down credit card balances to decrease your credit utilization ratio.</li>
<li><strong>Be Selective with New Credit:</strong> Only apply for new credit when it's genuinely necessary.</li>
</ol>
<p>By grasping these concepts and implementing these strategies, you can cultivate a robust credit profile that unlocks greater financial opportunities.</p>
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
