/**
 * Images copied from /public into src/assets — bundled by Vite.
 * Folders: photos/r, photos/a, photos/k, photos/inquiry (month.jpg), logo/; city hero images: data/cityPhotos.js → assets/cities/
 */

import logoEn from '../assets/logo/en.png'
import logoDe from '../assets/logo/de.png'
import logoEl from '../assets/logo/el.jpg'
import { cityPhotos } from './cityPhotos'

function sortedUrls(globModules) {
  return Object.entries(globModules)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map(([, url]) => url)
    .filter(Boolean)
}

const rGlob = import.meta.glob('../assets/photos/r/*', { eager: true, import: 'default' })
const aGlob = import.meta.glob('../assets/photos/a/*', { eager: true, import: 'default' })
const kGlob = import.meta.glob('../assets/photos/k/*', { eager: true, import: 'default' })
const inquiryGlob = import.meta.glob('../assets/photos/inquiry/*', { eager: true, import: 'default' })
const inquiry = {}
for (const [path, url] of Object.entries(inquiryGlob)) {
  const file = path.split(/[/\\]/).pop() ?? ''
  const key = file.replace(/\.[^.]+$/, '').toLowerCase()
  if (key && url) inquiry[key] = url
}

export const photosR = sortedUrls(rGlob)
export const photosA = sortedUrls(aGlob)
export const photosK = sortedUrls(kGlob)
export const inquiryByMonth = inquiry

export const logos = {
  en: logoEn,
  de: logoDe,
  el: logoEl,
}

export function getBundledManifest() {
  return {
    r: photosR,
    a: photosA,
    k: photosK,
    cities: cityPhotos,
    inquiry: inquiryByMonth,
    logo: {
      en: logos.en,
      de: logos.de,
      el: logos.el,
    },
  }
}
