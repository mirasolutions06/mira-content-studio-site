interface Item {
  q: string;
  a: string;
}

const faqs: Item[] = [
  {
    q: 'What do I actually receive?',
    a: 'Web-ready stills as PNG and JPG. Social cuts sized for every channel: 1:1 for Instagram grid, 4:5 for feed, 9:16 for Reels and TikTok. Short MP4 loops if your tier includes video. Everything arrives in one Dropbox folder, named and tagged, ready to drop straight into Shopify, Klaviyo, or wherever you publish from.',
  },
  {
    q: 'How long does it take?',
    a: 'Two working days for a single shoot. Three to five for a full campaign. Retainers ship on a fixed weekly cadence: same day every week. We send a draft of the brief within one working day of booking. Nothing is shot until you have signed it off.',
  },
  {
    q: 'Can I use this for paid ads?',
    a: 'Yes. Every shoot is licensed for paid social, marketplace listings, your site, and your email. You own the output and can use it on any channel you control. Broadcast, billboards, and print campaigns are case-by-case. Tell us before you book if those are in play and we will price the licence in.',
  },
  {
    q: 'What if I don’t like the result?',
    a: 'Every shoot is reviewed before it ships. If a frame is not working, flag it. Wrong angle, off colour, product reading badly. We re-shoot at our cost. Single shoots include one revision round, campaigns include two, retainers cover edits as you go. We do not ship work that does not sit next to the brands you study.',
  },
  {
    q: 'Do you work from my existing photos?',
    a: 'Yes. Send anything that signals the brand: product shots, lifestyle, references, mood images. We use them to lock direction before we shoot: colour, light, composition, tone. They are not pasted into the output; they steer it. If you have brand guidelines or a fonts kit, send those too.',
  },
  {
    q: 'Can I cancel a retainer?',
    a: 'Three-month minimum, then month-to-month. After the minimum, cancel any time with one week of notice. We deliver what is already in the queue and stop billing from the next cycle. No exit fees, no clawback. If you pause mid-month, we hold the work and pick up when you are ready.',
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
