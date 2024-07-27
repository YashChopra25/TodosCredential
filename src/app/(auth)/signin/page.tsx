"use client"
import Wrapper from '@/components/customWrapper/Wrapper'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'
import Eye from "@/../public/Eye.svg"
import CloseEye from "@/../public/EyeClose.svg"
import Image from 'next/image'
import { toast } from 'sonner'
const SignIn = () => {
    const [showPassword, setshowPassword] = useState(false);
    const [credential, setCredential] = useState({
        email: "",
        password: ""
    })
    const HandleOnChangeCredential = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCredential((prev) => {
            return { ...prev, [name]: value }
        }
        )
    }
    const isCredentialProvided = (credential.email.trim().length == 0 || credential.password.trim().length == 0) ? true : false
    const FormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isCredentialProvided) {
            toast.error("Please Provide email and password")
            return;
        }
        toast.success("login");
        console.log(credential)
    }
    return (
        <Wrapper>
            <div className='bg-white p-[60px] flex flex-col gap-6 border border-black shadow-md rounded-xl'>
                <h1 className='font-semibold text-5xl'>Welcome to <span className='text-[#4534AC]'>Workflo!</span></h1>
                <form onSubmit={FormSubmitHandler} className='flex flex-col gap-6'>
                    <input type="text" id="email" value={credential.email} name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#999999] focus:border-[#999999] focus:outline-none block w-full p-2.5 " placeholder="Your email" onChange={HandleOnChangeCredential} />
                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#999999] focus:border-[#999999] focus:outline-none block w-full p-2.5 pr-11" placeholder="Password" value={credential.password} onChange={HandleOnChangeCredential} />
                        <div className="absolute right-0 top-0 z-30 inset-y-1 flex items-center pr-3 cursor-pointer"><Image src={showPassword ? CloseEye : Eye} alt={showPassword ? "CloseEye" : "Eye"} onClick={() => { setshowPassword((pre) => !pre) }} /></div>
                    </div>
                    <Button className={`${isCredentialProvided ? "bg-[#9C93D4]" : "bg-[#4B36CC]"} hover:bg-[#4B36CC]`} type='submit' disabled={isCredentialProvided}>Login</Button>
                </form>
                <p className='font-normal text-lg text-[#606060] mx-auto'>Don’t have an account? Create a <Link href='/signup' className='text-[#0054A1]'>new account.</Link></p>
            </div>
        </Wrapper >
    )
}

export default SignIn