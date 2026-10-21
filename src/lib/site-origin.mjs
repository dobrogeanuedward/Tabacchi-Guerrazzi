import {normalizeSiteUrl} from './launch-readiness.mjs';

// The owner-confirmed public domain also identifies preview content. It does
// not open crawling or indexing; those remain controlled by launch readiness.
export const canonicalSiteOrigin = 'https://guerrazzidiangela.it/';

/** @param {unknown} [configuredUrl] */
export function getSiteOrigin(configuredUrl) {
 return normalizeSiteUrl(configuredUrl) || canonicalSiteOrigin;
}
