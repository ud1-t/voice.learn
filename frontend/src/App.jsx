import SidebarGroup from '@/components/app/sidebar/SidebarGroup'
import Navbar from '@/components/app/navgroup/Navbar'

function App({ children }) {

  return (
    <>
      <Navbar />
      <SidebarGroup />
    </>
  )
}

export default App
