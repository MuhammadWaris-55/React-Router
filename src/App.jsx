import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
      <Outlet />  {/* Renders the matched child route */}
     <Footer/>
    </>
  )
}

export default App
