import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Every section opens the same way — small eyebrow, heading, optional lead —
// so the pages share a rhythm instead of each one sizing its own h2.
const SectionHeading = ({ eyebrow, title, lead, align = 'center', className, id }) => (
  <div
    className={cn(
      'flex max-w-3xl flex-col gap-4',
      align === 'center' && 'mx-auto items-center text-center',
      className
    )}
  >
    {eyebrow && (
      <Badge variant="secondary" className="tracking-wide uppercase">
        {eyebrow}
      </Badge>
    )}
    <h2 id={id} className="text-3xl font-semibold sm:text-4xl">
      {title}
    </h2>
    {lead && <p className="text-lg leading-relaxed text-muted-foreground">{lead}</p>}
  </div>
);

export default SectionHeading;
