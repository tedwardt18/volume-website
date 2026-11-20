/**
 * Central site configuration for VOLUME.
 * Replace PLACEHOLDER_* values before go-live. Do not invent App Store,
 * social, support, or legal details — confirm with the owner.
 */

export const siteConfig = {
  brand: {
    name: 'VOLUME',
    tagline: 'We handle progression.',
    shortDescription:
      'Progressive overload, nutrition, and performance decisions — in one place.',
  },

  /** Confirmed public domain for this site. */
  domain: 'https://www.trainwithvolume.com',

  /**
   * App Store product URL.
   * PLACEHOLDER — confirm the live App Store listing before publishing download CTAs.
   */
  appStoreUrl: 'PLACEHOLDER_APP_STORE_URL',

  /**
   * Primary support contact.
   * PLACEHOLDER — confirm the official support inbox (volume-privacy had no email yet).
   */
  supportEmail: 'PLACEHOLDER_SUPPORT_EMAIL',

  social: {
    /** PLACEHOLDER — confirm before linking in footer/nav. */
    instagram: 'PLACEHOLDER_INSTAGRAM_URL',
    /** PLACEHOLDER — confirm before linking in footer/nav. */
    x: 'PLACEHOLDER_X_URL',
    /** PLACEHOLDER — confirm before linking in footer/nav. */
    tiktok: 'PLACEHOLDER_TIKTOK_URL',
  },

  company: {
    /**
     * Legal entity name for Privacy / Terms.
     * PLACEHOLDER — confirm UK company name before publication.
     */
    legalName: 'PLACEHOLDER_COMPANY_LEGAL_NAME',
    /**
     * Registered office / correspondence address.
     * PLACEHOLDER — confirm before publication.
     */
    address: 'PLACEHOLDER_COMPANY_ADDRESS',
    /**
     * Companies House number (if applicable).
     * PLACEHOLDER — confirm or remove if not a limited company.
     */
    companyNumber: 'PLACEHOLDER_COMPANY_NUMBER',
    /**
     * Governing law jurisdiction for Terms.
     * Draft assumes England and Wales — confirm with legal review.
     */
    jurisdiction: 'England and Wales',
  },

  copyrightYear: 2026,

  seo: {
    defaultTitle: 'VOLUME — We handle progression.',
    titleTemplate: '%s · VOLUME',
    defaultDescription:
      'VOLUME is a premium fitness app for progressive overload, nutrition tracking, bodyweight trends, and performance insights — so you can train with clearer decisions.',
    keywords: [
      'workout tracker',
      'progressive overload app',
      'gym progress tracker',
      'nutrition tracker',
      'performance insights',
      'bodyweight tracker',
      'workout history',
      'VOLUME fitness',
      'train with volume',
    ],
  },
} as const

export type SiteConfig = typeof siteConfig

/** True when a config string is still an obvious placeholder. */
export function isPlaceholder(value: string): boolean {
  return value.startsWith('PLACEHOLDER_')
}

export function mailtoSupport(): string | null {
  if (isPlaceholder(siteConfig.supportEmail)) return null
  return `mailto:${siteConfig.supportEmail}`
}

export function appStoreHref(): string | null {
  if (isPlaceholder(siteConfig.appStoreUrl)) return null
  return siteConfig.appStoreUrl
}
