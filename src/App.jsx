import { Routes, Route } from 'react-router-dom'
import MusicPlayer from './components/MusicPlayer'

import HomePage from './pages/HomePage'
import OurMissionPage from './pages/about/OurMissionPage'
import AdvisoryBoardPage from './pages/about/AdvisoryBoardPage'
import OurTeamPage from './pages/about/OurTeamPage'
import KidsInActionPage from './pages/about/KidsInActionPage'
import ApplyPage from './pages/admissions/ApplyPage'
import TrialClassPage from './pages/admissions/TrialClassPage'
import ZurichPage from './pages/campuses/ZurichPage'
import BadenPage from './pages/campuses/BadenPage'
import BadRagazPage from './pages/campuses/BadRagazPage'
import ZugPage from './pages/campuses/ZugPage'
import FranchisePage from './pages/FranchisePage'
import CareersPage from './pages/CareersPage'

export default function App() {
  return (
    <div className="font-sans min-h-screen">
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us/our-mission" element={<OurMissionPage />} />
        <Route path="/about-us/advisory-board" element={<AdvisoryBoardPage />} />
        <Route path="/about-us/our-team" element={<OurTeamPage />} />
        <Route path="/about-us/kids-in-action" element={<KidsInActionPage />} />
        <Route path="/campuses/zurich" element={<ZurichPage />} />
        <Route path="/campuses/baden" element={<BadenPage />} />
        <Route path="/campuses/bad-ragaz" element={<BadRagazPage />} />
        <Route path="/campuses/zug" element={<ZugPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/contact" element={<ApplyPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  )
}
