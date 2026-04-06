import { useState, useRef, useEffect, useCallback } from 'react'
import { Music2, Pause, Play, Volume1, Volume2, VolumeX, X } from 'lucide-react'

// ─── Kevin MacLeod — "Sneaky Snitch" ─────────────────────────────────────────
// Bouncy, silly 90s-cartoon vibe. Free under Creative Commons Attribution 4.0.
// Credit: Kevin MacLeod (incompetech.com) — CC BY 4.0
const TRACK_URL =
  'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Sneaky%20Snitch.mp3'

const DEFAULT_VOLUME = 0.25   // 25 % starting volume
const MAX_VOLUME     = 1.00   // full slider range so 25 % shows at the 25 % mark

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume]   = useState(DEFAULT_VOLUME)
  const [open, setOpen]       = useState(false)
  const [error, setError]     = useState(false)

  const audioRef     = useRef(null)
  const autoStarted  = useRef(false)
  const fadeTimer    = useRef(null)

  // ── Smooth fade-in helper ─────────────────────────────────────────────────
  const fadeIn = useCallback((targetVol) => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0
    clearInterval(fadeTimer.current)
    const steps = 40
    const step  = targetVol / steps
    let   count = 0
    fadeTimer.current = setInterval(() => {
      count++
      audio.volume = Math.min(parseFloat((count * step).toFixed(3)), targetVol)
      if (count >= steps) clearInterval(fadeTimer.current)
    }, 2000 / steps)           // spreads over 2 seconds
  }, [])

  // ── Start playback ────────────────────────────────────────────────────────
  const startPlay = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || playing) return
    try {
      await audio.play()
      setPlaying(true)
      fadeIn(volume)
    } catch {
      setError(true)
    }
  }, [playing, volume, fadeIn])

  // ── Pause ─────────────────────────────────────────────────────────────────
  const pause = useCallback(() => {
    clearInterval(fadeTimer.current)
    audioRef.current?.pause()
    setPlaying(false)
  }, [])

  // ── Autoplay on first user interaction ────────────────────────────────────
  // Browsers block audio until a user gesture; we catch the very first one.
  useEffect(() => {
    const trigger = () => {
      if (autoStarted.current) return
      autoStarted.current = true
      events.forEach(e => window.removeEventListener(e, trigger))
      // Silently open player and start music
      setOpen(true)
      startPlay()
    }

    const events = ['click', 'scroll', 'keydown', 'touchstart']
    events.forEach(e => window.addEventListener(e, trigger, { passive: true }))
    return () => events.forEach(e => window.removeEventListener(e, trigger))
  }, [startPlay])

  // ── Keep audio volume in sync with slider ─────────────────────────────────
  useEffect(() => {
    const audio = audioRef.current
    if (audio && !audio.paused) audio.volume = volume
  }, [volume])

  // ── Cleanup on unmount ────────────────────────────────────────────────────
  useEffect(() => () => clearInterval(fadeTimer.current), [])

  const togglePlay       = () => (playing ? pause() : startPlay())
  const handleMainButton = () => {
    if (!open) { setOpen(true); startPlay() }
    else togglePlay()
  }

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.25 ? Volume1 : Volume2

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {/* Hidden audio */}
      <audio
        ref={audioRef}
        src={TRACK_URL}
        loop
        preload="auto"
        onError={() => setError(true)}
      />

      {/* ── Expanded card ── */}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl border border-orange-100 p-4 w-64">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-lg ${playing ? 'bg-gradient-to-br from-orange-400 to-pink-400' : 'bg-gray-100'}`}>
                🎵
              </div>
              <div>
                <p className="text-xs font-900 text-gray-800 leading-tight">Cartoon Music</p>
                <p className="text-xs text-gray-400 font-500 leading-tight">Kevin MacLeod</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-6 h-6 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 flex items-center justify-center transition-colors"
              aria-label="Minimise player"
            >
              <X size={13} />
            </button>
          </div>

          {/* Equaliser bars */}
          {playing && (
            <div className="flex items-center gap-1.5 mb-3">
              {[1, 2, 3, 4].map(i => (
                <span
                  key={i}
                  className="inline-block w-1 rounded-full bg-orange-400"
                  style={{
                    height: `${8 + i * 4}px`,
                    animationName: 'bounce',
                    animationDuration: `${0.6 + i * 0.1}s`,
                    animationIterationCount: 'infinite',
                    animationDirection: 'alternate',
                  }}
                />
              ))}
              <span className="text-xs text-orange-500 font-700 ml-1">Now playing…</span>
            </div>
          )}

          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            className="w-full flex items-center justify-center gap-2 py-2.5 mb-4 rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 hover:from-orange-500 hover:to-pink-500 text-white font-700 text-sm transition-all duration-200"
          >
            {playing ? <><Pause size={16} /> Pause</> : <><Play size={16} /> Play</>}
          </button>

          {/* Volume */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setVolume(v => v === 0 ? DEFAULT_VOLUME : 0)}
              className="text-gray-400 hover:text-orange-400 transition-colors shrink-0"
              aria-label="Mute / unmute"
            >
              <VolumeIcon size={16} />
            </button>
            <input
              type="range"
              min={0}
              max={MAX_VOLUME}
              step={0.01}
              value={volume}
              onChange={e => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-1.5 rounded-full cursor-pointer accent-orange-400"
              aria-label="Volume"
            />
            <Volume2 size={16} className="text-gray-300 shrink-0" />
          </div>

          {error && (
            <p className="text-xs text-red-400 font-500 mt-3 leading-snug">
              ⚠ Couldn't load audio. Check your connection.
            </p>
          )}
        </div>
      )}

      {/* ── Floating button ── */}
      <button
        onClick={handleMainButton}
        aria-label={playing ? 'Pause music' : 'Play music'}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer border-2 border-white/70
          ${playing
            ? 'bg-gradient-to-br from-pink-500 to-orange-500 scale-110'
            : 'bg-gradient-to-br from-orange-400 to-pink-400 hover:scale-110'
          }`}
      >
        {open
          ? (playing ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />)
          : <Music2 size={22} className="text-white" />
        }
      </button>
    </div>
  )
}
