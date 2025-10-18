import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
    // site: 'https://dsomni.github.io',
    // base: "/web-portfolio",
    site: 'http://localhost:4321',
    base: "/",
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
        inlineStylesheets: 'auto'
    }
});
