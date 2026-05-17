interface Item {
  q: string;
  a: string;
}

const faqs: Item[] = [
  {
    q: 'What do I actually receive?',
    a: 'Web-ready stills as PNG and JPG, social cuts sized per channel (1:1, 4:5, 9:16), and short MP4 loops when video is included. Delivered as a single Dropbox folder.',
  },
  {
    q: 'How long does it take?',
    a: 'Two working days for a single shoot. Three to five for a campaign. Monthly retainers ship on a fixed weekly cadence.',
  },
  {
    q: 'Can I use this for paid ads?',
    a: 'Yes. Everything is licensed for paid social, marketplace listings, and your own site. Broadcast and out-of-home are case-by-case.',
  },
  {
    q: 'What if I don’t like the result?',
    a: 'Single shoots include one round of revisions. Campaigns include two. Retainers cover ongoing edits as you go.',
  },
  {
    q: 'Do you work from my existing photos?',
    a: 'Yes. Send anything you have — product shots, lifestyle, references, mood — and we build from there.',
  },
  {
    q: 'Can I cancel a retainer?',
    a: 'Three-month minimum, then month-to-month. Cancel any time after that with a week of notice.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-paper px-space-4 py-space-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-space-6 text-center">
          <div className="text-kicker text-bottle mb-space-2">FAQ</div>
          <h2 className="text-h1 text-ink">
            Common questions<span className="text-bottle">.</span> Plain answers<span className="text-bottle">.</span>
          </h2>
        </div>
        <div className="border-y border-border-faint divide-y divide-border-faint">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex items-center justify-between gap-space-4 py-space-3 cursor-pointer list-none text-body-lg text-ink">
                <span>{f.q}</span>
                <span
                  aria-hidden="true"
                  className="text-body-lg text-bottle leading-none transition-transform duration-200 ease-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-space-4 -mt-space-2 text-body text-ink/70 max-w-prose">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
