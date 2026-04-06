import { createContext, useContext } from 'react'

const ActivityPhotosContext = createContext(null)

export function ActivityPhotosProvider({ value, children }) {
  return (
    <ActivityPhotosContext.Provider value={value}>
      {children}
    </ActivityPhotosContext.Provider>
  )
}

/** Home page only: unique-ish activity photo assignments; null if not under provider. */
export function useHomeActivityPhotos() {
  return useContext(ActivityPhotosContext)
}
