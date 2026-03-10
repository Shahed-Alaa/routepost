import AuthLeftSection from '../../../components/AuthLeftSection/AuthLeftSection'
import { Button, Input } from '@heroui/react'
import { MdEmail } from 'react-icons/md'
import { Link, useNavigate } from 'react-router'
import { IoKeyOutline } from 'react-icons/io5'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../../../lib/ValidationSchema/authSchema'
import { loginUser } from '../../../services/authServices'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

export default function Login() {

 let {setToken} = useContext(AuthContext)
    const navigate = useNavigate()

    let {register , handleSubmit ,  formState:{errors , isSubmitting}} = useForm({
        mode: "onChange",

        resolver: zodResolver(loginSchema),
        defaultValues:{
            email :"",
            password:"",
        }
    })

    async function submitForm(data){
            console.log(data);
    
            try {
                
                let response = await loginUser(data)
                console.log(response , "login");
                console.log(response.data.message);
                localStorage.setItem("userToken", response.data.data.token)
                setToken(response.data.data.token)
                toast.success(response.data.message)
                navigate("/")
            } catch (error) {
                console.log(error);
                // let errorMessage = error.message || error.response?.data?.message || error.response?.data?.error;
                toast.error(response.data.message)
            }
            
    }
  return (
    <>
        
    <div  className="sm:py-12 px-4 py-8  bg-gray-100 font-cairo lg:flex lg:items-center w-full">
        
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            
            <div className="w-full max-w-xl text-center order-2 lg:order-1 lg:text-left ">
                <AuthLeftSection />    
            </div>

            <div className="order-1 w-full max-w-107.5 lg:order-2">
                
                <div className="rounded-2xl bg-white p-4 sm:p-6">

                        <div className="mb-4 text-center lg:hidden">
                            <h1 className='text-3xl font-extrabold tracking-tight text-blue-900'>Route Posts</h1>
                            <p className='mt-1 text-base font-medium leading-snug text-slate-700'>Connect with friends and the world around you on Route Posts.</p>
                        </div>

                        <div className="mb-5 grid grid-cols-2 rounded-xl bg-gray-100 p-1">
                            <button type='button' className='rounded-lg py-2 text-sm font-extrabold transition bg-white text-blue-900 shadow-sm'>
                                <Link to="/login">Login</Link> 
                            </button>
                            <button type="button" className='rounded-lg py-2 text-sm font-extrabold transition text-slate-600 hover:text-slate-800 '>
                                <Link to="/register"> Register</Link> 
                            </button>
                        </div>

                        <h2 className='text-2xl font-extrabold text-gray-900'>Log in to Route Posts</h2>
                        <p className='mt-1 text-sm text-gray-500'>Log in and continue your social journey.</p>

                        <form  className='mt-5 space-y-3.5' onSubmit={handleSubmit(submitForm)}>
                            
                            <div >
                                <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                        <Input
                                        isInvalid={errors.email}
                                        {...register("email")}
                                        errorMessage={errors.email?.message}
                                        placeholder="Email address"
                                        className='border border-gray-300 rounded-xl'
                                        startContent={
                                            <MdEmail className="text-xl text-default-400 pointer-events-none shrink-0" />
                                        }
                                        type="email"
                                        />
                                </div>
                            </div>

                            <div>
                                <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                        <Input
                                         isInvalid={errors.password}
                                        {...register("password")}
                                        errorMessage={errors.password?.message}
                                        placeholder="Password"
                                        className='border border-gray-300 rounded-xl'
                                        startContent={
                                            <IoKeyOutline className="text-lg text-default-400 pointer-events-none shrink-0" />
                                        }
                                        type="password"
                                        />
                                </div>
                            </div>

                            <Button isLoading={isSubmitting} type='submit' className='w-full rounded-xl py-3 text-base font-extrabold text-white transition disabled:opacity-60 bg-blue-900 hover:bg-[#001f6b]'>
                               Log In
                            </Button>

                        </form>

                    <Link className= 'mt-4 flex items-center justify-center text-blue-900 transition hover:underline hover:decoration-blue-900'>Forgot password?</Link>
                </div>

            </div>
            
        </div>

    </div>
    </>
  )
}
