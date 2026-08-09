import { Link } from 'react-router-dom';

import Container from '../components/Container';
import { Button } from '@/components/ui/button';

// Reachable two ways: a client-side navigation to an unknown path, and a cold
// hit to one, which GitHub Pages answers with build/404.html.
const NotFound = () => (
  <>
    <title>Page Not Found | PhenoKinetics</title>
    <meta name="robots" content="noindex" />
    <Container className="py-28 text-center lg:py-36">
      <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">Error 404</p>
      <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">Page Not Found</h1>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
        We couldn't find that page. It may have moved, or the link may be out of date.
      </p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <Button asChild className="h-11 px-6 text-base">
          <Link to="/">Back to homepage</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 px-6 text-base">
          <Link to="/science">The science behind EZ-MASH</Link>
        </Button>
        <Button asChild variant="ghost" className="h-11 px-6 text-base">
          <Link to="/contact">Get in touch</Link>
        </Button>
      </div>
    </Container>
  </>
);

export default NotFound;
