import { Outlet } from "react-router-dom"
import SideProfile from "./components/SideProfile"
import Header from "./components/Header"

// App component
function App() {
  return (
    // Main container for the entire app
    <div className="h-fit w-screen bg-darkBlack p-5 text-white flex flex-col overflow-y-scroll overflow-x-hidden justify-evenly items-center lg:overflow-hidden lg:flex-row lg:h-screen">
      {/* Side profile section */}
      <SideProfile />

      {/* Main content section */}
      <div className="w-11/12 h-[100%] bg-lightBlack border border-[#ffffff24] rounded-xl mb-10 lg:mb-0 lg:h-full lg:w-9/12">
        {/* Header component for navigation */}
        <Header />

        {/* Outlet for rendering nested routes */}
        <Outlet />
      </div>
    </div>
  )
}

export default App;
