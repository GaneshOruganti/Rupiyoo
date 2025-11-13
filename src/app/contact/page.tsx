import type { Metadata } from 'next';
import { Mail, Phone, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from './contact-form';

export const metadata: Metadata = {
  title: 'Contact Us | Rupiyoo Connect',
  description: 'Get in touch with the Rupiyoo support team. We are here to help you with your queries.',
};

const contactDetails = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Support Email",
    value: "support@rupiyoo.connect",
    href: "mailto:support@rupiyoo.connect"
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Phone",
    value: "+91 12345 67890",
    href: "tel:+911234567890"
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    title: "WhatsApp",
    value: "+91 12345 67890",
    href: "https://wa.me/911234567890"
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Operating Hours",
    value: "Mon - Fri, 9:00 AM - 6:00 PM IST"
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-card pt-12">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Get in Touch</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We're here to help. Whether you have a question about our features, a suggestion, or need support, please don't hesitate to reach out.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {contactDetails.map(detail => (
                <div key={detail.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-primary/10 p-4 rounded-lg">
                    {detail.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{detail.title}</h3>
                    {detail.href ? (
                      <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
