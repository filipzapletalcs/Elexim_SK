import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

export const pathnames = {
  '/': '/',
  '/sluzby': {
    sk: '/sluzby',
    cs: '/sluzby',
    en: '/services',
  },
  '/produkty': {
    sk: '/produkty',
    cs: '/produkty',
    en: '/products',
  },
  '/kontakt': {
    sk: '/kontakt',
    cs: '/kontakt',
    en: '/contact',
  },
} as const;

export type Pathname = keyof typeof pathnames;

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  pathnames,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
