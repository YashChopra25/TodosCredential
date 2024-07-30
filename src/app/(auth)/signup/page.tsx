"use client"
import Wrapper from '@/components/customWrapper/Wrapper'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'
import Eye from "@/../public/Eye.svg"
import CloseEye from "@/../public/EyeClose.svg"
import Image from 'next/image'
import { toast } from 'sonner'
import axios, { isAxiosError } from 'axios'
import { useRouter } from 'next/navigation'

const Signup = () => {
    const [showPassword, setshowPassword] = useState(false)
    const [credential, setCredential] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [isloading, setIsloading] = useState(false);
    const router = useRouter()

    const HandleOnChangeCredential = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCredential((prev) => {
            return { ...prev, [name]: value }
        }
        )
    }
    const isCredentialProvided = (credential.email.trim().length == 0 || credential.password.trim().length == 0) ? true : false
    const FormSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(credential)
        if (isCredentialProvided) {
            toast.error("Please Provide email and password")
            return;
        }
        try {
            setIsloading(true)
            const { data } = await axios.post("/api/signup", credential)
            if (data.status) {
                toast.success("Signup Success", {
                    closeButton: true,
                    richColors: true,
                    duration: 1000
                })
                setTimeout(() => {
                    router.push("/")
                }, 2000)
            }
            else {
                toast.error(data.message, {
                    closeButton: true,
                    richColors: true,
                    duration: 2000
                })
            }
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data?.message || "Something went wrong", {
                    closeButton: true,
                    richColors: true,
                    duration: 2000
                })
            }
            else {
                toast.error("Something went wrong", {
                    closeButton: true,
                    richColors: true,
                    duration: 2000
                })
            }
        } finally {
            setIsloading(false)
        }
    }
    return (
        <Wrapper>
            <div className='bg-white p-[60px] flex flex-col gap-6 border border-black shadow-md rounded-xl'>
                <h1 className='font-semibold text-5xl'>Welcome to <span className='text-[#4534AC]'>Workflo!</span></h1>
                <form className='flex flex-col gap-6' onSubmit={FormSubmitHandler}>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#999999] focus:border-[#999999] focus:outline-none block w-full p-2.5 " placeholder="Your name" name='name' value={credential.name} onChange={HandleOnChangeCredential} />
                    <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#999999] focus:border-[#999999] focus:outline-none block w-full p-2.5 " placeholder="Your email" name='email' value={credential.email} onChange={HandleOnChangeCredential} />

                    <div className='relative'>
                        <input type={showPassword ? "text" : "password"} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#999999] focus:border-[#999999] focus:outline-none block w-full p-2.5 pr-11" placeholder="Password" name="password" value={credential.password} onChange={HandleOnChangeCredential} />
                        <div className="absolute right-0 top-0 z-30 inset-y-1 flex items-center pr-3 cursor-pointer"><Image src={showPassword ? CloseEye : Eye} alt={showPassword ? "CloseEye" : "Eye"} onClick={() => { setshowPassword((pre) => !pre) }} /></div>
                    </div>
                    <Button className={`${isCredentialProvided ? "bg-[#9C93D4]" : "bg-[#4B36CC]"} hover:bg-[#4B36CC]`} type='submit' disabled={isCredentialProvided}>{
                        isloading ? "Signing up...."
                            : "Signup"
                    }</Button>
                </form>
                <p className='font-normal text-lg text-[#606060] mx-auto'>Already have an account? <Link href='/signin' className='text-[#0054A1]'>Log in.</Link></p>
            </div>
        </Wrapper>
    )
}

export default Signup