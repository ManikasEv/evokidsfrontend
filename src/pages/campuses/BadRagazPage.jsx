import CampusPage from './CampusPage'
import { CAMPUS_MAP_EMBED } from '../../data/campusMapEmbeds'

export default function BadRagazPage() {
  return <CampusPage campusKey="bad_ragaz" mapSrc={CAMPUS_MAP_EMBED.bad_ragaz} />
}
