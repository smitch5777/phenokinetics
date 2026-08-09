import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

import Container from './Container';
import { Separator } from '@/components/ui/separator';

const links = [
  { to: '/', label: 'Home' },
  { to: '/science', label: 'The Science' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
];

const Footer = () => (
  <footer className="border-t border-white/10 bg-brand-navy text-white/70">
    <Container className="py-14 lg:py-16">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            {/* Light variant: the mark's darkest lobe is the same navy as this
                footer, so the standard mark loses a third of its shape here. */}
            <img src="/logo-mark-light.png" alt="" width="44" height="40" className="h-9 w-auto" />
            <span className="text-lg font-semibold tracking-tight text-white">PhenoKinetics</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Revolutionizing MASH diagnosis through innovative exogenous probe technology.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="rounded transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white uppercase">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-light" aria-hidden="true" />
              <address className="not-italic">
                8035 N Oracle Rd
                <br />
                Tucson, AZ 85704
              </address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand-light" aria-hidden="true" />
              <a href="tel:+13852624032" className="rounded transition-colors hover:text-white">
                (385) 262-4032
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand-light" aria-hidden="true" />
              <a
                href="mailto:info@phenokinetics.com"
                className="rounded transition-colors hover:text-white"
              >
                info@phenokinetics.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="my-10 bg-white/10" />

      <p className="text-sm">&copy; {new Date().getFullYear()} PhenoKinetics, LLC. All rights reserved.</p>
    </Container>
  </footer>
);

export default Footer;
