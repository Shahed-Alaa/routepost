import AuthLeftSection from '../../../components/AuthLeftSection/AuthLeftSection'
import { Link, useNavigate } from 'react-router';
import { zodResolver } from '@hookform/resolvers/zod';
import {Button, Input, Select, SelectItem } from '@heroui/react';
import { FaCalendar } from "react-icons/fa";
import { LuUser , LuUsers } from "react-icons/lu";
import { MdAlternateEmail  , MdEmail} from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { registerSchema } from '../../../lib/ValidationSchema/authSchema';
import { toast } from 'react-toastify';
import { registerUser } from '../../../services/authServices';

export default function Register() {

    const navigate = useNavigate()

    let {register , handleSubmit ,formState:{errors , isSubmitting}} = useForm({
       mode :"onChange",
        resolver: zodResolver (registerSchema),
        defaultValues:{
            name: "",
            username: "",
            email: "",
            gender:"",
            dateOfBirth: "",
            password: "",
            rePassword: ""
        }
    })
  
   async function submitForm(data){
        console.log(data);

        try {
            
            let response = await registerUser(data)
            console.log(response , "register");
            
            toast.success(response.data.message)
            navigate("/login")
        } catch (error) {
            console.log(error);
            
            
            // let errorMessage = error.message || error.response?.data?.message || error.response?.data?.error;
            toast.error("failed")
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
                            <button type='button' className='rounded-lg py-2 text-sm font-extrabold transition text-slate-600 hover:text-slate-800'>
                                <Link to="/login">Login</Link> 
                            </button>
                            <button type="button" className='rounded-lg py-2 text-sm font-extrabold transition bg-white text-blue-900 shadow-sm'>
                            <Link to="/register"> Register</Link> 
                            </button>
                        </div>

                        <h2 className='text-2xl font-extrabold text-gray-900'>Create a new account</h2>
                        <p className='mt-1 text-sm text-gray-500'>It is quick and easy</p>

                        <form className='mt-5 space-y-3.5' onSubmit={handleSubmit(submitForm)}>
                        
                            <div>
                                <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                
                                 errorMessage={errors.name?.message}
                                isInvalid={errors.name}
                                {...register("name")}
                                placeholder="Full name"
                                startContent={
                                    <LuUser className="text-xl text-default-400 pointer-events-none shrink-0" />
                                }
                                type="text"
                                />
                                </div>
                            </div>
    
                            <div>
                                <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                <Input
                                {...register("username")}
                                isInvalid={errors.username}
                                errorMessage={errors.username?.message}
                                placeholder="Username(optional)"
                                startContent={
                                    <MdAlternateEmail className="text-xl text-default-400 pointer-events-none shrink-0" />
                                }
                                type="text"
                                />
                                </div>
                            </div>
                            
                            <div >
                                <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                        <Input
                                        errorMessage={errors.email?.message}
                                        isInvalid={errors.email}
                                        {...register("email")}
                                        placeholder="Email address"
                                        startContent={
                                            <MdEmail className="text-xl text-default-400 pointer-events-none shrink-0" />
                                        }
                                        type="email"
                                        />
                                </div>
                            </div>


                            <div>
                                <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                        <Select
                                        isInvalid={errors.gender}
                                        errorMessage={errors.gender?.message}
                                        {...register("gender")}
                                        defaultSelectedKeys={"Select your gender"}
                                        placeholder="Select gender"
                                        startContent={<LuUsers  className="text-lg text-default-400 pointer-events-none shrink-0"/>}
                                        >
                                            <SelectItem key="female">Female</SelectItem>
                                            <SelectItem key="male">Male</SelectItem>
                                        
                                        </Select>
                                </div>
                            </div>

                            <div>
                                <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                    <Input
                                     errorMessage={errors.dateOfBirth?.message}
                                    isInvalid={errors.dateOfBirth}
                                    {...register("dateOfBirth")}
                                    startContent={
                                        <FaCalendar className="text-lg text-default-400 pointer-events-none shrink-0" />
                                    }             
                                    type="date"
                                    />
                                </div>  
                            </div>

                            <div>
                                <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                        <Input
                                         errorMessage={errors.password?.message}
                                        isInvalid={errors.password}
                                        {...register("password")}
                                        placeholder="Password"
                                        startContent={
                                            <IoKeyOutline className="text-lg text-default-400 pointer-events-none shrink-0" />
                                        }
                                        type="password"
                                        />
                                </div>
                            </div>


                            <div>
                                <div className=" flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                                        <Input
                                        isInvalid={errors.rePassword}
                                        {...register("rePassword")}
                                        placeholder="Confirm password"
                                        startContent={
                                            <IoKeyOutline className="text-lg text-default-400 pointer-events-none shrink-0" />
                                        }
                                        errorMessage={errors.rePassword?.message}
                                        type="password"
                                        />
                                </div>
                            </div>

                            <Button isLoading={isSubmitting} type='submit' className='w-full rounded-xl py-3 text-base font-extrabold text-white transition disabled:opacity-60 bg-blue-900 hover:bg-[#001f6b]'>
                                Create New Account
                            </Button>
                        </form>

                </div>

            </div>
            
        </div>

    </div>
</>
)}