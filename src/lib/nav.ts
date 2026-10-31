// Site navigation, shared by the header (desktop dropdowns + mobile menu) and the footer.
// Links end with "/" so they hit GitHub Pages' final URL directly instead of a redirect.

export interface NavItem {
  href: string;
  label: string;
  description: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    label: 'About',
    items: [
      { href: '/about/', label: 'My Story', description: 'Background, career and certifications' },
      { href: '/about/#journey', label: 'My Journey', description: 'From Sareya Village to Dubai' },
      { href: '/now/', label: 'Now', description: "What I'm focused on at the moment" },
    ],
  },
  {
    label: 'Projects',
    items: [
      { href: '/projects/', label: 'Case Studies', description: 'Automation and transformation projects I led' },
      { href: '/toastmasters/', label: 'Toastmasters', description: 'Dynamic Leadership path, speeches and awards' },
    ],
  },
  {
    label: 'Blog',
    items: [
      { href: '/blog/', label: 'Articles', description: 'Automation, AI, leadership and growth' },
      { href: '/videos/', label: 'Videos', description: 'Speeches and talks from my YouTube channel' },
    ],
  },
  {
    label: 'Resources',
    items: [{ href: '/resources/', label: 'Resources', description: 'Free PM templates and toolkits' }],
  },
];

/** True when `href` is the current page (or a section of it, e.g. a case study under /projects/). */
export function isActive(path: string, href: string): boolean {
  if (href.includes('#')) return false;
  const clean = (p: string) => (p.endsWith('/') ? p : `${p}/`);
  return clean(path).startsWith(clean(href));
}
