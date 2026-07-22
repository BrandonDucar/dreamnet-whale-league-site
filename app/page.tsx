import Image from "next/image";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  GitBranch,
  GraduationCap,
  LockKeyhole,
  Play,
  ShieldCheck,
  UserRoundCheck,
} from "./icons";

const appUrl = "https://dreamnet-whale-league.pages.dev";
const repoUrl = "https://github.com/BrandonDucar/dreamnet-whale-league";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Whale Intelligence League home">
          <span className="brand-mark"><Activity size={18} strokeWidth={2.2} /></span>
          <span>WHALE INTELLIGENCE LEAGUE</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#receipts">Receipts</a>
          <a className="nav-launch" href={appUrl}>Open league <ArrowRight size={15} /></a>
        </nav>
      </header>

      <section id="top" className="hero">
        <Image
          src="/league-preview.png"
          alt="The Whale Intelligence League paper learning interface"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow light">DreamNet learning lab / cohort 01</p>
          <h1>Whale Intelligence League</h1>
          <p className="hero-lede">
            Train your market judgment through paper scenarios with one disclosed teaching agent.
            Every workout records the assumptions, inputs, and hypothetical result.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href={appUrl}><Play size={17} fill="currentColor" /> Join the paper league</a>
            <a className="secondary-link" href={repoUrl}><GitBranch size={17} /> View source</a>
          </div>
          <div className="hero-status" aria-label="Product boundaries">
            <span><ShieldCheck size={16} /> Paper-only</span>
            <span><LockKeyhole size={16} /> No funds connected</span>
            <span><FileCheck2 size={16} /> SHA-256 receipts</span>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="process-section">
        <div className="section-intro">
          <p className="eyebrow">One user. One teaching agent. No theater.</p>
          <h2>Learn the decision, not a fake return.</h2>
          <p>
            The first release teaches a single concept: how exposure changes the same hypothetical
            outcome. There are no invented traders, rankings, live quotes, or partner claims.
          </p>
        </div>
        <div className="process-grid">
          <article>
            <span className="process-number">01</span>
            <UserRoundCheck size={25} />
            <h3>Join as yourself</h3>
            <p>Add a display name and paper team. No wallet, exchange, or payment method is requested.</p>
          </article>
          <article>
            <span className="process-number">02</span>
            <GraduationCap size={25} />
            <h3>Run the workout</h3>
            <p>Choose a paper balance, an exposure level, and one clearly labeled hypothetical outcome.</p>
          </article>
          <article>
            <span className="process-number">03</span>
            <BadgeCheck size={25} />
            <h3>Keep the receipt</h3>
            <p>Review a SHA-256 record of what you tested, including the fact that zero funds moved.</p>
          </article>
        </div>
      </section>

      <section className="product-section">
        <div className="product-copy">
          <p className="eyebrow">The actual product</p>
          <h2>A calm learning surface, ready to use.</h2>
          <p>
            DOW JONES is explicitly identified as a simulation agent. It teaches the lesson,
            exposes the scenario boundaries, and never presents a teaching input as live market data.
          </p>
          <ul className="check-list">
            <li><BadgeCheck size={18} /> Real user joins immediately</li>
            <li><BadgeCheck size={18} /> One disclosed teaching agent</li>
            <li><BadgeCheck size={18} /> User-selected scenario outcomes</li>
            <li><BadgeCheck size={18} /> Local persistence for the first release</li>
          </ul>
          <a className="text-link" href={appUrl}>Start workout 001 <ArrowRight size={16} /></a>
        </div>
        <div className="product-frame">
          <Image
            src="/league-preview.png"
            alt="Desktop view of the Whale Intelligence League"
            width={1440}
            height={1100}
            loading="eager"
            sizes="(max-width: 900px) 100vw, 58vw"
          />
        </div>
      </section>

      <section id="receipts" className="receipt-section">
        <div className="receipt-image-wrap">
          <Image
            src="/receipt-preview.png"
            alt="A completed paper workout and its receipt on mobile"
            width={390}
            height={3700}
            loading="eager"
            sizes="(max-width: 760px) 54vw, 300px"
          />
        </div>
        <div className="receipt-copy">
          <p className="eyebrow light">Evidence after every workout</p>
          <h2>A receipt is a record, not a promise.</h2>
          <p>
            Each receipt binds the member, paper amount, strategy, selected outcome, hypothetical
            result, timestamp, and no-funds-moved boundary into one SHA-256 digest.
          </p>
          <dl>
            <div><dt>It proves</dt><dd>Which inputs and assumptions were used.</dd></div>
            <div><dt>It does not prove</dt><dd>Future returns, market skill, or investment suitability.</dd></div>
            <div><dt>Execution authority</dt><dd>None. The app cannot sign, settle, or place an order.</dd></div>
          </dl>
        </div>
      </section>

      <section className="closing-section">
        <p className="eyebrow">Cohort 01 is open</p>
        <h2>Enter the league. Test your judgment. Keep the proof.</h2>
        <a className="primary-link dark-action" href={appUrl}>Join now <ArrowRight size={17} /></a>
      </section>

      <footer>
        <span>DreamNet / Whale Intelligence League</span>
        <span>Educational paper simulation. Not financial advice.</span>
      </footer>
    </main>
  );
}
