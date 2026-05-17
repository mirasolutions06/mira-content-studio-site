import { AnimatedWordmark } from './AnimatedWordmark';

interface NavLink {
  href: string;
  label: string;
}

const studioLinks: NavLink[] = [
  { href: '/#how-it-works', label: 'Process' },
  { href: '/#work', label: 'Work' },
  { href: '/#pricing', label: 'Pricing' },
];

const helpLinks: NavLink[] = [
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: 'mailto:hello@miracontent.studio', label: 'Email us' },
];

const social: { label: string; href: string; Icon: () => React.JSX.Element }[] = [];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-200 text-ink">
      <div className="mx-auto max-w-6xl px-space-4 py-space-7">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-5 sm:gap-space-7">
          <div className="col-span-2 sm:col-span-1">
            <AnimatedWordmark subline style={{ fontSize: '2rem' }} />
            <p className="mt-space-3 text-body-sm text-stone-500 max-w-[18ch]">
              Brand content. Without the agency.
            </p>
          </div>

          <FooterColumn title="Studio" links={studioLinks} />
          <FooterColumn title="Help" links={helpLinks} />

          <div>
            <div className="text-kicker text-bottle mb-space-3">
              {social.length > 0 ? 'Social' : 'Contact'}
            </div>
            {social.length > 0 && (
              <div className="flex items-center gap-space-3 text-stone-500 mb-space-3">
                {social.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:text-bottle transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            )}
            <a
              href="mailto:hello@miracontent.studio"
              className="inline-block text-body-sm text-ink no-underline hover:text-bottle transition-colors"
            >
              hello@miracontent.studio
            </a>
          </div>
        </div>

        <div className="mt-space-6 pt-space-4 border-t border-border-faint flex flex-wrap items-center justify-between gap-space-3 text-body-sm text-stone-500">
          <span>© {year} Mira Content Studio</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div>
      <div className="text-kicker text-bottle mb-space-3">{title}</div>
      <ul className="space-y-space-2 text-body-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-ink no-underline hover:text-bottle transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="8" y1="11" x2="8" y2="17" />
      <circle cx="8" cy="7.75" r="0.6" fill="currentColor" stroke="none" />
      <path d="M11.5 17v-5.5M11.5 14a2.5 2.5 0 0 1 5 0V17" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 4c.4 2.4 2 4 4.5 4.4" />
    </svg>
  );
}
