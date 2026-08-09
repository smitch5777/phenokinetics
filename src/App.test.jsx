import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const renderAt = (path) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

// The h1 is the descriptive phrase, not the company name — the company name is
// already carried by the wordmark and the <title>, and a page's h1 should say
// what the page is about.
test('renders the homepage at /', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1, name: /revolutionary mash non-invasive test/i }))
    .toBeInTheDocument();
});

test('renders the science page at its own path, not behind a hash', () => {
  renderAt('/science');
  expect(screen.getByRole('heading', { level: 1, name: /the science behind ez-mash/i }))
    .toBeInTheDocument();
});

test('falls back to NotFound for an unknown path', () => {
  renderAt('/nope');
  expect(screen.getByRole('heading', { level: 1, name: /page not found/i })).toBeInTheDocument();
});

// The build-time shells only cover cold loads. This covers the other half:
// PageMeta owning <head> once React is running, with no leftover static tag
// from scripts/build-shells.js sitting in front of it.
test('title and description follow client-side navigation', async () => {
  renderAt('/');
  expect(document.title).toMatch(/Revolutionary MASH/);

  const nav = screen.getAllByRole('navigation')[0];
  userEvent.click(within(nav).getByRole('link', { name: /the science/i }));

  await waitFor(() => expect(document.title).toMatch(/EZ-MASH Technology/));
  expect(document.querySelectorAll('head title')).toHaveLength(1);
  expect(document.querySelector('head meta[name="description"]').content).toMatch(
    /exogenous probe/
  );
});
