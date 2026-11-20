import { useEffect } from 'react'
import { siteConfig } from '../config/site'

type SeoProps = {
  title?: string
  description?: string
  path?: string
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  useEffect(() => {
    const fullTitle = title
      ? siteConfig.seo.titleTemplate.replace('%s', title)
      : siteConfig.seo.defaultTitle
    const desc = description ?? siteConfig.seo.defaultDescription
    const url = `${siteConfig.domain}${path === '/' ? '' : path}`

    document.title = fullTitle
    setMeta('name', 'description', desc)
    setMeta('name', 'keywords', siteConfig.seo.keywords.join(', '))
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', siteConfig.brand.name)
    setMeta('property', 'og:image', `${siteConfig.domain}/og-image.svg`)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:image', `${siteConfig.domain}/og-image.svg`)

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, path])

  return null
}
