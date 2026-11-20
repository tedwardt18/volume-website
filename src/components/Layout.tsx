import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Footer } from './Footer'
import { Nav } from './Nav'

export function Layout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
