import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle2 } from 'lucide-react'
import { useGsapEntrance } from '../hooks/useGsapEntrance'

const inputClass =
  'w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-500 text-sm placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all duration-200'

const labelClass = 'block text-sm font-700 text-gray-700 mb-1.5'

export default function ContactForm() {
  const { t } = useTranslation()
  const headingRef = useGsapEntrance()
  const formRef = useGsapEntrance({ delay: 0.1 })

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    childAge: '',
    message: '',
    interest: 'trial',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.firstName.trim()) newErrors.firstName = true
    if (!form.lastName.trim()) newErrors.lastName = true
    if (!form.phone.trim()) newErrors.phone = true
    if (!form.childAge.trim()) newErrors.childAge = true
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  const fieldError = (key) =>
    errors[key] ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : ''

  return (
    <section id="contact" className="bg-[#FFFBF5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-600 text-sm font-800 px-4 py-1.5 rounded-full mb-4">
            ✉️ {t('form.title')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 text-gray-800 leading-tight mb-3">
            {t('form.title')}
          </h2>
          <p className="text-base text-gray-500 font-500 max-w-xl mx-auto">
            {t('form.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            /* Success state */
            <div className="bg-white rounded-3xl p-10 text-center shadow-sm border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-900 text-gray-800 mb-3">
                {t('form.success_title')}
              </h3>
              <p className="text-gray-500 font-500 mb-7">
                {t('form.success_msg')}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setForm({ firstName: '', lastName: '', phone: '', childAge: '', message: '', interest: 'trial' })
                }}
                className="px-7 py-3 bg-orange-400 hover:bg-orange-500 text-white font-700 rounded-xl transition-colors duration-200"
              >
                {t('form.send_another')}
              </button>
            </div>
          ) : (
            /* Form */
            <div ref={formRef} className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100">
              <form onSubmit={handleSubmit} noValidate>
                {/* Interest type */}
                <div className="mb-6">
                  <p className="text-sm font-700 text-gray-700 mb-3">{t('form.type_label')}</p>
                  <div className="flex gap-3">
                    {['trial', 'register'].map((opt) => (
                      <label
                        key={opt}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                          form.interest === opt
                            ? 'border-orange-400 bg-orange-50 text-orange-600'
                            : 'border-gray-200 bg-gray-50 text-gray-500 hover:border-orange-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name="interest"
                          value={opt}
                          checked={form.interest === opt}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className="text-base">{opt === 'trial' ? '🎓' : '📝'}</span>
                        <span className="text-sm font-700">
                          {opt === 'trial' ? t('form.type_trial') : t('form.type_register')}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelClass}>
                      {t('form.first_name')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder={t('form.placeholder_first')}
                      className={`${inputClass} ${fieldError('firstName')}`}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      {t('form.last_name')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder={t('form.placeholder_last')}
                      className={`${inputClass} ${fieldError('lastName')}`}
                    />
                  </div>
                </div>

                {/* Phone + Age row */}
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={labelClass}>
                      {t('form.phone')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t('form.placeholder_phone')}
                      className={`${inputClass} ${fieldError('phone')}`}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      {t('form.child_age')} <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="childAge"
                      value={form.childAge}
                      onChange={handleChange}
                      placeholder={t('form.placeholder_age')}
                      className={`${inputClass} ${fieldError('childAge')}`}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className={labelClass}>{t('form.message')}</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t('form.placeholder_message')}
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Required note */}
                <p className="text-xs text-gray-400 font-500 mb-5">
                  <span className="text-red-400">*</span> {t('form.required')}
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-4 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-base"
                >
                  <Send size={18} />
                  {t('form.submit')}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
