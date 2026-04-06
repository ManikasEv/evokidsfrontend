import { shuffleCopy } from './shuffle'

/** Activity-folder photos minus anything also registered as a month/inquiry image. */
export function activityPoolExcludingInquiry(manifest) {
  const inquiryUrls = new Set(Object.values(manifest.inquiry || {}))
  return (manifest.a || []).filter((url) => url && !inquiryUrls.has(url))
}

/**
 * Contact form side image: use `manifest.r` (real photography), not the activity
 * pool — `photos/a` can include illustration-style art that belongs in inquiry/UI, not contact.
 */
function contactSidePhoto(manifest) {
  const r = manifest.r || []
  if (!r.length) return null
  const i = Math.min(2, r.length - 1)
  return r[i] ?? r[0]
}

/**
 * Activity (`a`) photos for the home page — excludes `manifest.inquiry` URLs so
 * month/inquiry images only appear in Units of Inquiry.
 */
export function createActivityPhotoBundle(manifest) {
  const empty = {
    about: null,
    philosophy: null,
    testimonials: [null, null, null],
    contact: null,
  }
  const pool = activityPoolExcludingInquiry(manifest)
  const contact = contactSidePhoto(manifest)
  if (!pool.length) {
    return { ...empty, contact }
  }

  let queue = []
  const refill = () => {
    queue = shuffleCopy(pool)
  }
  const take = () => {
    if (queue.length === 0) refill()
    return queue.shift() ?? null
  }
  refill()

  return {
    about: take(),
    philosophy: take(),
    testimonials: [take(), take(), take()],
    contact,
  }
}
