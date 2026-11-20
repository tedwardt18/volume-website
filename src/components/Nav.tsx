import { useEffect, useId, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { DownloadButton } from './DownloadButton'
import { Logo } from './Logo'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/features', label: 'Features' },
  { to: '/support', label: 'Support' },
] as const

export function Nav() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    document.body.classList.toggle('nav-open', open)
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('nav-open')
    }
  }, [open])

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <Logo />

          <nav className="site-nav" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={'end' in link ? link.end : false}
                className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-header__actions">
            <DownloadButton className="site-header__download" variant="primary" label="Download" />
            <button
              type="button"
              className={`menu-toggle${open ? ' is-open' : ''}`}
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        id={menuId}
        className={`mobile-menu${open ? ' is-open' : ''}`}
        hidden={!open}
        aria-hidden={!open}
      >
        <nav className="mobile-menu__nav" aria-label="Mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={'end' in link ? link.end : false}
              className={({ isActive }) => `mobile-menu__link${isActive ? ' is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          <DownloadButton showNote />
        </nav>
      </div>
    </>
  )
}
