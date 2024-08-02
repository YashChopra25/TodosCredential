import * as React from "react"
import { Cross, Minus, Plus, Scaling, ScalingIcon, Share2, Star, X } from "lucide-react"
import zoom_out from "@/../public/zoom_out.svg"
import cancel from "@/../public/cancel.svg"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image"
import DrawerBody from "./DrawerBody"


const DrawerComponent = ({ children, statusSelected = "Not Selected" }: { children: React.ReactNode, statusSelected?: string }) => {
    return (
        <Drawer direction="right" >
            <DrawerTrigger asChild>
                {children}
            </DrawerTrigger>
            <DrawerContent className='h-screen top-0 right-0 left-auto mt-0 rounded-none w-[500px] overflow-y-auto overflow-x-hidden'>
                <div className="w-full px-6 py-4 flex flex-col gap-7">
                    {/* Top header  */}
                    <div >
                        <DrawerTitle className="flex items-center justify-between">
                            <div className="flex gap-4">
                                <DrawerClose asChild>
                                    <Image src={cancel} alt="cancel" className="cursor-pointer" />
                                </DrawerClose>
                                <Image src={zoom_out} alt="zomm-out" />
                            </div>
                            <div className="flex gap-6">

                                <div className="px-2 py-3 bg-[#F4F4F4] text-[#797979] flex gap-3" >
                                    <p className="text-base ">Signup</p>
                                    <Share2 />
                                </div>
                                <div className="px-2 py-3 bg-[#F4F4F4] text-[#797979] flex gap-3" >
                                    <p className="text-base ">Favorite</p>
                                    <Star />
                                </div>
                            </div>

                        </DrawerTitle>
                        <DrawerDescription></DrawerDescription>
                    </div>

                    <DrawerBody statusSelected={statusSelected} />

                </div>
            </DrawerContent>
        </Drawer>
    )
}
export default DrawerComponent