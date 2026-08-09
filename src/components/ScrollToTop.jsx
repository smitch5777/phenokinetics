import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Route changes used to be handled by a `window.scrollTo({behavior:'smooth'})`
// in every page's useEffect, which animated the scroll on arrival — the new
// page visibly slid up under you. Jumping is the expected behaviour for a
// navigation, and doing it in one place keeps it out of the pages.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
