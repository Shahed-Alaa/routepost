import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HeroUIProvider } from '@heroui/react'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthContextProvider from './context/AuthContext.jsx'
import ProfileContextProvider from './context/ProfileContext.jsx'

// إنشاء مثيل من QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroUIProvider>
        <ProfileContextProvider>
          <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
              <ToastContainer /> 
              <App />
            </QueryClientProvider>
          </AuthContextProvider>
        </ProfileContextProvider>
    </HeroUIProvider>
  </StrictMode>,
)
