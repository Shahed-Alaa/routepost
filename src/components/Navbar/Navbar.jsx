import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  // Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";

import { Link, NavLink } from "react-router";
import { FaBars } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { TbUser } from "react-icons/tb";
import { FiHome } from "react-icons/fi";
import RouteLogo from "../../assets/imges/route.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import { ProfileContext } from "../../context/ProfileContext";

export default function NavbarComponent() {

let {profileData} = useContext(ProfileContext);


  let {setToken} = useContext(AuthContext)
 const navigate = useNavigate();
    function handleLogout() {
    localStorage.removeItem("userToken")
    setToken(null) 
    navigate("register") 
  }
 
  return (
     <Navbar className='font-cairo flex items-center justify-center' maxWidth='lg'>

      <NavbarBrand>
        <img src={RouteLogo} className='h-9 w-9 rounded-xl object-cover mr-3' />
        <p className="text-xl font-extrabold  hidden sm:block">Route Posts</p>
      </NavbarBrand>

      <NavbarContent>
        <nav className='flex items-center gap-1 overflow-x-auto rounded-2xl border border-gray-200 bg-gray-50/90 px-1 py-1 sm:px-1.5'>
          <NavLink to="/" 
            className={({ isActive }) =>
    `cursor-pointer relative flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-extrabold transition sm:gap-2 sm:px-3.5
    ${isActive ? "bg-white text-[#1f6fe5]" : "text-slate-600 hover:bg-white/90 hover:text-slate-900"}`
  }
          >
            <FiHome/>
           <span className='hidden sm:inline'>Feed</span>
           <span className='sr-only sm:hidden'>Feed</span>
          </NavLink>

          
          <NavLink to="/profile"
             className={({ isActive }) =>
    `cursor-pointer relative flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-extrabold transition sm:gap-2 sm:px-3.5
    ${isActive ? "bg-white text-[#1f6fe5]" : "text-slate-600 hover:bg-white/90 hover:text-slate-900"}`
  }>
            <TbUser/>
           <span className='hidden sm:inline'>Profile</span>
           <span className='sr-only sm:hidden'>Profile</span>
          </NavLink>

          <NavLink to="/notification" 
            className={({ isActive }) =>
    `cursor-pointer relative flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-extrabold transition sm:gap-2 sm:px-3.5
    ${isActive ? "bg-white text-[#1f6fe5]" : "text-slate-600 hover:bg-white/90 hover:text-slate-900"}`
  }>
            <FaRegComment/>
           <span className='hidden sm:inline'>Notification</span>
           <span className='sr-only sm:hidden'>Notification</span>
          </NavLink>


        </nav>
      </NavbarContent>


      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger >
            <div className='flex items-center  gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5 transition hover:bg-slate-100'>
              {profileData?.photo ? 
              <Avatar
              as="button"
              className="transition-transform"
              name={profileData.name}
              size="sm"
              src={profileData.photo}
                />
            :""
              
            }
            <h4 className='font-semibold hidden lg:block'>{profileData?.name}</h4>
            <FaBars/>
            </div>
          </DropdownTrigger>

          <DropdownMenu aria-label="Profile Actions" variant="flat">
            
            <DropdownItem key="settings">
              <NavbarBrand  >
                 <Link  className='flex gap-2 font-cairo' to="/profile">
                 <TbUser/>
                   Profile
                 </Link>
              </NavbarBrand>
            </DropdownItem>
            <DropdownItem key="team_settings" className='flex gap-2 font-cairo'>
              <NavbarBrand   className="border-b-1 border-gray-400 pb-4">
                  <Link className='flex gap-2 items-center' to="/settings">    
                   <CiSettings/>
                     Settings
                </Link>
              </NavbarBrand>
            </DropdownItem>
            {/* <NavbarBrand ></NavbarBrand> */}
            <DropdownItem onClick={()=>handleLogout()} key="logout" >
             <NavbarBrand >
              <span className='text-red-500 font-cairo '>
                  Log Out

              </span>
                
              </NavbarBrand>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

    </Navbar>
  )
}
