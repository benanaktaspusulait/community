import { Routes, Route } from 'react-router-dom'
import { Phone } from './components/ui/Phone'
import { ScreenIndex } from './screens/ScreenIndex'
import { AuthLanding } from './screens/AuthLanding'
import { Join } from './screens/Join'
import { VerifyCode } from './screens/VerifyCode'
import { OnboardingInterests } from './screens/OnboardingInterests'
import { LocationSetup } from './screens/LocationSetup'
import { HomeFeed } from './screens/HomeFeed'
import { Notifications } from './screens/Notifications'
import { CommunityHome } from './screens/CommunityHome'
import { TopicGroup } from './screens/TopicGroup'
import { CreateGroup } from './screens/CreateGroup'
import { SuggestGroup } from './screens/SuggestGroup'
import { SearchScreen } from './screens/SearchScreen'
import { CreateHelpRequest } from './screens/CreateHelpRequest'
import { CreateListing } from './screens/CreateListing'
import { ThreadDetail } from './screens/ThreadDetail'
import { ReportModal } from './screens/ReportModal'
import { LibraryHome } from './screens/LibraryHome'
import { ResourceDetail } from './screens/ResourceDetail'
import { SpecialDayGroup } from './screens/SpecialDayGroup'
import { AdCreate } from './screens/AdCreate'
import { Settings } from './screens/Settings'
import { ProfileScreen } from './screens/ProfileScreen'
import { MemberProfile } from './screens/MemberProfile'
import { AdminHome } from './screens/AdminHome'
import { AdminModeration } from './screens/AdminModeration'
import { AdminReportsQueue } from './screens/AdminReportsQueue'
import { ApprovalQueue } from './screens/ApprovalQueue'

const phoneRoutes = [
  { path: '/', element: <AuthLanding /> },
  { path: '/join', element: <Join /> },
  { path: '/verify', element: <VerifyCode /> },
  { path: '/onboarding', element: <OnboardingInterests /> },
  { path: '/onboarding/location', element: <LocationSetup /> },
  { path: '/onboarding/interests', element: <OnboardingInterests /> },
  { path: '/feed', element: <HomeFeed /> },
  { path: '/notifications', element: <Notifications /> },
  { path: '/community', element: <CommunityHome /> },
  { path: '/group', element: <TopicGroup /> },
  { path: '/group/create', element: <CreateGroup /> },
  { path: '/group/suggest', element: <SuggestGroup /> },
  { path: '/search', element: <SearchScreen /> },
  { path: '/create', element: <CreateHelpRequest /> },
  { path: '/listing/create', element: <CreateListing /> },
  { path: '/thread', element: <ThreadDetail /> },
  { path: '/report', element: <ReportModal /> },
  { path: '/library', element: <LibraryHome /> },
  { path: '/resource', element: <ResourceDetail /> },
  { path: '/special-day', element: <SpecialDayGroup /> },
  { path: '/ad/create', element: <AdCreate /> },
  { path: '/settings', element: <Settings /> },
  { path: '/profile', element: <ProfileScreen /> },
  { path: '/member', element: <MemberProfile /> },
  { path: '/admin', element: <AdminHome /> },
  { path: '/admin/moderation', element: <AdminModeration /> },
  { path: '/admin/reports', element: <AdminReportsQueue /> },
  { path: '/admin/approvals', element: <ApprovalQueue /> },
]

export default function App() {
  return (
    <Routes>
      <Route path="/screens" element={<ScreenIndex />} />
      {phoneRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={<Phone>{element}</Phone>} />
      ))}
    </Routes>
  )
}
