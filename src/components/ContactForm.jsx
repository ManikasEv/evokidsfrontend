import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Send, CheckCircle2 } from 'lucide-react'

const inputClass =
  'w-full px-4 py-2.5 border border-gray-300 text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-sky-400 transition-colors duration-150'

const labelClass = 'block text-sm font-600 text-gray-700 mb-1'

export default function ContactForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    firstName: '', lastName: '', phone: '', childAge: '', message: '', interest: 'trial',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = true
    if (!form.lastName.trim())  e.lastName  = true
    if (!form.phone.trim())     e.phone     = true
    if (!form.childAge.trim())  e.childAge  = true
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: false }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  const err = (k) => errors[k] ? 'border-red-400' : ''

  return (
    <section id="contact" className="bg-[#f8f8f8] py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl md:text-3xl font-400 text-gray-800 text-center mb-2">
          {t('form.title')}
        </h2>
        <p className="text-sm text-gray-500 text-center mb-10">{t('form.subtitle')}</p>

        {submitted ? (
          <div className="text-center py-12">
            <CheckCircle2 size={48} className="text-sky-400 mx-auto mb-4" />
            <h3 className="text-xl font-700 text-gray-800 mb-2">{t('form.success_title')}</h3>
            <p className="text-gray-500 mb-6">{t('form.success_msg')}</p>
            <button
              onClick={() => { setSubmitted(false); setForm({ firstName:'',lastName:'',phone:'',childAge:'',message:'',interest:'trial' }) }}
              className="px-8 py-2.5 bg-sky-400 hover:bg-sky-500 text-white font-700 text-sm uppercase tracking-wide transition-colors"
            >
              {t('form.send_another')}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="bg-white p-8 border border-gray-200">

            {/* Interest type */}
            <div className="mb-5">
              <p className="text-sm font-600 text-gray-700 mb-2">{t('form.type_label')}</p>
              <div className="flex gap-4">
                {['trial', 'register'].map((opt) => (
                  <label
                    key={opt}
                    className={`flex items-center gap-2 px-4 py-2 border cursor-pointer text-sm font-600 transition-colors ${
                      form.interest === opt ? 'border-sky-400 bg-sky-50 text-sky-600' : 'border-gray-300 text-gray-500 hover:border-gray-400'
                    }`}
                  >
                    <input type="radio" name="interest" value={opt} checked={form.interest === opt} onChange={handleChange} className="sr-only" />
                    {opt === 'trial' ? t('form.type_trial') : t('form.type_register')}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>{t('form.first_name')} <span className="text-red-400">*</span></label>
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder={t('form.placeholder_first')} className={`${inputClass} ${err('firstName')}`} />
              </div>
              <div>
                <label className={labelClass}>{t('form.last_name')} <span className="text-red-400">*</span></label>
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder={t('form.placeholder_last')} className={`${inputClass} ${err('lastName')}`} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>{t('form.phone')} <span className="text-red-400">*</span></label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={t('form.placeholder_phone')} className={`${inputClass} ${err('phone')}`} />
              </div>
              <div>
                <label className={labelClass}>{t('form.child_age')} <span className="text-red-400">*</span></label>
                <input type="text" name="childAge" value={form.childAge} onChange={handleChange} placeholder={t('form.placeholder_age')} className={`${inputClass} ${err('childAge')}`} />
              </div>
            </div>

            <div className="mb-5">
              <label className={labelClass}>{t('form.message')}</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder={t('form.placeholder_message')} rows={4} className={`${inputClass} resize-none`} />
            </div>

            <p className="text-xs text-gray-400 mb-5"><span className="text-red-400">*</span> {t('form.required')}</p>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 bg-sky-400 hover:bg-sky-500 text-white font-700 uppercase tracking-wide text-sm transition-colors duration-150"
            >
              <Send size={16} />
              {t('form.submit')}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
