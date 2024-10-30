import SidebarGroup from '@/components/app/sidebar/SidebarGroup'
import Navbar from '@/components/app/navgroup/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="flex ">
        <SidebarGroup />
      </div>
    </>
  )
}

export default App
