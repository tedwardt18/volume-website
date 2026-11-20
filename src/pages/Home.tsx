import { Link } from 'react-router-dom'
import { ProgressionScreen, NutritionScreen, WorkoutScreen } from '../components/AppScreens'
import { DownloadButton } from '../components/DownloadButton'
import { PhoneFrame } from '../components/PhoneFrame'
import { Seo } from '../components/Seo'
import { siteConfig } from '../config/site'

const highlights = [
  {
    title: 'Workout tracking',
    body: 'Log sets, reps, and load quickly — built for the gym floor, not a spreadsheet.',
  },
  {
    title: 'Intelligent progression',
    body: 'Progressive overload guidance from your real history, so the next session is clearer.',
  },
  {
    title: 'Nutrition',
    body: 'Track intake alongside training so fueling and performance stay connected.',
  },
  {
    title: 'Performance insights',
    body: 'See how training quality, consistency, and readiness add up — including Performance Score.',
  },
  {
    title: 'Bodyweight',
    body: 'Monitor scale trends with your training block, not as a disconnected number.',
  },
  {
    title: 'History & analytics',
    body: 'Volume, PRs, and session history in one place for better decisions over time.',
  },
] as const

const whyItems = [
  {
    title: 'Purpose-built for progression',
    body: 'VOLUME is more than a logbook. It focuses on the decisions that move training forward.',
  },
  {
    title: 'History that informs the next set',
    body: 'Your previous work sits beside today’s plan — so guessing less becomes the default.',
  },
  {
    title: 'Training and nutrition together',
    body: 'Performance is rarely one signal. VOLUME keeps the pieces you need in one workflow.',
  },
] as const

export function Home() {
  return (
    <>
      <Seo path="/" />

      <section className="home-hero">
        <div className="home-hero__bg" aria-hidden="true" />
        <div className="container home-hero__grid">
          <div className="home-hero__copy fade-up">
            <p className="home-brand">
              <span className="brand-mark" aria-hidden="true">
                <span className="brand-mark__bar" />
                <span className="brand-mark__bar brand-mark__bar--accent" />
                <span className="brand-mark__bar" />
              </span>
              {siteConfig.brand.name}
            </p>
            <h1>{siteConfig.brand.tagline}</h1>
            <p className="home-hero__support">
              Progressive overload, nutrition, and performance decisions — so you can train with
              clarity instead of guesswork.
            </p>
            <div className="home-hero__ctas">
              <DownloadButton showNote />
              <Link className="btn btn-secondary" to="/features">
                Explore Features
              </Link>
            </div>
          </div>

          <div className="home-hero__visual fade-up-delay">
            <PhoneFrame float label="VOLUME workout tracking screen">
              <WorkoutScreen />
            </PhoneFrame>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="features-heading">
        <div className="container">
          <p className="section-kicker">Features</p>
          <h2 id="features-heading" className="section-title">
            Built for real training decisions
          </h2>
          <p className="section-lead">
            Everything here maps to what VOLUME actually does — tracking, progression, nutrition,
            bodyweight, insights, and history.
          </p>
          <div className="feature-grid">
            {highlights.map((item) => (
              <article key={item.title} className="feature-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <p className="section-kicker">Why Volume</p>
          <h2 id="why-heading" className="section-title">
            Progression without the noise
          </h2>
          <p className="section-lead">
            Purpose, progression, and history in one place — so better decisions become routine.
          </p>
          <div className="why-grid">
            {whyItems.map((item) => (
              <article key={item.title} className="why-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="preview-heading">
        <div className="container">
          <p className="section-kicker">App preview</p>
          <h2 id="preview-heading" className="section-title">
            The UI, designed around the work
          </h2>
          <p className="section-lead">
            Mockups of the VOLUME experience. Replace with authentic product screenshots when
            available.
          </p>
          <div className="preview-stage fade-up-delay-2">
            <PhoneFrame label="Intelligent progression screen">
              <ProgressionScreen />
            </PhoneFrame>
            <PhoneFrame label="Nutrition and bodyweight screen">
              <NutritionScreen />
            </PhoneFrame>
            <PhoneFrame label="Workout logging screen">
              <WorkoutScreen />
            </PhoneFrame>
          </div>
        </div>
      </section>

      <section className="cta-band" aria-labelledby="download-heading">
        <div className="container">
          <h2 id="download-heading">Train with clearer next steps</h2>
          <p>
            Download VOLUME and keep progression, nutrition, and performance history in one focused
            workflow.
          </p>
          <DownloadButton variant="lime" showNote />
        </div>
      </section>
    </>
  )
}
