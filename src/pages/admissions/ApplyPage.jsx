import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PageLayout from '../../components/PageLayout'
import PageHero from '../../components/PageHero'

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-gray-700">
        {label}{required && <span className="text-red-400 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls = "px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:border-sky-400 transition-colors bg-white"
const selectCls = `${inputCls} cursor-pointer`

export default function ApplyPage() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    child_first: '', child_last: '', dob: '', nationality: '', nationality2: '',
    mother_tongue: '', other_lang: '', other_lang2: '',
    academic_year: '', campus: '', prev_school: '',
    parent_relation: '', parent_title: '', parent_first: '', parent_last: '', parent_mobile: '', parent_email: '',
    emergency_relation: '', emergency_title: '', emergency_first: '', emergency_last: '', emergency_mobile: '', emergency_email: '',
    doctor_title: '', doctor_name: '', doctor_phone: '', doctor_email: '',
    location: 'Switzerland',
    special_info: '',
    how_heard: '',
  })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <PageLayout>
        <PageHero title={t('apply.title')} breadcrumb={`${t('nav.admissions')} › ${t('nav.apply')}`} />
        <div className="bg-white py-24 text-center">
          <div className="max-w-md mx-auto px-4">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('apply.success')}</h2>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <PageHero title={t('apply.title')} breadcrumb={`${t('nav.admissions')} › ${t('nav.apply')}`} />

      <section className="bg-[#f8f8f8] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-8 text-center">{t('apply.intro')}</p>

          <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-8 space-y-10">

            {/* Student Information */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                {t('apply.student_info')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={t('apply.child_first')} required>
                  <input className={inputCls} value={form.child_first} onChange={set('child_first')} required />
                </Field>
                <Field label={t('apply.child_last')} required>
                  <input className={inputCls} value={form.child_last} onChange={set('child_last')} required />
                </Field>
                <Field label={t('apply.dob')} required>
                  <input type="date" className={inputCls} value={form.dob} onChange={set('dob')} required />
                </Field>
                <Field label={t('apply.nationality')}>
                  <input className={inputCls} value={form.nationality} onChange={set('nationality')} />
                </Field>
                <Field label={t('apply.nationality2')}>
                  <input className={inputCls} value={form.nationality2} onChange={set('nationality2')} />
                </Field>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                {t('apply.languages')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Field label={t('apply.mother_tongue')} required>
                  <input className={inputCls} value={form.mother_tongue} onChange={set('mother_tongue')} required />
                </Field>
                <Field label={t('apply.other_lang')}>
                  <input className={inputCls} value={form.other_lang} onChange={set('other_lang')} />
                </Field>
                <Field label={t('apply.other_lang2')}>
                  <input className={inputCls} value={form.other_lang2} onChange={set('other_lang2')} />
                </Field>
              </div>
            </div>

            {/* School Information */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                {t('apply.school_info')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={t('apply.academic_year')} required>
                  <select className={selectCls} value={form.academic_year} onChange={set('academic_year')} required>
                    <option value="">—</option>
                    <option>2024–2025</option>
                    <option>2025–2026</option>
                    <option>2026–2027</option>
                  </select>
                </Field>
                <Field label={t('apply.campus')} required>
                  <select className={selectCls} value={form.campus} onChange={set('campus')} required>
                    <option value="">—</option>
                    <option>Zurich</option>
                    <option>Baden</option>
                    <option>Bad Ragaz</option>
                    <option>Zug</option>
                  </select>
                </Field>
                <Field label={t('apply.prev_school')}>
                  <input className={inputCls} value={form.prev_school} onChange={set('prev_school')} />
                </Field>
              </div>
            </div>

            {/* Parent/Guardian */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                {t('apply.parent_info')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={t('apply.relation')} required>
                  <input className={inputCls} value={form.parent_relation} onChange={set('parent_relation')} required />
                </Field>
                <Field label={t('apply.title_label')}>
                  <select className={selectCls} value={form.parent_title} onChange={set('parent_title')}>
                    <option value="">—</option>
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Dr</option>
                  </select>
                </Field>
                <Field label={t('apply.first_name')} required>
                  <input className={inputCls} value={form.parent_first} onChange={set('parent_first')} required />
                </Field>
                <Field label={t('apply.last_name')} required>
                  <input className={inputCls} value={form.parent_last} onChange={set('parent_last')} required />
                </Field>
                <Field label={t('apply.mobile')} required>
                  <input type="tel" className={inputCls} value={form.parent_mobile} onChange={set('parent_mobile')} required />
                </Field>
                <Field label={t('apply.email')} required>
                  <input type="email" className={inputCls} value={form.parent_email} onChange={set('parent_email')} required />
                </Field>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                {t('apply.emergency')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={t('apply.relation')}>
                  <input className={inputCls} value={form.emergency_relation} onChange={set('emergency_relation')} />
                </Field>
                <Field label={t('apply.title_label')}>
                  <select className={selectCls} value={form.emergency_title} onChange={set('emergency_title')}>
                    <option value="">—</option>
                    <option>Mr</option>
                    <option>Ms</option>
                    <option>Dr</option>
                  </select>
                </Field>
                <Field label={t('apply.first_name')}>
                  <input className={inputCls} value={form.emergency_first} onChange={set('emergency_first')} />
                </Field>
                <Field label={t('apply.last_name')}>
                  <input className={inputCls} value={form.emergency_last} onChange={set('emergency_last')} />
                </Field>
                <Field label={t('apply.mobile')}>
                  <input type="tel" className={inputCls} value={form.emergency_mobile} onChange={set('emergency_mobile')} />
                </Field>
                <Field label={t('apply.email')}>
                  <input type="email" className={inputCls} value={form.emergency_email} onChange={set('emergency_email')} />
                </Field>
              </div>
            </div>

            {/* Doctor */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                {t('apply.doctor')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label={t('apply.title_label')}>
                  <select className={selectCls} value={form.doctor_title} onChange={set('doctor_title')}>
                    <option value="">—</option>
                    <option>Dr</option>
                    <option>Mr</option>
                    <option>Ms</option>
                  </select>
                </Field>
                <Field label={t('apply.doctor_name')}>
                  <input className={inputCls} value={form.doctor_name} onChange={set('doctor_name')} />
                </Field>
                <Field label={t('apply.doctor_phone')}>
                  <input type="tel" className={inputCls} value={form.doctor_phone} onChange={set('doctor_phone')} />
                </Field>
                <Field label={t('apply.doctor_email')}>
                  <input type="email" className={inputCls} value={form.doctor_email} onChange={set('doctor_email')} />
                </Field>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                Additional Information
              </h3>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value="Switzerland"
                    checked={form.location === 'Switzerland'}
                    onChange={set('location')}
                    className="accent-sky-500"
                  />
                  {t('apply.location_ch')}
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                  <input
                    type="radio"
                    name="location"
                    value="Abroad"
                    checked={form.location === 'Abroad'}
                    onChange={set('location')}
                    className="accent-sky-500"
                  />
                  {t('apply.location_abroad')}
                </label>
              </div>

              <Field label={t('apply.special_info')}>
                <textarea
                  rows={4}
                  className={`${inputCls} resize-none`}
                  value={form.special_info}
                  onChange={set('special_info')}
                />
              </Field>

              <Field label={t('apply.how_heard')}>
                <select className={selectCls} value={form.how_heard} onChange={set('how_heard')}>
                  <option value="">—</option>
                  <option>EvoKids' employee</option>
                  <option>Current Family</option>
                  <option>EvoKids' Alumni</option>
                  <option>Friends</option>
                  <option>Google</option>
                  <option>Facebook / Instagram</option>
                  <option>Advertising</option>
                  <option>Relocation Service</option>
                  <option>Other</option>
                </select>
              </Field>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 text-white font-bold uppercase tracking-widest text-sm transition-colors duration-200"
              style={{ backgroundColor: '#4a90d9' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3a7bc8'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4a90d9'}
            >
              {t('apply.submit')}
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  )
}
