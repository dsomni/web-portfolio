import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// Use env variables with fallback to GitHub Pages defaults
const SITE = env.SITE || 'http://localhost:4321';
const BASE = env.BASE || '/';

// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
    site: SITE,
    base: BASE,
    integrations: [
        mdx(),
        sitemap(),
        icon()
    ],
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        locales: ['en', 'ru'],
        defaultLocale: 'en',
        routing: {
            prefixDefaultLocale: false,
            fallbackType: 'redirect',
        },
        fallback: { ru: 'en' },
    },
    output: 'static',
    build: {
        format: 'file',
        inlineStylesheets: 'auto'
    }
});
