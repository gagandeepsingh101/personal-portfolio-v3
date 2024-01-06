import { Outlet } from "react-router-dom"
import SideProfile from "./components/SideProfile"
import Header from "./components/Header"
function App() {

  return (
    <div className="h-fit w-screen bg-darkBlack p-5 text-white flex flex-col overflow-y-scroll overflow-x-hidden  justify-evenly items-center  lg:overflow-hidden lg:flex-row lg:h-screen">
      <SideProfile />
      <div className=" w-11/12 h-[100%] bg-lightBlack border border-[#ffffff24] rounded-xl mb-10 lg:mb-0 lg:h-full lg:w-9/12">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App
