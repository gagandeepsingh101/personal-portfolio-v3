import { Outlet } from "react-router-dom"
import SideProfile from "./components/SideProfile"
import Header from "./components/Header"
function App() {

  return (
    <div className="h-screen w-screen bg-darkBlack p-5 text-white flex justify-evenly items-center">
      <SideProfile />
      <div className="h-full w-9/12 bg-lightBlack border border-[#ffffff24] rounded-xl">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App
