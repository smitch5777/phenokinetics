import { Link } from "react-router-dom";
import { ArrowRight, Droplets, FlaskConical, Target } from "lucide-react";

import PageMeta from "../components/PageMeta";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Droplets,
    title: "Non-Invasive Testing",
    body: "No need for painful liver biopsies — our test uses a simple blood sample.",
  },
  {
    icon: Target,
    title: "Accurate Diagnosis",
    body: "Disease-specific transporter expression patterns yield reliable results.",
  },
  {
    icon: FlaskConical,
    title: "Clinical Impact",
    body: "Essential for identifying eligible patients and tracking treatment response throughout MASH clinical trials.",
  },
];

const Home = () => (
  <>
    <PageMeta route="/" />

    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      {/* Depth for the flat navy: a warm-side highlight behind the copy, and
          the logo mark blown up as a watermark rather than left unused. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(80%_95%_at_15%_0%,color-mix(in_oklch,var(--brand-blue),transparent_45%),transparent_65%)]"
      />
      <img
        src="/logo-mark-light-lg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-20 -z-10 hidden w-[30rem] max-w-none -translate-y-1/2 opacity-[0.16] select-none lg:block xl:-right-10 xl:w-[34rem]"
      />

      <Container className="py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-brand-pale uppercase">
            Non-invasive MASH diagnostic
          </p>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Revolutionary MASH Non-Invasive Test
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
            Transforming the diagnosis and clinical trial monitoring of
            metabolic dysfunction-associated steatohepatitis (MASH) through
            innovative exogenous probe technology.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 bg-white px-6 text-base text-brand-navy hover:bg-brand-pale"
            >
              <Link to="/science">
                Explore the Science
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <div>
              <dt className="inline-block border-b-2 border-brand-blue pb-0.5 text-lg font-medium text-white/90">
                AUROC
              </dt>
              <dd className="mt-1 text-3xl font-semibold sm:text-4xl">0.92</dd>
            </div>
            <div>
              <dt className="inline-block border-b-2 border-brand-blue pb-0.5 text-lg font-medium text-white/90">
                Sensitivity
              </dt>
              <dd className="mt-1 text-3xl font-semibold sm:text-4xl">0.88</dd>
            </div>
            <div>
              <dt className="inline-block border-b-2 border-brand-blue pb-0.5 text-lg font-medium text-white/90">
                Specificity
              </dt>
              <dd className="mt-1.5 text-3xl font-semibold sm:text-4xl">0.96</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-white/50">
            Source:{" "}
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/42531743/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-white/75"
            >
              Farrera et al., Drug Metabolism and Disposition (2026)
            </a>
          </p>
        </div>
      </Container>
    </section>

    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our Mission"
          title="A blood test in place of a biopsy"
          lead="PhenoKinetics is pioneering a non-invasive diagnostic liver function test for MASH, a serious inflammatory liver condition. Our innovative EZ-MASH test uses an exogenous probe to accurately diagnose patients, enabling real-time monitoring of disease resolution and precise patient identification for clinical trials."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <Card
              key={title}
              className="h-full transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">{body}</p>
              </CardContent>
            </Card>
          ))}
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
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Learn More About Our Technology
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
            Discover how PhenoKinetics is revolutionizing MASH diagnosis.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              className="h-11 bg-white px-6 text-base text-brand-navy hover:bg-brand-pale"
            >
              <Link to="/science">
                Explore the Science
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  </>
);

export default Home;
