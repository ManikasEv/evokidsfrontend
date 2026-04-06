import { useTranslation } from 'react-i18next'
import PageLayout from '../../components/PageLayout'
import PageHero from '../../components/PageHero'

function MemberCard({ name, role, bio, color }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
      {/* Color bar / avatar placeholder */}
      <div
        className="md:w-48 md:flex-shrink-0 h-40 md:h-auto flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <span className="text-6xl text-white/60 select-none">👤</span>
      </div>

      {/* Content */}
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

const COLORS = ['#4a90d9', '#e8604c', '#7ed321', '#9b59b6']

export default function AdvisoryBoardPage() {
  const { t } = useTranslation()

  const members = [
    { name: t('board.ellie_name'), role: t('board.ellie_role'), bio: t('board.ellie_bio') },
    { name: t('board.nick_name'),  role: t('board.nick_role'),  bio: t('board.nick_bio')  },
    { name: t('board.christina_name'), role: t('board.christina_role'), bio: t('board.christina_bio') },
    { name: t('board.hara_name'),  role: t('board.hara_role'),  bio: t('board.hara_bio')  },
  ]

  return (
    <PageLayout>
      <PageHero title={t('nav.board')} breadcrumb={`${t('nav.about')} › ${t('nav.board')}`} />

      <section className="bg-[#f8f8f8] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {members.map((m, i) => (
              <MemberCard key={i} {...m} color={COLORS[i % COLORS.length]} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
