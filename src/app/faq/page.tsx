import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Get answers to common questions about the Rupiyoo platform for both borrowers and lenders.',
};

const borrowerFaqs = [
  {
    question: "Does Rupiyoo act as a direct lender?",
    answer: "No, Rupiyoo is a technology platform, not a lender. We provide a digital marketplace that connects individuals seeking loans (Borrowers) with those who can provide them (Lenders)."
  },
  {
    question: "Are there any charges for requesting a loan?",
    answer: "Signing up and posting a loan requirement on Rupiyoo is entirely free. All fees and terms related to a loan are negotiated and settled directly between you and the lender."
  },
  {
    question: "What is the typical timeframe for securing a loan?",
    answer: "The duration varies based on the specifics of your request and the number of active lenders in your location. Our platform is designed for rapid connections, but the final transaction time is determined by the parties involved."
  },
  {
    question: "Is my personal information kept secure?",
    answer: "Yes. We employ standard encryption and data security protocols to protect your data. Your personal details are only shared with a lender when you explicitly choose to connect with them."
  }
];

const lenderFaqs = [
  {
    question: "Who is eligible to become a lender on Rupiyoo?",
    answer: "Any individual or organization that complies with local money lending laws and regulations can register as a lender. All applicants must pass our mandatory verification process."
  },
  {
    question: "How does Rupiyoo verify the authenticity of borrowers?",
    answer: "We have a mandatory KYC (Know Your Customer) and verification process for all users. While we provide this verification, we strongly advise lenders to conduct their own due diligence before finalizing any loan."
  },
  {
    question: "Does Rupiyoo charge a commission on loans?",
    answer: "Our platform may feature a subscription or service fee for lenders to access the marketplace. We do not take any commission on the loan amount or interest. Our pricing is transparently outlined in the lender user agreement."
  },
  {
    question: "How are conflicts or disputes resolved?",
    answer: "Rupiyoo offers a secure communication channel but is not a party to any loan agreement. Therefore, we do not mediate disputes. All such issues must be resolved between the borrower and lender according to their agreed-upon terms."
  }
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-card pt-12">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Common Questions</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Looking for answers? Here you'll find information about our platform for both prospective borrowers and lenders.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-6">For Borrowers</h2>
                <Accordion type="single" collapsible className="w-full">
                  {borrowerFaqs.map((faq, index) => (
                    <AccordionItem value={`borrower-item-${index}`} key={index}>
                      <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
            </div>
            
            <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">For Lenders</h2>
                <Accordion type="single" collapsible className="w-full">
                  {lenderFaqs.map((faq, index) => (
                    <AccordionItem value={`lender-item-${index}`} key={index}>
                      <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
            </div>
        </div>
      </section>
    </>
  );
}
