import NavbarComponent from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
   <NavbarComponent/>
   <Outlet/>
    </>
  )
}
