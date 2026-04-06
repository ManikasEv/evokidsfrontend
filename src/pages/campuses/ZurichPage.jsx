import CampusPage from './CampusPage'
import { CAMPUS_MAP_EMBED } from '../../data/campusMapEmbeds'

export default function ZurichPage() {
  return <CampusPage campusKey="zurich" mapSrc={CAMPUS_MAP_EMBED.zurich} />
}
