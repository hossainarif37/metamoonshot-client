import { Outlet } from "react-router-dom"
import Navber from "./shared/Navber/Navber"


function App() {

  return (
    <div className="bg-[#090519]">
      <Navber />
      <Outlet />
    </div>
  )
}

export default App
