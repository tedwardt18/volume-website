/** Carefully designed mockups of VOLUME UI — replace with authentic screenshots when available. */

export function WorkoutScreen() {
  return (
    <div className="app-screen">
      <header className="app-screen__top">
        <span>Today</span>
        <strong>Push A</strong>
        <em>00:42:18</em>
      </header>
      <div className="app-screen__card">
        <div className="app-screen__row">
          <span>Bench Press</span>
          <span className="app-pill">Working</span>
        </div>
        <div className="app-sets">
          <div>
            <span>Set 1</span>
            <strong>80 × 8</strong>
          </div>
          <div>
            <span>Set 2</span>
            <strong>85 × 6</strong>
          </div>
          <div className="is-active">
            <span>Set 3</span>
            <strong>87.5 × ?</strong>
          </div>
        </div>
        <p className="app-hint">Last session: 85 × 6 · Target +2.5kg</p>
      </div>
      <div className="app-screen__card app-screen__card--muted">
        <div className="app-screen__row">
          <span>Incline DB Press</span>
          <span>Up next</span>
        </div>
      </div>
      <div className="app-screen__card app-screen__card--muted">
        <div className="app-screen__row">
          <span>Cable Fly</span>
          <span>Queued</span>
        </div>
      </div>
    </div>
  )
}

export function ProgressionScreen() {
  return (
    <div className="app-screen">
      <header className="app-screen__top">
        <span>Progression</span>
        <strong>Overload plan</strong>
        <em>Week 6</em>
      </header>
      <div className="app-score">
        <span>Suggested next</span>
        <strong>90kg × 5</strong>
        <p>Based on recent completion rate and RPE trend.</p>
      </div>
      <div className="app-bars" aria-hidden="true">
        <span style={{ height: '42%' }} />
        <span style={{ height: '55%' }} />
        <span style={{ height: '48%' }} />
        <span style={{ height: '68%' }} />
        <span style={{ height: '74%' }} />
        <span className="is-accent" style={{ height: '86%' }} />
      </div>
      <ul className="app-list">
        <li>
          <span>Squat</span>
          <strong>+2.5kg</strong>
        </li>
        <li>
          <span>Pull-ups</span>
          <strong>+1 rep</strong>
        </li>
        <li>
          <span>RDL</span>
          <strong>Hold</strong>
        </li>
      </ul>
    </div>
  )
}

export function NutritionScreen() {
  return (
    <div className="app-screen">
      <header className="app-screen__top">
        <span>Nutrition</span>
        <strong>Daily targets</strong>
        <em>Cut</em>
      </header>
      <div className="app-macros">
        <div>
          <strong>1,840</strong>
          <span>kcal</span>
        </div>
        <div>
          <strong>165g</strong>
          <span>protein</span>
        </div>
        <div>
          <strong>180g</strong>
          <span>carbs</span>
        </div>
        <div>
          <strong>55g</strong>
          <span>fat</span>
        </div>
      </div>
      <div className="app-screen__card">
        <div className="app-screen__row">
          <span>Lunch logged</span>
          <span className="app-pill">On track</span>
        </div>
        <p className="app-hint">Chicken bowl · 42g protein remaining</p>
      </div>
      <div className="app-screen__card app-screen__card--muted">
        <div className="app-screen__row">
          <span>Bodyweight</span>
          <strong>81.4 kg</strong>
        </div>
        <p className="app-hint">7-day trend −0.3 kg</p>
      </div>
    </div>
  )
}

export function PerformanceScreen() {
  return (
    <div className="app-screen">
      <header className="app-screen__top">
        <span>Insights</span>
        <strong>Performance Score</strong>
        <em>This week</em>
      </header>
      <div className="app-score app-score--ring">
        <strong>86</strong>
        <span>Strong consistency · volume trending up</span>
      </div>
      <ul className="app-list">
        <li>
          <span>Training</span>
          <strong>92</strong>
        </li>
        <li>
          <span>Nutrition</span>
          <strong>81</strong>
        </li>
        <li>
          <span>Recovery signal</span>
          <strong>78</strong>
        </li>
      </ul>
      <div className="app-screen__card">
        <p className="app-hint">PR alert: Bench Press 87.5 × 6 — new e1RM high.</p>
      </div>
    </div>
  )
}

export function HistoryScreen() {
  return (
    <div className="app-screen">
      <header className="app-screen__top">
        <span>History</span>
        <strong>Analytics</strong>
        <em>90 days</em>
      </header>
      <div className="app-bars app-bars--wide" aria-hidden="true">
        <span style={{ height: '38%' }} />
        <span style={{ height: '52%' }} />
        <span style={{ height: '46%' }} />
        <span style={{ height: '61%' }} />
        <span style={{ height: '58%' }} />
        <span style={{ height: '70%' }} />
        <span style={{ height: '66%' }} />
        <span className="is-accent" style={{ height: '78%' }} />
      </div>
      <div className="app-screen__card">
        <div className="app-screen__row">
          <span>Weekly volume</span>
          <strong>42,800 kg</strong>
        </div>
        <p className="app-hint">+12% vs previous block</p>
      </div>
      <div className="app-screen__card app-screen__card--muted">
        <div className="app-screen__row">
          <span>Sessions</span>
          <strong>38 logged</strong>
        </div>
      </div>
    </div>
  )
}
