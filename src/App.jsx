import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout/MainLayout'
import NewsFeed from './Pages/Feed/Feed'
import NotFound from './Pages/NotFound/NotFound'
import AuthLayout from './Layouts/AuthLayout/AuthLayout'
import Register from './Pages/Auth/Register/Register'
import Login from './Pages/Auth/Login/Login'
import Profile from './Pages/Profile/Profile'
import Settings from './components/Settings/Settings'
import PostDetails from './Pages/PostDetails/PostDetails'
import MyPosts from './Pages/MyPosts/MyPosts'
import Community from './Pages/Community/Community'
import AppProtectedRoutes from './components/ProtectedRoutes/AppProtectedRoutes'
import AuthProtectedRoutes from './components/ProtectedRoutes/AuthProtectedRoutes'


export default function App() {
  
  const routes = createBrowserRouter([
    {path: "/", element:<MainLayout/> , children:[
      {index: true , element:<AppProtectedRoutes><NewsFeed/></AppProtectedRoutes> }, 
      {path: "profile" , element:<AppProtectedRoutes><Profile/></AppProtectedRoutes>},
      {path: "settings" , element:<AppProtectedRoutes><Settings/></AppProtectedRoutes>},
      {path: "community" , element:<AppProtectedRoutes><Community/></AppProtectedRoutes>},
      {path: "my-post" , element:<AppProtectedRoutes><MyPosts/></AppProtectedRoutes>},
      {path: "posts/:id" , element:<AppProtectedRoutes><PostDetails/></AppProtectedRoutes>},
      {path: "*" , element:<NotFound/>},
    ]},

    
    {path: "/", element:<AuthLayout/> , children:[
      {path: "login" , element:<AuthProtectedRoutes><Login/></AuthProtectedRoutes>},
      {path: "register" , element:<AuthProtectedRoutes><Register/></AuthProtectedRoutes>}, 
      {path:"*" , element:<NotFound/>}
    ]},
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}
