import {
  HistoryScreen,
  NutritionScreen,
  PerformanceScreen,
  ProgressionScreen,
  WorkoutScreen,
} from '../components/AppScreens'
import { DownloadButton } from '../components/DownloadButton'
import { PhoneFrame } from '../components/PhoneFrame'
import { Seo } from '../components/Seo'

const details = [
  {
    title: 'Workout tracking',
    body: 'Log sets, reps, and load with a gym-first flow. Stay focused mid-session without fighting the UI.',
    points: ['Fast set entry', 'Session structure that stays readable', 'Rest and working sets in context'],
    Screen: WorkoutScreen,
    label: 'Workout tracking mockup',
  },
  {
    title: 'Exercise library',
    body: 'Build sessions from a practical exercise library and keep your own movements organised over time.',
    points: ['Find exercises quickly', 'Reuse what you train most', 'Keep history attached to each lift'],
    Screen: HistoryScreen,
    label: 'Exercise history mockup',
  },
  {
    title: 'PRs & progression',
    body: 'Personal records and progressive overload guidance based on what you actually completed — not generic templates.',
    points: ['PR detection from logged work', 'Suggested next targets', 'Hold / push / adjust signals'],
    Screen: ProgressionScreen,
    label: 'Progression mockup',
  },
  {
    title: 'Nutrition',
    body: 'Track nutrition alongside training so calorie and macro context informs performance decisions.',
    points: ['Daily targets', 'Meal logging workflow', 'Tied to your training goals'],
    Screen: NutritionScreen,
    label: 'Nutrition mockup',
  },
  {
    title: 'Bodyweight',
    body: 'Weigh-ins and trends sit with your training block, helping separate noise from meaningful change.',
    points: ['Bodyweight logging', 'Trend context', 'Useful next to nutrition and volume'],
    Screen: NutritionScreen,
    label: 'Bodyweight trend mockup',
  },
  {
    title: 'Performance Score & analytics',
    body: 'Performance Score and analytics summarise consistency, training quality, and related signals so progress is easier to read.',
    points: ['Performance Score overview', 'Breakdowns across key signals', 'Actionable weekly context'],
    Screen: PerformanceScreen,
    label: 'Performance Score mockup',
  },
  {
    title: 'Workout history',
    body: 'Full session history and volume analytics so you can review blocks, compare phases, and plan the next one.',
    points: ['Session archive', 'Volume trends', 'Longer-term analytics'],
    Screen: HistoryScreen,
    label: 'Workout history mockup',
  },
  {
    title: 'Social',
    body: 'Share progress and stay connected with training partners where social features are available in-app.',
    points: ['Share highlights', 'Follow training activity', 'Keep accountability lightweight'],
    Screen: PerformanceScreen,
    label: 'Social / insights mockup',
  },
] as const

export function Features() {
  return (
    <>
      <Seo
        title="Features"
        description="Explore VOLUME features: workout tracking, progressive overload, nutrition, bodyweight, Performance Score, history, and social."
        path="/features"
      />

      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">Features</p>
          <h1>Everything that drives progression</h1>
          <p>
            A closer look at VOLUME’s real capabilities — tracking, overload, nutrition, bodyweight,
            analytics, history, and social. No invented claims.
          </p>
        </div>
      </section>

      <section className="section features-page">
        <div className="container">
          <div className="feature-detail">
            {details.map(({ title, body, points, Screen, label }) => (
              <article key={title} className="feature-detail__block">
                <div className="feature-detail__copy">
                  <h2>{title}</h2>
                  <p>{body}</p>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="feature-detail__visual">
                  <PhoneFrame label={label}>
                    <Screen />
                  </PhoneFrame>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Ready when you are</h2>
          <p>Download VOLUME and keep progression decisions close to the work.</p>
          <DownloadButton variant="lime" showNote />
        </div>
      </section>
    </>
  )
}
