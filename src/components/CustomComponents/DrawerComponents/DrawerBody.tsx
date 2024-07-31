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
import { useDispatch } from 'react-redux'
import { addTask } from '@/lib/features/app-slice'
import { toast } from 'sonner'
import { tododetailType } from '@/lib/Types'
import axios, { isAxiosError } from 'axios'


const DrawerBody = ({ statusSelected = "Not Selected" }: { statusSelected?: string }) => {
    const [tododetail, settododetail] = useState<tododetailType>({
        status: statusSelected,
        priority: "Not Selected",
        deadline: "",
        description: "",
        title: ""

    })
    const [isloading, setIsloading] = useState(false)
    const dispatch = useDispatch()
    const HandleOnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        settododetail((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }
    const HandleSubmit = async () => {
        if (tododetail.title.length == 0) {
            toast.error(`Title is mandatory field`, {
                position: "top-right"
            })
            return;
        }
        if (tododetail.status == "Not Selected") {
            toast.error(`Status is mandatory field`, {
                position: "top-right"
            })
            return;
        }
        try {
            setIsloading(true)
            const { data } = await axios.post("/api/add-data", tododetail);
            if (!data.status) {
                toast.error(`Task couldn't be added`, {
                    richColors: true,
                    closeButton: true,
                    duration: 1000
                })
            }
            dispatch(addTask(data.data))
            toast.success(`Task added successfully`, {
                richColors: true,
                closeButton: true,
                duration: 1000
            })
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.message, {
                    richColors: true,
                    closeButton: true,
                    duration: 1000
                })
            }
            toast.error("Something went wrong", {
                richColors: true,
                closeButton: true,
                duration: 1000
            })
        } finally {
            setIsloading(false)
        }
    }
    return (
        <React.Fragment>


            <div className="w-full flex flex-col gap-7">
                <input type="text" name="title" id="title" className="w-full text-5xl font-semibold text-[#CCCCCC] ps-1 focus:outline-[#CCCCCC]" placeholder="Title" onChange={HandleOnChange} />
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
                            <SelectTrigger className="w-[180px]" defaultValue={tododetail.status} >
                                <SelectValue placeholder={tododetail.status.split("_").join(" ")} defaultValue={tododetail.status} />
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
                        <Select name='priority' onValueChange={(priority) => {
                            settododetail((prev) => {
                                return {
                                    ...prev, priority: priority
                                }
                            })
                        }}>
                            <SelectTrigger className="w-[180px]" >
                                <SelectValue placeholder={tododetail.priority} />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectItem value="low">Low</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="urgent">Urgent</SelectItem>
                            </SelectContent>
                        </Select>
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
                <Button onClick={HandleSubmit}>{
                    isloading ? "Submitting..." : "Submit"}</Button>
                <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
        </React.Fragment>
    )
}

export default DrawerBody

function dispatch(arg0: { payload: any; type: "app/addTodoTask" }) {
    throw new Error('Function not implemented.')
}
