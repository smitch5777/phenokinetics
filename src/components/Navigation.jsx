import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

import Container from './Container';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/science', label: 'The Science' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
];

const Wordmark = () => (
  <span className="text-lg font-semibold tracking-tight sm:text-xl">
    {/* brand-blue is only 4.32:1 on white — under AA for text this size.
        primary keeps the two-tone split at 6.98:1. */}
    <span className="text-brand-navy">Pheno</span>
    <span className="text-primary">Kinetics</span>
  </span>
);

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/65">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4 lg:h-18">
          <Link to="/" className="flex items-center gap-2.5 rounded-md">
            <img
              src="/logo-mark.png"
              alt=""
              width="44"
              height="40"
              className="h-9 w-auto sm:h-10"
            />
            <Wordmark />
          </Link>

          {/* Desktop */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    cn(
                      'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                      // The old nav gave no indication of the current page.
                      isActive
                        ? 'text-primary after:absolute after:inset-x-3 after:-bottom-px after:h-0.5 after:rounded-full after:bg-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    )
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="ml-2">
              <Button asChild className="h-9 px-4">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </li>
          </ul>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon-lg" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-6">
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <div className="mt-6 flex flex-col gap-1">
                {links.map(({ to, label, end }) => (
                  <SheetClose asChild key={to}>
                    <NavLink
                      to={to}
                      end={end}
                      className={({ isActive }) =>
                        cn(
                          'rounded-lg px-3 py-2.5 text-base font-medium transition-colors',
                          isActive
                            ? 'bg-accent text-accent-foreground'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        )
                      }
                    >
                      {label}
                    </NavLink>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-4 h-10">
                    <Link to="/contact">Get in touch</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </header>
  );
};

export default Navigation;
