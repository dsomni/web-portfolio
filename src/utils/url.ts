// src/utils/url.ts
import { getRelativeLocaleUrl } from "astro:i18n";
import type { Language } from "./i18n";

/**
 * Generates a localized URL without trailing slash
 * Properly handles hash fragments
 */
export function localizedUrl(locale: Language, path: string): string {
    // Split path and hash
    const [pathPart, hashPart] = path.split('#');

    // Get the base URL for the locale
    let url = getRelativeLocaleUrl(locale, pathPart || '/');

    // Remove trailing slash from the path part only (not if it's just the base)
    if (url.endsWith('/') && url.length > 1 && !url.endsWith('//')) {
        url = url.slice(0, -1);
    }

    if (hashPart) {
        url += `#${hashPart}`;
    }

    return url;
}

/**
 * Generates a URL with the correct base path prefix (for non-i18n routes)
 * Properly handles hash fragments
 */
export function url(path: string): string {
    // Split path and hash
    const [pathPart, hashPart] = path.split('#');

    const base = import.meta.env.BASE_URL;

    // Handle root path
    if (!pathPart || pathPart === '/' || pathPart === '') {
        const rootUrl = base.endsWith('/') && base.length > 1 ? base.slice(0, -1) : base;
        return hashPart ? `${rootUrl}#${hashPart}` : rootUrl;
    }

    // Remove leading slash from path
    const cleanPath = pathPart.startsWith('/') ? pathPart.slice(1) : pathPart;

    // Ensure base ends with slash
    const baseWithSlash = base.endsWith('/') ? base : `${base}/`;

    let fullUrl = `${baseWithSlash}${cleanPath}`;

    // Remove trailing slash from path part
    if (fullUrl.endsWith('/') && fullUrl.length > 1) {
        fullUrl = fullUrl.slice(0, -1);
    }

    // Add back the hash if it exists
    if (hashPart) {
        fullUrl += `#${hashPart}`;
    }

    return fullUrl;
}
