import { Mail, MapPin, Phone } from 'lucide-react';

import PageMeta from '../components/PageMeta';
import Container from '../components/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => (
  <>
    <PageMeta route="/contact" />

    <section className="border-b border-border bg-secondary/60">
      <Container className="py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">Contact</p>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">Get in touch</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Get in touch with PhenoKinetics to learn more about our innovative MASH diagnostic
            solutions.
          </p>
        </div>
      </Container>
    </section>

    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="h-full">
            <CardHeader>
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Mail className="size-5" aria-hidden="true" />
              </div>
              <CardTitle className="mt-4 text-lg">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5">
              <p className="text-muted-foreground">For all inquiries</p>
              <a
                href="mailto:info@phenokinetics.com"
                className="rounded font-medium text-primary hover:underline"
              >
                info@phenokinetics.com
              </a>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </div>
              <CardTitle className="mt-4 text-lg">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5">
              <p className="text-muted-foreground">Our headquarters</p>
              <address className="leading-relaxed font-medium not-italic">
                PhenoKinetics, LLC
                <br />
                8035 N Oracle Rd
                <br />
                Tucson, AZ 85704
                <br />
                United States
              </address>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                <Phone className="size-5" aria-hidden="true" />
              </div>
              <CardTitle className="mt-4 text-lg">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1.5">
              <p className="text-muted-foreground">Business hours</p>
              <a href="tel:+15203431710" className="rounded font-medium text-primary hover:underline">
                (520) 343-1710
              </a>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  </>
);

export default Contact;
