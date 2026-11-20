import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you requested could not be found." path="/404" />
      <section className="page-hero">
        <div className="container">
          <p className="section-kicker">404</p>
          <h1>Page not found</h1>
          <p>That route doesn’t exist. Head back home or explore features.</p>
          <div className="home-hero__ctas">
            <Link className="btn btn-primary" to="/">
              <span className="btn-dot" aria-hidden="true" />
              Home
            </Link>
            <Link className="btn btn-secondary" to="/features">
              Features
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
