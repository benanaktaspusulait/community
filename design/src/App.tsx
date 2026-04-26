import { Routes, Route } from 'react-router-dom'
import { Phone } from './components/ui/Phone'
import { ScreenIndex } from './screens/ScreenIndex'
import { AuthLanding } from './screens/AuthLanding'
import { Join } from './screens/Join'
import { VerifyCode } from './screens/VerifyCode'
import { OnboardingInterests } from './screens/OnboardingInterests'
import { HomeFeed } from './screens/HomeFeed'
import { SearchScreen } from './screens/SearchScreen'
import { CreateHelpRequest } from './screens/CreateHelpRequest'
import { ThreadDetail } from './screens/ThreadDetail'
import { LibraryHome } from './screens/LibraryHome'
import { ResourceDetail } from './screens/ResourceDetail'
import { SpecialDayGroup } from './screens/SpecialDayGroup'
import { AdminModeration } from './screens/AdminModeration'
import { ProfileScreen } from './screens/ProfileScreen'

// Screens that need the phone shell
const phoneRoutes = [
  { path: '/', element: <AuthLanding /> },
  { path: '/join', element: <Join /> },
  { path: '/verify', element: <VerifyCode /> },
  { path: '/onboarding', element: <OnboardingInterests /> },
  { path: '/feed', element: <HomeFeed /> },
  { path: '/search', element: <SearchScreen /> },
  { path: '/create', element: <CreateHelpRequest /> },
  { path: '/thread', element: <ThreadDetail /> },
  { path: '/library', element: <LibraryHome /> },
  { path: '/resource', element: <ResourceDetail /> },
  { path: '/special-day', element: <SpecialDayGroup /> },
  { path: '/admin', element: <AdminModeration /> },
  { path: '/profile', element: <ProfileScreen /> },
]

export default function App() {
  return (
    <Routes>
      <Route path="/screens" element={<ScreenIndex />} />
      {phoneRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<Phone>{element}</Phone>}
        />
      ))}
    </Routes>
  )
}
