import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: 'FAQ | Rupiyoo Connect',
  description: 'Find answers to frequently asked questions about Rupiyoo for both borrowers and lenders.',
};

const borrowerFaqs = [
  {
    question: "Is Rupiyoo a direct lender?",
    answer: "No, Rupiyoo is not a lender. We are a technology platform, a marketplace that connects individuals who need loans (borrowers) with individuals and entities who can provide them (lenders)."
  },
  {
    question: "Is there a fee to request a loan?",
    answer: "Creating an account and posting a loan request on Rupiyoo is completely free. Any fees or charges related to the loan itself are determined and agreed upon directly between you and the lender."
  },
  {
    question: "How long does it take to get a loan?",
    answer: "The timeline depends on several factors, including the details of your request and the availability of lenders in your area. Our platform facilitates quick connections, often within hours, but the final transaction time is up to the involved parties."
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. We use industry-standard encryption and data security practices to protect your information. Your personal details are only shared with a lender when you choose to connect with them."
  }
];

const lenderFaqs = [
  {
    question: "Who can become a lender on Rupiyoo?",
    answer: "Any individual or entity that complies with local laws and regulations for money lending can apply to be a lender. All lenders must complete our mandatory verification process."
  },
  {
    question: "How does Rupiyoo ensure borrowers are genuine?",
    answer: "We have a mandatory KYC and verification process for all users, including borrowers. While we facilitate this verification, we always recommend lenders perform their own due diligence before finalizing any loan agreement."
  },
  {
    question: "Does Rupiyoo take a commission on my loans?",
    answer: "Our platform may have a subscription or service fee for lenders to access the marketplace. We do not take a commission on the loan amount or interest. Our fee structure is transparent and available in the lender's user agreement."
  },
  {
    question: "How are disputes handled?",
    answer: "Rupiyoo provides a secure communication platform but is not a party to the loan agreement. Therefore, we do not arbitrate disputes. All disagreements must be resolved between the borrower and lender as per their agreed terms."
  }
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-card pt-12">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Frequently Asked Questions</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Have questions? We've got answers. Find information about our platform for both borrowers and lenders.
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
