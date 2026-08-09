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
    body: 'As MASH develops, three separate liver transport proteins change the way they handle drugs and their metabolites. Together, that slows how efficiently our probe metabolite, EZE-Gluc, gets excreted through bile.',
  },
  {
    title: 'Probe Retention',
    body: "With biliary excretion slowed down, EZE-Gluc backs up into the bloodstream instead of clearing out. That's what leaves MASH patients with measurably higher levels of it in plasma.",
  },
  {
    title: 'Disease Correlation',
    body: "The more advanced the disease, the higher those plasma levels climb, so a blood draw can stand in for a lot of what a biopsy is normally used to tell you.",
  },
];

const advantages = [
  {
    title: 'Non-Invasive Testing',
    body: 'A liver biopsy means sedation, a needle through the abdomen, and a real risk of bleeding or infection. Our test just needs a plasma sample.',
  },
  {
    title: 'Disease-Specific Detection',
    body: "The transporters that shift in MASH don't shift the same way in simple steatosis or in a healthy liver, and EZE-Gluc happens to be a substrate for exactly those transporters. That's what keeps the test specific instead of just flagging general liver stress.",
  },
  {
    title: 'Published & Peer-Reviewed',
    body: 'In a study of biopsy-confirmed patients, plasma EZE-Gluc ran about 4.5x higher in MASH patients. Of the individual NAS components, it tracked most closely with hepatocyte ballooning, the pathology finding that actually defines the disease, reaching an AUROC of 0.97 (95% CI, 0.93–1.00) on the 60-minute sample.',
    link: {
      href: 'https://pubmed.ncbi.nlm.nih.gov/42531743/',
      label: 'Read the paper in Drug Metabolism and Disposition',
    },
  },
  {
    title: 'Clinical Applications',
    body: 'Beyond diagnosis, the test can screen patients into or out of trials, cutting down on the confounding factors that make MASH drug development so hard to run cleanly.',
  },
];

const comparisonTests = [
  {
    name: 'EZ-MASH (EZE-Gluc)',
    auroc: '0.92',
    sensitivity: '0.88',
    specificity: '0.96',
    note: 'Biopsy-confirmed MASH vs. non-MASH',
    highlight: true,
  },
  {
    name: 'FAST score (FibroScan + AST)',
    auroc: '0.77',
    sensitivity: '0.88',
    specificity: '0.53',
    note: 'Fibrotic MASH: still requires fibrosis ≥F2, not activity alone',
  },
  {
    name: 'MACK-3',
    auroc: '0.77',
    sensitivity: '0.94',
    specificity: '0.40',
    note: 'Fibrotic MASH: purpose-built for this endpoint; best blood test in study',
  },
  {
    name: 'Agile3+',
    auroc: '0.71',
    sensitivity: '0.61',
    specificity: '0.71',
    note: 'Fibrotic MASH: newer elastography composite (FAST successor)',
  },
  {
    name: 'FNI (Fibrotic NASH Index)',
    auroc: '0.71',
    sensitivity: '0.97',
    specificity: '0.11',
    note: 'Fibrotic MASH: purpose-built for this endpoint, unlike FIB-4',
  },
  {
    name: 'ELF (Enhanced Liver Fibrosis)',
    auroc: '0.70',
    sensitivity: '1.00',
    specificity: '0.05',
    note: 'Fibrotic MASH: built for fibrosis staging, not MASH',
  },
  {
    name: 'FIB-4',
    auroc: '0.67',
    sensitivity: '0.63',
    specificity: '0.61',
    note: 'Fibrotic MASH: built for fibrosis staging, not MASH',
  },
  {
    name: 'FibroTest',
    auroc: '0.62',
    sensitivity: '0.65',
    specificity: '0.51',
    note: 'Fibrotic MASH: built for fibrosis staging, not MASH',
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
            Metabolic dysfunction-associated steatohepatitis (MASH) is a serious inflammatory,
            fibrogenic condition with significant effects on drug disposition and toxicity, yet it
            has traditionally been identified only through invasive liver biopsy. Non-invasive
            blood tests and imaging exist, but most were built to flag advanced fibrosis rather
            than MASH itself, and fall short on diagnostic accuracy.
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
          {advantages.map(({ title, body, link }) => (
            <Card key={title} className="h-full bg-background">
              <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">{body}</p>
                {link && (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    {link.label}
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>

    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Study Results"
          title="What the Data Shows"
          lead="In a cohort of biopsy-confirmed patients, plasma EZE-Gluc separated MASH from non-MASH clearly."
        />

        <dl className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-6">
          <div>
            <dt className="inline-block border-b-2 border-primary pb-0.5 text-lg font-medium text-foreground">
              AUROC
            </dt>
            <dd className="mt-1 text-3xl font-semibold sm:text-4xl">0.92</dd>
          </div>
          <div>
            <dt className="inline-block border-b-2 border-primary pb-0.5 text-lg font-medium text-foreground">
              Sensitivity
            </dt>
            <dd className="mt-1 text-3xl font-semibold sm:text-4xl">0.88</dd>
          </div>
          <div>
            <dt className="inline-block border-b-2 border-primary pb-0.5 text-lg font-medium text-foreground">
              Specificity
            </dt>
            <dd className="mt-1 text-3xl font-semibold sm:text-4xl">0.96</dd>
          </div>
        </dl>

        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-muted-foreground">
          Source:{' '}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/42531743/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Farrera et al., Drug Metabolism and Disposition (2026)
          </a>
        </p>

        <Card className="mx-auto mt-8 max-w-xl bg-primary/5">
          <CardContent className="py-5 text-center">
            <p className="text-sm text-muted-foreground">
              Component-level analysis: of all NAS components, plasma EZE-Gluc tracked most closely
              with{' '}
              <span className="font-medium text-foreground">hepatocyte ballooning</span>, the
              histologic feature that defines MASH, reaching
            </p>
            <p className="mt-1 text-3xl font-semibold sm:text-4xl">0.97 AUROC</p>
            <p className="mt-1 text-sm text-muted-foreground">
              (95% CI, 0.93–1.00) on the 60-minute post-dose sample
            </p>
          </CardContent>
        </Card>
      </Container>
    </section>

    <section className="border-t border-border py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Comparative Performance"
          title="How EZ-MASH Compares to Existing Non-Invasive Tests"
          lead="FIB-4, ELF, and elastography-based scores are all widely used, but most were developed and validated to detect fibrosis, not MASH itself. Measured directly against a MASH diagnosis, their accuracy falls even further behind EZ-MASH."
        />

        <div className="mt-16 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-muted/60 text-sm text-muted-foreground">
                <th scope="col" className="px-5 py-3.5 font-medium">
                  Test
                </th>
                <th scope="col" className="px-5 py-3.5 font-medium">
                  AUROC
                </th>
                <th scope="col" className="px-5 py-3.5 font-medium">
                  Sensitivity
                </th>
                <th scope="col" className="px-5 py-3.5 font-medium">
                  Specificity
                </th>
                <th scope="col" className="px-5 py-3.5 font-medium">
                  What it was validated for
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonTests.map(({ name, auroc, sensitivity, specificity, note, highlight }, i) => (
                <tr
                  key={name}
                  className={
                    i === comparisonTests.length - 1
                      ? highlight
                        ? 'bg-brand-blue'
                        : undefined
                      : highlight
                        ? 'border-b border-white/40 bg-brand-blue'
                        : 'border-b border-border'
                  }
                >
                  <td
                    className={
                      highlight
                        ? 'px-5 py-4 text-base font-semibold text-white'
                        : 'px-5 py-4 font-medium text-foreground'
                    }
                  >
                    {name}
                  </td>
                  <td
                    className={`px-5 py-4 tabular-nums text-foreground ${highlight ? 'text-lg font-bold text-white' : ''}`}
                  >
                    {auroc}
                  </td>
                  <td
                    className={`px-5 py-4 tabular-nums text-foreground ${highlight ? 'text-lg font-bold text-white' : ''}`}
                  >
                    {sensitivity}
                  </td>
                  <td
                    className={`px-5 py-4 tabular-nums text-foreground ${highlight ? 'text-lg font-bold text-white' : ''}`}
                  >
                    {specificity}
                  </td>
                  <td className={`px-5 py-4 text-sm ${highlight ? 'text-white/80' : 'text-muted-foreground'}`}>{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Sources: EZ-MASH:{' '}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/42531743/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Farrera et al., Drug Metabolism and Disposition (2026)
          </a>
          . All other tests:{' '}
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/40212791/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Fichez et al., JHEP Reports (2025)
          </a>
          .
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          All seven comparators come from a single study of 1,005 biopsy-proven MASLD patients
          across five centers, each test evaluated against fibrotic MASH (MASH plus clinically
          significant fibrosis, ≥F2), the endpoint used to screen patients into MASH drug trials,
          rather than fibrosis stage alone. Sensitivity and specificity reflect each test's
          published rule-out cutoff (FIB-4 &lt;1.30, ELF &lt;7.7, FAST ≤0.35, MACK-3 &lt;0.135,
          Agile3+ &lt;0.451, FNI ≤0.10, FibroTest &lt;0.32); each test trades this for a different
          sensitivity and specificity pair at a separate, more specific rule-in cutoff, not shown
          here. FIB-4's AUROC (0.67) comes from the same 817-patient elastography subgroup as FAST
          and Agile3+, but the paper reports its sensitivity and specificity only for the full
          1,005-patient cohort, so those two figures are not drawn from the same patients.
        </p>

        <p className="mt-4 text-sm text-muted-foreground">
          These same tests report substantially higher AUROCs, 0.76 to 0.85, in studies that assess
          only whether they can detect fibrosis stage, the endpoint FIB-4, ELF, and FibroTest were
          actually designed and validated for. Against a MASH diagnosis instead, all three perform
          substantially worse. FNI, MACK-3, FAST, and Agile3+ perform better here because they were
          designed for a MASH-inclusive endpoint, though that endpoint still requires significant
          fibrosis alongside MASH activity, so none of them measures activity in isolation. For
          reference, ALT, a routine liver enzyme test, reached only 0.68 AUROC (63% sensitivity,
          65% specificity) against a histologic MASH diagnosis in the NIMBLE cohort (
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/37679433/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Sanyal et al., Nature Medicine, 2023
          </a>
          ).
        </p>

      </Container>
    </section>

    <section className="border-t border-border py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Technical Background</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              The approach is straightforward: give a patient a small, subtherapeutic dose of
              ezetimibe, then measure how much of its metabolite, EZE-Gluc, shows up in plasma.
              Because the liver transporters that clear EZE-Gluc are altered specifically in MASH,
              the amount that accumulates in blood separates MASH patients from those with simple
              steatosis or a healthy liver.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              This mechanism is described in{' '}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/42531743/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline"
              >
                Farrera et al., Drug Metabolism and Disposition (2026)
              </a>
              , which found roughly 4.5-fold higher plasma EZE-Gluc in biopsy-confirmed MASH
              patients compared to non-MASH patients.
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
