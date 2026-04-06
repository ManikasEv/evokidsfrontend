import {
  createContext,
  useContext,
  useMemo,
} from 'react'
import { publicUrl } from '../utils/publicUrl'
import { shuffleCopy } from '../utils/shuffle'
import { getBundledManifest } from '../data/siteAssets'

const bundled = getBundledManifest()

const PhotoManifestContext = createContext({
  ready: true,
  manifest: bundled,
  shuffledR: shuffleCopy(bundled.r),
  publicUrl,
})

export function PhotoManifestProvider({ children }) {
  const manifest = useMemo(() => getBundledManifest(), [])
  const shuffledR = useMemo(() => shuffleCopy(manifest.r), [manifest.r])

  const value = useMemo(
    () => ({
      ready: true,
      manifest,
      shuffledR,
      publicUrl,
    }),
    [manifest, shuffledR]
  )

  return (
    <PhotoManifestContext.Provider value={value}>
      {children}
    </PhotoManifestContext.Provider>
  )
}

export function usePhotoManifest() {
  return useContext(PhotoManifestContext)
}

export function useInquiryPhoto(monthEnglishName) {
  const { manifest } = usePhotoManifest()
  const key = monthEnglishName.toLowerCase()
  return manifest.inquiry[key] || null
}

/** Distribute `r` photos: slot index 0 = hero, 1 = about, … */
export function useRandomPhotoSlot(index) {
  const { shuffledR } = usePhotoManifest()
  return useMemo(
    () => (shuffledR.length ? shuffledR[Math.abs(index) % shuffledR.length] : null),
    [shuffledR, index]
  )
}
