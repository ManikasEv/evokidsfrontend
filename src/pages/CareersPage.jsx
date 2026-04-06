import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'

const ROLES = [
  { key: 'teacher', en: 'Early Years Teacher', de: 'Frühpädagogische Fachkraft', el: 'Εκπαιδευτικός Πρώτης Παιδικής Ηλικίας' },
  { key: 'assistant', en: 'Teaching Assistant', de: 'Lehrassistenz', el: 'Βοηθός Εκπαιδευτικού' },
  { key: 'coordinator', en: 'Campus Coordinator', de: 'Standortkoordinator/in', el: 'Συντονιστής Εγκατάστασης' },
  { key: 'admin', en: 'Administrative Staff', de: 'Verwaltungspersonal', el: 'Διοικητικό Προσωπικό' },
  { key: 'other', en: 'Other / Open Application', de: 'Sonstiges / Initiativbewerbung', el: 'Άλλο / Ανοιχτή Αίτηση' },
]

const CAMPUSES = ['Zurich', 'Baden', 'Bad Ragaz', 'Zug', 'Any / Flexible']

const PERKS = [
  { icon: '🌍', en: 'International environment', de: 'Internationales Umfeld', el: 'Διεθνές περιβάλλον' },
  { icon: '📚', en: 'Ongoing professional training', de: 'Laufende Weiterbildung', el: 'Συνεχής επαγγελματική κατάρτιση' },
  { icon: '🤝', en: 'Supportive team culture', de: 'Unterstützende Teamkultur', el: 'Υποστηρικτική ομαδική κουλτούρα' },
  { icon: '🎨', en: 'Creative & playful curriculum', de: 'Kreatives Lernkonzept', el: 'Δημιουργικό και παιχνιδιάρικο πρόγραμμα' },
  { icon: '🌱', en: 'Room to grow and lead', de: 'Raum für Wachstum & Führung', el: 'Χώρος ανάπτυξης και ηγεσίας' },
  { icon: '🏡', en: 'Warm, family-style atmosphere', de: 'Warme, familienähnliche Atmosphäre', el: 'Ζεστή, οικογενειακή ατμόσφαιρα' },
]

export default function CareersPage() {
  const { t, i18n } = useTranslation()
  const lang = ['de', 'el'].includes(i18n.language) ? i18n.language : 'en'

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    role: '', campus: '', message: '', file: null,
  })
  const [submitted, setSubmitted] = useState(false)
  const [fileLabel, setFileLabel] = useState('')

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleFile(e) {
    const file = e.target.files[0]
    if (file) {
      setForm((f) => ({ ...f, file }))
      setFileLabel(file.name)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageLayout>
      <PageHero
        title={t('nav.careers')}
        breadcrumb={`Home › ${t('nav.careers')}`}
      />

      {/* Why join us */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-3">
            Why Join EvoKids?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-sm leading-relaxed">
            We are always looking for passionate, creative and caring educators to join our growing
            multilingual family. If you love working with young children and believe in learning through
            play, we'd love to hear from you.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {PERKS.map((p) => (
              <div
                key={p.key}
                className="flex flex-col items-center gap-2 p-5 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <span className="text-3xl">{p.icon}</span>
                <p className="text-xs font-semibold text-gray-600 text-center">{p[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV form */}
      <section className="py-14" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-1 uppercase tracking-wide">
            Submit Your CV
          </h2>
          <p className="text-gray-400 text-sm text-center mb-8">
            Fill in the form below and attach your CV. We'll be in touch!
          </p>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
              <span className="text-5xl">🎉</span>
              <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">Application Received!</h3>
              <p className="text-gray-500 text-sm">
                Thank you for your interest in joining EvoKids. We'll review your application and get
                back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-sm p-8 space-y-5"
            >
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Last Name *
                  </label>
                  <input
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+41 ..."
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Role You're Interested In *
                </label>
                <select
                  name="role"
                  required
                  value={form.role}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-sky-400 transition-colors bg-white"
                >
                  <option value="">— Select a role —</option>
                  {ROLES.map((r) => (
                    <option key={r.key} value={r.key}>{r[lang]}</option>
                  ))}
                </select>
              </div>

              {/* Campus preference */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Preferred Campus
                </label>
                <select
                  name="campus"
                  value={form.campus}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:border-sky-400 transition-colors bg-white"
                >
                  <option value="">— No preference —</option>
                  {CAMPUSES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* CV upload */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Upload CV *
                </label>
                <label className="flex items-center gap-3 w-full border-2 border-dashed border-gray-200 rounded-lg px-4 py-4 cursor-pointer hover:border-sky-400 transition-colors">
                  <span className="text-xl">📎</span>
                  <span className="text-sm text-gray-400 flex-1">
                    {fileLabel || 'Click to attach your CV (PDF, DOC, DOCX)'}
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFile}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Cover Note
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about yourself and why you'd like to join EvoKids..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
              </div>

              <p className="text-xs text-gray-400">* Required fields</p>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-white text-sm font-bold uppercase tracking-widest transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#4a90d9' }}
              >
                Send Application
              </button>
            </form>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
