'use client'
import DownloadBtn from '@/../public/DownloadButton.svg'
import profile from '@/../public/profile.svg'
import React from 'react'
import { Button } from '../ui/button'
import { Bell, ChevronsRight, Loader, Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Menu } from "@/lib/Menu"
import DrawerComponent from './DrawerComponents/Drawer'
import axios from 'axios'
import { toast } from 'sonner'
import Image from 'next/image'
const SideMenu = ({ name }: { name: string }) => {
    const router = useRouter()
    const Logout = async () => {
        console.log("called")
        try {
            const { data } = await axios.get("/api/logout")
            if (data.status) {

                router.push("/signin")
                toast.success(data.message, {
                    duration: 1000,
                    richColors: true,
                    closeButton: true
                })
            }
            else {
                toast.error(data.message, {
                    duration: 1000,
                    richColors: true,
                    closeButton: true
                })
            }
        }
        catch (error) {
            toast.error("Something went wrong", {
                duration: 1000,
                richColors: true,
                closeButton: true
            })
        }
    }
    return (
        <div className='px-4 py-6 flex flex-col justify-between'>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center justify-normal gap-2'>
                    <Image src={profile} alt='profile' className='rounded-full' />
                    <p className='text-xl font-semibold'>{name}</p>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <Bell />
                    <Loader />
                    <ChevronsRight />
                    <Button variant={"secondary"} className='bg-[#F4F4F4]' onClick={Logout}>Logout</Button>
                </div>

                <div className='flex flex-col gap-2'>
                    {
                        Menu?.map((item, index) => {
                            return <div className={`${index == 0 ? "bg-[#F4F4F4]" : ""} p-2 flex items-center justify-normal gap-3 hover:bg-[#F4F4F4] border border-[#DDDDDD] text-[#797979] cursor-pointer`} key={item.name}>
                                {item.icons}
                                <p className='text-xl'>{item.name}</p>
                            </div>
                        })
                    }
                    <DrawerComponent >
                        <Button className="bg-[#2F2188] hover:bg-[#4C38C2] text-lg">Create new task <span className='ms-2 bg-white rounded-full'><Plus color="#4C38C2" size={20} /></span></Button>
                    </DrawerComponent>
                </div>
            </div>
            <div className='bg-[#F3F3F3] flex w-full '>

                <Image src={DownloadBtn} alt='downlaod-btn' />
                <div className='w-60 py-2 text-[#666666]'>
                    <h3 className='text-xl font-semibold'>Download the app</h3>
                    <p className='text-sm'>Get the full experience </p>
                </div>
            </div>
        </div>
    )
}

export default SideMenu