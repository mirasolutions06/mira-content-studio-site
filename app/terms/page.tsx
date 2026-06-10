import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Terms — Mira Content Studio',
  description: 'Terms of service for Mira Content Studio.',
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main>
        <article className="bg-paper px-space-4 py-space-8">
          <div className="mx-auto max-w-3xl">
            <header className="mb-space-7">
              <div className="text-kicker text-bottle mb-space-2">Terms</div>
              <h1 className="text-h1 text-ink">
                Terms of service<span className="text-bottle">.</span>
              </h1>
              <p className="text-body-sm text-stone-500 mt-space-3">
                Last updated 17 May 2026
              </p>
            </header>

            <div className="space-y-space-4 text-body text-ink/80 leading-relaxed">
              <p>
                These terms govern your use of Mira Content Studio (&ldquo;<strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;, &ldquo;<strong>our</strong>&rdquo;) and our services. By placing an order via miracontent.studio, you agree to them. If you don&rsquo;t agree, please don&rsquo;t order.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">1. What we deliver</h2>
              <p>
                We produce on-brand product photography and short campaign video, delivered as digital image and video files. What you receive depends on which tier you purchase:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-space-2">
                <li><strong>Try it (£99 one-off).</strong> 20 photos and one 10-second video. 2 looks, square and vertical formats. 2-day delivery. 2 revisions.</li>
                <li><strong>Brand Shoot (£349 one-off).</strong> 35 photos and three 10-second videos. 4 looks, all formats. 4-day delivery. Unlimited revisions.</li>
                <li><strong>Studio (£699 per month).</strong> One Brand Shoot per month plus ongoing social cuts. Priority queue. Three-month minimum, then month-to-month.</li>
              </ul>
              <p>
                Delivery times start when we receive your completed brief, not when payment clears.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">2. Pricing &amp; payment</h2>
              <p>
                Prices listed on the website are in pounds sterling. We are not currently VAT-registered, so no VAT applies. If we become VAT-registered in the future, we&rsquo;ll add VAT going forward and notify retainer customers in advance.
              </p>
              <p>
                Payments are processed via Stripe. Try it and Brand Shoot are one-off charges. Studio is a recurring monthly subscription, billed on the same day each month as the day you signed up.
              </p>
              <p>
                <strong>In short:</strong> you pay first, then submit your brief. We start work once both are in.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">3. Briefs &amp; delivery</h2>
              <p>
                After payment, Stripe redirects you to a brief form. Fill it out as completely as you can &mdash; the more reference images and direction notes you provide, the closer the result will be to what you have in mind.
              </p>
              <p>
                Delivery windows (2 working days for Try it, 4 working days for Brand Shoot) start the next working day after we receive your completed brief. Working days mean Monday to Friday excluding UK bank holidays.
              </p>
              <p>
                Delays caused by missing information from your side extend the delivery timeline by the corresponding amount.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">4. Revisions</h2>
              <p>
                A revision round means a substantive change you request after delivery &mdash; different lighting, different framing, swapped product, alternate composition. Minor tweaks (small colour corrections, single-frame fixes) are included throughout and don&rsquo;t count against your revision allowance.
              </p>
              <ul className="list-disc list-outside ml-6 space-y-space-2">
                <li><strong>Try it</strong> includes 2 revision rounds.</li>
                <li><strong>Brand Shoot</strong> includes unlimited revisions.</li>
                <li><strong>Studio</strong> covers ongoing edits as part of the monthly retainer.</li>
              </ul>
              <p>
                Revision requests must be made within 14 days of delivery. After that, we treat the shoot as accepted and complete.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">5. Studio retainer</h2>
              <p>
                The Studio tier is a monthly subscription with a three-month minimum commitment. You can cancel any time after month three by emailing{' '}
                <a href="mailto:hello@miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                  hello@miracontent.studio
                </a>{' '}with one week&rsquo;s notice before your next billing date.
              </p>
              <p>
                If you cancel before completing three months, the remaining months in the minimum commitment are still owed. We don&rsquo;t issue refunds for partial-month cancellations.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">6. Refunds</h2>
              <p>
                We don&rsquo;t issue refunds once delivery has occurred. If you&rsquo;re unhappy with the result, that&rsquo;s what revisions are for.
              </p>
              <p>
                If for any reason we can&rsquo;t deliver (we lose your data, we shut down, we go on indefinite hiatus), we&rsquo;ll refund you in full.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">7. What you can do with the files</h2>
              <p>
                When we deliver your files, you receive a perpetual, worldwide, royalty-free licence to use them for:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-space-2">
                <li>Paid social advertising (Meta, TikTok, X, LinkedIn, etc.)</li>
                <li>Marketplace listings (Amazon, Shopify, your own DTC site)</li>
                <li>Your own website and email marketing</li>
                <li>Press use commensurate with the brand context</li>
              </ul>
              <p>
                <strong>Broadcast and out-of-home</strong> (TV, billboards, transit, large-format print) are not included by default. If you want to use the files for these, get in touch at{' '}
                <a href="mailto:hello@miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                  hello@miracontent.studio
                </a>{' '}and we&rsquo;ll arrange an extended licence.
              </p>
              <p>
                <strong>Reselling or sublicensing the files</strong> as stock or template content is not permitted.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">8. What you can&rsquo;t brief us on</h2>
              <p>
                We won&rsquo;t produce content that:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-space-2">
                <li>Promotes illegal products or services in the UK</li>
                <li>Is sexually explicit, or features minors in inappropriate contexts</li>
                <li>Is intended to defame, harass, or deceive a specific person or business</li>
                <li>Infringes someone else&rsquo;s trademark or copyright (including using a recognisable celebrity&rsquo;s likeness without consent)</li>
                <li>Promotes hate, violence, or discrimination against any protected group</li>
              </ul>
              <p>
                We reserve the right to decline briefs that fall into these categories. Fees for declined briefs are non-refundable to cover the work to assess and respond.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">9. AI disclosure</h2>
              <p>
                Our deliverables are produced using AI image- and video-generation models, directed by us based on your brief.
              </p>
              <p>
                Practically:
              </p>
              <ul className="list-disc list-outside ml-6 space-y-space-2">
                <li>The images and videos you receive are computationally generated, not photographed or filmed on a physical set.</li>
                <li>We do not train AI models on your reference images, brief content, or any materials you submit. References are used only to direct the generation for your specific shoot.</li>
                <li>You are responsible for any disclosure obligations on your end &mdash; for example, labelling AI-generated content where required by platform policy or applicable law.</li>
              </ul>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">10. Your content</h2>
              <p>
                You retain all rights in the references, brand assets, and notes you provide. By submitting them, you grant us a limited, non-exclusive licence to use them solely to produce your shoot.
              </p>
              <p>
                You confirm that you own or have permission to use the references you submit. If a third party claims you didn&rsquo;t have rights to a reference, you&rsquo;re responsible for resolving that &mdash; we&rsquo;re not.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">11. Our intellectual property</h2>
              <p>
                The site, our brand, our wordmark, our methodology, and the internal tooling we use to produce shoots remain ours.
              </p>
              <p>
                We may use samples of finished work in our portfolio, case studies, or marketing materials. Brand names will only be used in our portfolio with your explicit permission. If you&rsquo;d prefer we not use your work in any external materials, tell us in writing before delivery.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">12. Confidentiality</h2>
              <p>
                We treat your brief, unreleased product information, and brand strategy as confidential. We don&rsquo;t share them with anyone outside the production process.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">13. Liability</h2>
              <p>
                To the maximum extent permitted by law, our total liability to you for any claim arising from these terms or our services is capped at the amount you paid us in the twelve (12) months preceding the claim.
              </p>
              <p>
                We&rsquo;re not liable for indirect or consequential losses (lost profits, lost data, missed opportunities) arising from your use of our deliverables.
              </p>
              <p>
                Nothing in these terms excludes liability that can&rsquo;t be excluded under UK law, including for death or personal injury caused by negligence, or for fraud.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">14. Changes to these terms</h2>
              <p>
                We may update these terms from time to time. The current version is always at this URL with the &ldquo;last updated&rdquo; date at the top. If we make material changes that affect your ongoing Studio subscription, we&rsquo;ll notify you by email at least 14 days before they take effect.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">15. Governing law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any dispute will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>

              <h2 className="text-h2 text-ink mt-space-7 mb-space-3">16. Contact</h2>
              <p>
                Questions about these terms go to{' '}
                <a href="mailto:hello@miracontent.studio" className="text-bottle underline underline-offset-[3px]">
                  hello@miracontent.studio
                </a>.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
