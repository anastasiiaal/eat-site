import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil'
import LaCarte from './pages/LaCarte'
import Contact from './pages/Contact'
import Reservation from './pages/Reservation'


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Layout /> }>
      <Route index element={ <Accueil /> } />
      <Route path="carte" element={<LaCarte />} />
      <Route path="contact" element={<Contact />} />
      <Route path="reservation" element={<Reservation />} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App
