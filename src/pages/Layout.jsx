import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import { Outlet } from "react-router"


const layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default layout
