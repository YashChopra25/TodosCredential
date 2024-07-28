'use client'
import React from 'react'
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

const DrawerBody = ({ statusSelected = "Not Selected" }: { statusSelected?: string }) => {
    const [date, setDate] = React.useState<Date | undefined | string>(undefined)
    console.log(date)
    return (
        <div className="w-full flex flex-col gap-7">
            <input type="text" name="" id="" className="w-full text-5xl font-semibold text-[#CCCCCC] ps-1 focus:outline-[#CCCCCC]" placeholder="Title" />
            <div className='flex flex-col gap-8'>
                <div className='flex items-center gap-[60px] text-[#666666]'>
                    <div className='flex items-center gap-6'><Loader size={20} color="#666666" />Status</div>
                    <Select name='status'>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={statusSelected} />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value="to_do">To do</SelectItem>
                            <SelectItem value="in_progress">In progress</SelectItem>
                            <SelectItem value="under_review">Under review</SelectItem>
                            <SelectItem value="finished">Finished</SelectItem>
                        </SelectContent>
                    </Select>

                </div>
                <div className='flex items-center gap-[60px] text-[#666666]'>
                    <div className='flex items-center gap-6'><Image src={priority} alt='priority' /> Priority</div>
                    <input type="text" className='p-1 w-[180px] text-[#C1BDBD] text-base outline-none' placeholder='Not Selected' />
                </div>
                <div className='flex items-center gap-[60px] text-[#666666]'>
                    <div className='flex items-center gap-6'><CalenderIcon /> Deadline</div>
                    <Popover>
                        <PopoverTrigger>
                            <input type="text" className='p-1 w-[180px] text-[#C1BDBD] text-base outline-none' placeholder={date ? date as string : "Not Selected"} />
                        </PopoverTrigger>
                        <PopoverContent>
                            <Calendar
                                mode="single"
                                selected={date as Date}
                                onSelect={(data) => { setDate(data?.toLocaleDateString()) }}
                                
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className='flex items-center gap-[60px] text-[#666666]'>
                    <div className='flex items-center gap-6'><Pen /> Description</div>
                    <input type="text" className='p-1 w-[180px] text-[#C1BDBD] text-base outline-none' placeholder='Not Selected' />
                </div>
                <div className=''>
                    <div className='flex items-center gap-6'><Plus size={20} /> Add custom property</div>
                </div>
                <Separator />
                <p className='text-[#C0BDBD]'>Start writing, or drag your own files here.</p>
            </div>
        </div>
    )
}

export default DrawerBody