import { useId, useState } from 'react';

import PageMeta from '../components/PageMeta';
import Container from '../components/Container';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const teamMembers = [
  {
    name: 'Nathan J. Cherrington, Ph.D.',
    role: 'Founder',
    image: '/images/team/nathan-cherrington.jpg',
    bio: 'Nathan J. Cherrington, Ph.D. is the Musil Family Endowed Professor and 1885 Distinguished Scholar in the Department of Pharmacology and Toxicology, and the Associate Dean for Research in the College of Pharmacy at the University of Arizona. Nathan has published over 140 original research papers on the sources of inter-individual variability in drug disposition and response. His current research identified ezetimibe as a biomarker to diagnose the progression of MASH.',
  },
  {
    name: 'Curtis Finster',
    role: 'Chief Executive Officer',
    image: '/images/team/curt-finster.jpg',
    imagePosition: 'center 20%',
    bio: "Curtis Finster's career has been focused on small business startup growth and financial management discipline. He has experience in market driven financial changes that require adjustments in order for a company to maintain a high standard of quality control and fiscal responsibility. Mr. Finster's experience encompasses development of finance training, sales forecasting modeling, marketing and solutions to optimize the benefits for the company's focus and goals. His years of experience through market changes provide the perfect opportunity to lead the startup phase into future expansion. His purpose and role with PhenoKinetics, LLC is to be responsible for assisting with the long-term vision for the company to navigate the growth of the company as we bring this important and vital MASH diagnostic product to market.",
  },
  {
    name: 'Tim White',
    role: 'Chief Operating Officer',
    image: '/images/team/tim-white.jpg',
    bio: "Tim White's career has been focused on efficiently deploying technical solutions into practice. He has experience leading program teams in multiple industries and functional teams in supply chain, manufacturing, engineering, and quality. His experience spans development of cutting-edge technical solutions to optimizing the manufacturing of decades-old design. He depends on his training as a Systems Engineer to seek broad perspectives and create data-driven solutions that optimize for cost, schedule, and technical performance.",
  },
  {
    name: 'John Cherrington',
    role: 'Executive Director',
    image: '/images/team/john-cherrington.jpg',
    bio: "John Cherrington's career has been focused on sales and partner relations in the banking industry. He has experience managing relationships with partners doing up to 1.2 billion in sales. His experience in managing major client relationships and a knowledge of the banking industry provide insight and value in facilitating the growth of PhenoKinetics' current and future relationships. His role as Executive Director will allow him to leverage his experience to strategically position PhenoKinetics as we go to market.",
  },
  {
    name: 'Emily Mitchell',
    role: 'Research Scientist',
    image: '/images/team/emily-mitchell.jpg',
    bio: 'Emily Mitchell has four years of experience in biochemical and analytical chemistry in GLP and research testing. Ms. Mitchell is responsible for the standardization of the optimized analytical methods at PhenoKinetics. She has extensive background to develop the original methods used for biomarker quantification purposes. She provides technical expertise on method development/analysis for the company.',
  },
];

// Bios run to ~130 words. Showing them in full made every card a wall of text,
// so they clamp to four lines with an in-place expand.
const TeamMemberCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);
  const bioId = useId();

  return (
    <Card className="h-full gap-0 p-6">
      <div className="flex items-center gap-4">
        <img
          src={member.image}
          alt={member.name}
          width="128"
          height="128"
          loading="lazy"
          className="size-20 shrink-0 rounded-2xl object-cover sm:size-24"
          style={{ objectPosition: member.imagePosition ?? 'center' }}
        />
        <div className="min-w-0">
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <Badge variant="secondary" className="mt-2">
            {member.role}
          </Badge>
        </div>
      </div>

      <p
        id={bioId}
        className={cn(
          'mt-5 leading-relaxed text-muted-foreground',
          !expanded && 'line-clamp-4'
        )}
      >
        {member.bio}
      </p>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={bioId}
        className="mt-3 self-start rounded text-sm font-medium text-primary hover:underline"
      >
        {expanded ? 'Show less' : 'Read full bio'}
      </button>
    </Card>
  );
};

const Team = () => (
  <>
    <PageMeta route="/team" />

    <section className="border-b border-border bg-secondary/60">
      <Container className="py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">Our Team</p>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">
            The people behind the technology
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Meet the dedicated professionals behind PhenoKinetics' innovative MASH diagnostic
            technology.
          </p>
        </div>
      </Container>
    </section>

    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  </>
);

export default Team;
