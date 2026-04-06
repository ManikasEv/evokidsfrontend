import { useTranslation } from 'react-i18next'
import PageLayout from '../../components/PageLayout'
import PageHero from '../../components/PageHero'

function TeamCard({ name, role, bio, color }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
      <div
        className="md:w-48 md:flex-shrink-0 h-40 md:h-auto flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <span className="text-6xl text-white/60 select-none">👩‍🏫</span>
      </div>

      <div className="p-6 flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p
          className="text-sm font-semibold uppercase tracking-wide mb-4"
          style={{ color: '#4a90d9' }}
        >
          {role}
        </p>
        <p className="text-gray-600 leading-relaxed text-sm">{bio}</p>
      </div>
    </div>
  )
}

export default function OurTeamPage() {
  const { t } = useTranslation()

  const members = [
    { name: t('team.kiki_name'),  role: t('team.kiki_role'),  bio: t('team.kiki_bio'),  color: '#f5a623' },
    { name: t('team.eleni_name'), role: t('team.eleni_role'), bio: t('team.eleni_bio'), color: '#7ed321' },
  ]

  return (
    <PageLayout>
      <PageHero title={t('nav.team')} breadcrumb={`${t('nav.about')} › ${t('nav.team')}`} />

      <section className="bg-[#f8f8f8] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {members.map((m, i) => (
              <TeamCard key={i} {...m} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
