import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

import PageMeta from '../components/PageMeta';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    title: 'Transporter Changes',
    body: 'Progression to MASH results in changes to three separate drug transport processes, which combine to result in decreased biliary efflux of our probe drug metabolite (EZE-Gluc).',
  },
  {
    title: 'Biomarker Retention',
    body: 'The metabolite is retained in the blood. These transporter changes result in the accumulation of our exogenous biomarker in MASH patients.',
  },
  {
    title: 'Disease Correlation',
    body: 'The biomarker levels increase with disease severity, providing a quantifiable measure of MASH progression without invasive procedures.',
  },
];

const advantages = [
  {
    title: 'Non-Invasive Testing',
    body: 'Unlike traditional liver biopsies, our test requires only a plasma sample, making it safer and more comfortable for patients.',
  },
  {
    title: 'Disease-Specific Detection',
    body: 'Our data demonstrates a disease-specific transporter expression pattern and selective biomarker substrate for those transporters.',
  },
  {
    title: 'Proven Concept',
    body: 'Exciting proof of concept in MASH patients shows higher biomarker metabolite levels in patients with hepatic impairment that increase with disease severity.',
  },
  {
    title: 'Clinical Applications',
    body: 'The test can identify patients for therapy and patient selection to reduce confounding factors and potential liabilities in clinical trials.',
  },
];

const applications = [
  'Developing MASH therapeutics',
  'Conducting effective clinical trials for other indications',
  'Excluding patients with confounding factors',
  'Reducing potential liabilities in drug development',
];

const Science = () => (
  <>
    <PageMeta route="/science" />

    <section className="border-b border-border bg-secondary/60">
      <Container className="py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            The Science
          </p>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">The Science Behind EZ-MASH</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Metabolic dysfunction-Associated Steatohepatitis (MASH) has traditionally been identified
            through invasive liver biopsy, despite being a serious inflammatory, fibrogenic condition
            with significant effects on drug disposition and toxicity.
          </p>
        </div>
      </Container>
    </section>

    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Mechanism"
          title="How EZ-MASH Works"
          lead="Three linked changes turn a routine sample into a quantifiable read on disease severity."
        />

        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map(({ title, body }, i) => (
            <li key={title}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-full bg-brand-navy text-sm font-semibold text-white tabular-nums">
                    {i + 1}
                  </div>
                  <CardTitle className="mt-4 text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{body}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </Container>
    </section>

    <section className="border-y border-border bg-muted/60 py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="Advantages" title="Key Advantages of Our Approach" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {advantages.map(({ title, body }) => (
            <Card key={title} className="h-full bg-background">
              <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>

    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Technical Background</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our EZ-MASH test proposes that plasma levels of EZE-Gluc can be used as a
              diagnostic probe to distinguish patients with MASH from those with steatosis or healthy
              livers. The altered disposition of EZE-Gluc in MASH patients serves as a specific,
              non-invasive exogenous biomarker capable of diagnosing patients with MASH.
            </p>
          </div>

          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="text-lg">Applications in Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3.5">
                {applications.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>

    <section className="pb-20 lg:pb-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-brand-navy px-8 py-16 text-center text-white lg:px-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(70%_120%_at_50%_0%,color-mix(in_oklch,var(--brand-blue),transparent_50%),transparent_70%)]"
          />
          <h2 className="text-3xl font-semibold sm:text-4xl">Ready to Learn More?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">
            Contact us to discover how EZ-MASH can transform MASH diagnosis in your clinical practice
            or research.
          </p>
          <div className="mt-9 flex justify-center">
            <Button
              asChild
              className="h-11 bg-white px-6 text-base text-brand-navy hover:bg-brand-pale"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export default Science;
