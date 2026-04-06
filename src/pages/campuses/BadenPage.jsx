import CampusPage from './CampusPage'
import { CAMPUS_MAP_EMBED } from '../../data/campusMapEmbeds'

export default function BadenPage() {
  return <CampusPage campusKey="baden" mapSrc={CAMPUS_MAP_EMBED.baden} />
}
