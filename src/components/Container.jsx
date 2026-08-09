import { cn } from '@/lib/utils';

// One horizontal rhythm for the whole site. Every section's content lines up
// against the same gutters instead of each page picking its own padding.
const Container = ({ className, as: Comp = 'div', ...props }) => (
  <Comp className={cn('mx-auto w-full max-w-6xl px-6 lg:px-8', className)} {...props} />
);

export default Container;
