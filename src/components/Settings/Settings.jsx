import {  Button, Input } from '@heroui/react';
import  { useContext } from 'react'
import { IoKeyOutline } from "react-icons/io5";
import { changePassword } from '../../services/authServices';
import { toast } from 'react-toastify';
import { changePasswordSchema } from '../../lib/ValidationSchema/authSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthContext } from '../../context/AuthContext';

export default function Settings() {

    let {setToken} = useContext(AuthContext);

    let {register , handleSubmit ,reset,  formState:{errors , isSubmitting}} = useForm({

        mode:"onChange",

        resolver:zodResolver(changePasswordSchema),

        defaultValues:{
            password:"",
            newPassword:"",
            confirmPassword:""
        }

    })

    async function confirmForm(data){
        // console.log(data);
            
        try {
            let response = await changePassword(data)

            toast.success(response.data.message)

            localStorage.setItem("userToken", response.data.data.token)
            setToken(response.data.data.token)
            reset()
        } catch (error) {
            let errorMessage =
            error.response?.data?.message ||
            error.response?.data?.error ||
            "Something went wrong"

            toast.error(errorMessage)
        }
 }

  return (
    <>
      <div className="mx-auto max-w-7xl px-3 py-3.5">
        <main className="min-w-0">
            <div className="mx-auto max-w-2xl">
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    
                    <div className="mb-5 flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f3ff] text-[#1877f2]">
                            <IoKeyOutline/>
                        </span>
                        <div>
                            <h1 className='text-xl font-extrabold text-slate-900 sm:text-2xl'>Change Password</h1>
                            <p className='text-sm text-slate-500'>Keep your account secure by using a strong password.</p>
                            
                        </div>
                    </div>

                    <form  className="space-y-4" onSubmit={handleSubmit(confirmForm)}>
                        <label className='block'>
                            <span className='mb-1.5 block text-sm font-bold text-slate-700'>Current password</span>
                            <Input
                            {...register("password")}
                            isInvalid={errors.password}
                            errorMessage={errors.password?.message}
                            type="password"  className='w-full rounded-xl border bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition border-slate-200 focus:border-[#1877f2] focus:bg-white' placeholder='Enter current password'/>
                        </label>
                        <label className='block'>
                            <span className='mb-1.5 block text-sm font-bold text-slate-700'>New password</span>
                            <Input 
                            {...register("newPassword")}
                            isInvalid={errors.newPassword}
                            errorMessage={errors.newPassword?.message}
                            type="password"  
                            className='w-full rounded-xl border bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition border-slate-200 focus:border-[#1877f2] focus:bg-white' 
                            placeholder='Enter new password'/>
                            <span className="mt-1 block text-xs text-slate-500">
                                At least 8 characters with uppercase, lowercase, number, and special character.
                            </span>
                        </label>
                        <label className='block'>
                            <span className='mb-1.5 block text-sm font-bold text-slate-700'>Confirm new password</span>
                            <Input
                            {...register("confirmPassword")}
                            isInvalid={errors.confirmPassword}
                            errorMessage={errors.confirmPassword?.message}
                            type="password"  className='w-full rounded-xl border bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition border-slate-200 focus:border-[#1877f2] focus:bg-white' placeholder='Re-enter password'/>
                        </label>

                        <Button type="submit"  isLoading={isSubmitting}
                        className="inline-flex w-full items-center justify-center rounded-xl bg-[#1877f2] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#166fe5] disabled:cursor-not-allowed disabled:opacity-60">
                            Update password
                        </Button>
                    </form>
                </section>
            </div>
        </main>
      </div>
    </>
  )
}
