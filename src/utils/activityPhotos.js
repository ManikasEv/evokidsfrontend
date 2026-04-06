/** Stable sort so the same build always assigns the same URLs (no shuffle / no random). */
function sortUrls(urls) {
  return [...urls].filter(Boolean).sort((a, b) => String(a).localeCompare(String(b)))
}

/** Activity-folder photos minus anything also registered as a month/inquiry image. */
export function activityPoolExcludingInquiry(manifest) {
  const inquiryUrls = new Set(Object.values(manifest.inquiry || {}))
  return (manifest.a || []).filter((url) => url && !inquiryUrls.has(url))
}

/** Testimonial accents: prefer `photos/r` only (stable order); repeat if fewer than three files. Use `a` only when `r` is empty. */
function testimonialPhotos(sortedR, sortedA) {
  if (sortedR.length >= 3) return [sortedR[0], sortedR[1], sortedR[2]]
  if (sortedR.length === 2) return [sortedR[0], sortedR[1], sortedR[0]]
  if (sortedR.length === 1) return [sortedR[0], sortedR[0], sortedR[0]]
  const src = sortedA
  if (src.length >= 3) return [src[0], src[1], src[2]]
  if (src.length === 2) return [src[0], src[1], src[0]]
  if (src.length === 1) return [src[0], src[0], src[0]]
  return [null, null, null]
}

/**
 * Home page: testimonial thumbnails only (manifest). Contact uses `homeContactPhoto` in `homeSectionPhotos.js`.
 */
export function createActivityPhotoBundle(manifest) {
  const empty = {
    testimonials: [null, null, null],
  }

  const sortedA = sortUrls(activityPoolExcludingInquiry(manifest))
  const sortedR = sortUrls(manifest.r || [])

  const testimonials = testimonialPhotos(sortedR, sortedA)

  if (!sortedA.length && !sortedR.length) {
    return empty
  }

  return {
    testimonials,
  }
}
