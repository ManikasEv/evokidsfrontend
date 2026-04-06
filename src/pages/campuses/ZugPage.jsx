import CampusPage from './CampusPage'
import { CAMPUS_MAP_EMBED } from '../../data/campusMapEmbeds'

export default function ZugPage() {
  return <CampusPage campusKey="zug" mapSrc={CAMPUS_MAP_EMBED.zug} comingSoon />
}
