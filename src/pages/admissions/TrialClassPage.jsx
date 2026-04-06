import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PageLayout from '../../components/PageLayout'
import PageHero from '../../components/PageHero'

const inputCls = "w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:border-sky-400 transition-colors bg-white"

function RadioOption({ name, value, checked, onChange, label }) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mt-0.5 accent-sky-500 flex-shrink-0"
      />
      <span className="text-sm text-gray-700 group-hover:text-gray-900">{label}</span>
    </label>
  )
}

export default function TrialClassPage() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    first: '', last: '', email: '',
    interest: '',
    visited: '',
    age: '',
    day: '',
    message: '',
  })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  if (submitted) {
    return (
      <PageLayout>
        <PageHero title={t('trial.title')} breadcrumb={`${t('nav.admissions')} › ${t('nav.trial')}`} />
        <div className="bg-white py-24 text-center">
          <div className="max-w-md mx-auto px-4">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('trial.success')}</h2>
          </div>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <PageHero title={t('trial.title')} breadcrumb={`${t('nav.admissions')} › ${t('nav.trial')}`} />

      <section className="bg-[#f8f8f8] py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-gray-600 mb-8 text-center italic">{t('trial.intro')}</p>

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="bg-white shadow-sm rounded-lg p-8 space-y-8"
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">
                  {t('trial.first_name')} <span className="text-red-400">*</span>
                </label>
                <input className={inputCls} value={form.first} onChange={set('first')} required />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1">
                  {t('trial.last_name')} <span className="text-red-400">*</span>
                </label>
                <input className={inputCls} value={form.last} onChange={set('last')} required />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-gray-700 block mb-1">
                  {t('trial.email')} <span className="text-red-400">*</span>
                </label>
                <input type="email" className={inputCls} value={form.email} onChange={set('email')} required />
              </div>
            </div>

            {/* Interest */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">{t('trial.interest')}</p>
              <div className="space-y-3">
                <RadioOption name="interest" value="online" checked={form.interest === 'online'} onChange={set('interest')} label={t('trial.option_online')} />
                <RadioOption name="interest" value="onsite" checked={form.interest === 'onsite'} onChange={set('interest')} label={t('trial.option_onsite')} />
                <RadioOption name="interest" value="trial"  checked={form.interest === 'trial'}  onChange={set('interest')} label={t('trial.option_trial')}  />
              </div>
            </div>

            {/* Visited before */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">{t('trial.visited')}</p>
              <div className="flex gap-6">
                <RadioOption name="visited" value="yes" checked={form.visited === 'yes'} onChange={set('visited')} label={t('trial.yes')} />
                <RadioOption name="visited" value="no"  checked={form.visited === 'no'}  onChange={set('visited')} label={t('trial.no')}  />
              </div>
            </div>

            {/* Child age */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">{t('trial.child_age')}</p>
              <div className="flex flex-wrap gap-4">
                {['2_3','3_4','4_5','5plus'].map((v) => (
                  <RadioOption
                    key={v}
                    name="age"
                    value={v}
                    checked={form.age === v}
                    onChange={set('age')}
                    label={t(`trial.age_${v}`)}
                  />
                ))}
              </div>
            </div>

            {/* Preferable day */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-3">{t('trial.preferable_day')}</p>
              <div className="flex flex-wrap gap-4">
                {['tuesday','wednesday','thursday','saturday'].map((d) => (
                  <RadioOption
                    key={d}
                    name="day"
                    value={d}
                    checked={form.day === d}
                    onChange={set('day')}
                    label={t(`trial.${d}`)}
                  />
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-1">{t('trial.message_title')}</p>
              <p className="text-sm text-gray-500 italic mb-3">{t('trial.message_subtitle')}</p>
              <textarea
                rows={4}
                className={`${inputCls} resize-none`}
                placeholder={t('trial.message_placeholder')}
                value={form.message}
                onChange={set('message')}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 text-white font-bold uppercase tracking-widest text-sm transition-colors duration-200"
              style={{ backgroundColor: '#4a90d9' }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#3a7bc8'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4a90d9'}
            >
              {t('trial.submit')}
            </button>
          </form>
        </div>
      </section>
    </PageLayout>
  )
}
