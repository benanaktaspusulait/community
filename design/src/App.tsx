import { Routes, Route } from 'react-router-dom'
import { Phone } from './components/ui/Phone'
import { ScreenIndex } from './screens/ScreenIndex'
import { AuthLanding } from './screens/AuthLanding'
import { PublicPreview } from './screens/PublicPreview'
import { InviteLanding } from './screens/InviteLanding'
import { JoinPending } from './screens/JoinPending'
import { Join } from './screens/Join'
import { VerifyCode } from './screens/VerifyCode'
import { OnboardingInterests } from './screens/OnboardingInterests'
import { LocationSetup } from './screens/LocationSetup'
import { MapLocationPicker } from './screens/MapLocationPicker'
import { HomeFeed } from './screens/HomeFeed'
import { Notifications } from './screens/Notifications'
import { PushNotificationDemo } from './screens/PushNotificationDemo'
import { CommunityHome } from './screens/CommunityHome'
import { TopicGroup } from './screens/TopicGroup'
import { CreateGroup } from './screens/CreateGroup'
import { SuggestGroup } from './screens/SuggestGroup'
import { InvitePeople } from './screens/InvitePeople'
import { SearchScreen } from './screens/SearchScreen'
import { CreateHelpRequest } from './screens/CreateHelpRequest'
import { CreateListing } from './screens/CreateListing'
import { ThreadDetail } from './screens/ThreadDetail'
import { ReportModal } from './screens/ReportModal'
import { LibraryHome } from './screens/LibraryHome'
import { ResourceDetail } from './screens/ResourceDetail'
import { MediaArchive } from './screens/MediaArchive'
import { SpecialDayGroup } from './screens/SpecialDayGroup'
import { AdCreate } from './screens/AdCreate'
import { Settings } from './screens/Settings'
import { ProfileScreen } from './screens/ProfileScreen'
import { MemberProfile } from './screens/MemberProfile'
import { AdminHome } from './screens/AdminHome'
import { AdminModeration } from './screens/AdminModeration'
import { AdminReportsQueue } from './screens/AdminReportsQueue'
import { ApprovalQueue } from './screens/ApprovalQueue'
import { SplashScreen } from './screens/SplashScreen'
import { AdminLibraryManager } from './screens/AdminLibraryManager'

const phoneRoutes = [
  { path: '/splash', element: <SplashScreen /> },
  { path: '/', element: <SplashScreen /> },
  { path: '/preview', element: <PublicPreview /> },
  { path: '/invite/landing', element: <InviteLanding /> },
  { path: '/join/pending', element: <JoinPending /> },
  { path: '/join', element: <Join /> },
  { path: '/verify', element: <VerifyCode /> },
  { path: '/onboarding', element: <OnboardingInterests /> },
  { path: '/onboarding/location', element: <LocationSetup /> },
  { path: '/location/map', element: <MapLocationPicker /> },
  { path: '/onboarding/interests', element: <OnboardingInterests /> },
  { path: '/feed', element: <HomeFeed /> },
  { path: '/notifications', element: <Notifications /> },
  { path: '/notifications/push-demo', element: <PushNotificationDemo /> },
  { path: '/community', element: <CommunityHome /> },
  { path: '/group', element: <TopicGroup /> },
  { path: '/group/create', element: <CreateGroup /> },
  { path: '/group/suggest', element: <SuggestGroup /> },
  { path: '/invite', element: <InvitePeople /> },
  { path: '/search', element: <SearchScreen /> },
  { path: '/create', element: <CreateHelpRequest /> },
  { path: '/listing/create', element: <CreateListing /> },
  { path: '/thread', element: <ThreadDetail /> },
  { path: '/report', element: <ReportModal /> },
  { path: '/library', element: <LibraryHome /> },
  { path: '/resource', element: <ResourceDetail /> },
  { path: '/media', element: <MediaArchive /> },
  { path: '/special-day', element: <SpecialDayGroup /> },
  { path: '/ad/create', element: <AdCreate /> },
  { path: '/settings', element: <Settings /> },
  { path: '/profile', element: <ProfileScreen /> },
  { path: '/member', element: <MemberProfile /> },
  { path: '/admin', element: <AdminHome /> },
  { path: '/admin/invites', element: <InvitePeople /> },
  { path: '/admin/moderation', element: <AdminModeration /> },
  { path: '/admin/reports', element: <AdminReportsQueue /> },
  { path: '/admin/approvals', element: <ApprovalQueue /> },
  { path: '/admin/library', element: <AdminLibraryManager /> },
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
