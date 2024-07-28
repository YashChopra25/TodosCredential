'use client'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar as CalenderIcon, Loader, Pen, Plus } from 'lucide-react'
import priority from "@/../public/priority.svg"
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { DrawerFooter, DrawerClose } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
interface tododetailType {
    deadline: string | undefined;
    status: string;
    priority: string;
    description: string;
}
const DrawerBody = ({ statusSelected = "Not Selected" }: { statusSelected?: string }) => {
    const [tododetail, settododetail] = useState<tododetailType>({
        status: statusSelected,
        priority: "",
        deadline: undefined,
        description: ""

    })
    const HandleOnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        settododetail((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }
    const HandleSubmit = () => {
        console.log(tododetail)
    }
    return (
        <React.Fragment>


            <div className="w-full flex flex-col gap-7">
                <input type="text" name="" id="" className="w-full text-5xl font-semibold text-[#CCCCCC] ps-1 focus:outline-[#CCCCCC]" placeholder="Title" />
                <div className='flex flex-col gap-8'>
                    <div className='flex items-center gap-16 text-[#666666]'>
                        <div className='flex items-center gap-6'><Loader size={20} color="#666666" />Status</div>
                        <Select name='status' onValueChange={(status) => {
                            settododetail((prev) => {
                                return {
                                    ...prev, status: status
                                }
                            })
                        }}>
                            <SelectTrigger className="w-[180px]" >
                                <SelectValue placeholder={tododetail.status} />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectItem value="to_do">To do</SelectItem>
                                <SelectItem value="in_progress">In progress</SelectItem>
                                <SelectItem value="under_review">Under review</SelectItem>
                                <SelectItem value="finished">Finished</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                    <div className='flex items-center gap-16 text-[#666666]'>
                        <div className='flex items-center gap-6'><Image src={priority} alt='priority' /> Priority</div>
                        <input type="text" name='priority' className='p-1 w-[180px] text-[#C1BDBD] text-base outline-none' placeholder='Not Selected' value={tododetail.priority} onChange={HandleOnChange} />
                    </div>
                    <div className='flex items-center gap-16 text-[#666666]'>
                        <div className='flex items-center gap-6'><CalenderIcon /> Deadline</div>
                        <Popover>
                            <PopoverTrigger>
                                <input type="text" className='p-1 w-[180px] text-[#C1BDBD] text-base outline-none' placeholder={tododetail.deadline ? tododetail.deadline as string : "Not Selected"} />
                            </PopoverTrigger>
                            <PopoverContent>
                                <Calendar
                                    mode="single"
                                    selected={tododetail.deadline as unknown as Date}
                                    onSelect={(deadline) => {
                                        settododetail((prev) => {
                                            return {
                                                ...prev, deadline: deadline?.toLocaleDateString()
                                            }
                                        })
                                    }}

                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className='flex items-start gap-16 text-[#666666] h-auto'>
                        <div className='flex items-center gap-6'><Pen /> Description</div>
                        {/* <input type="text" className='p-1 w-[180px] text-[#C1BDBD] text-base outline-none' placeholder='Not Selected' /> */}
                        <textarea className='p-1 w-[180px] text-[#C1BDBD] text-base outline-none' placeholder='Not Selected' name='description' onChange={HandleOnChange} ></textarea>
                    </div>
                    <div className=''>
                        <div className='flex items-center gap-6'><Plus size={20} /> Add custom property</div>
                    </div>
                    <Separator />
                    <p className='text-[#C0BDBD]'>Start writing, or drag your own files here.</p>
                </div>
            </div>
            <DrawerFooter>
                <Button onClick={HandleSubmit}>Submit</Button>
                <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </React.Fragment>
    )
}

export default DrawerBody