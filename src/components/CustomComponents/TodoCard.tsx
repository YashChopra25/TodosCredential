import { timeSince } from '@/lib/miscelleous';
import { format } from 'date-fns'
import { Clock } from 'lucide-react'
import React from 'react'

const TodoCard = ({ createdAt, date, id, description, priority, title }: { createdAt: string, date: string, id: string, description: string, priority: "low" | "medium" | "urgent", title: string }) => {
    const FormattedDate = format(date, "yyyy-MM-dd");
    const duration = timeSince(createdAt);
    const bgColorPeriority = priority == "low" ? "bg-[#0ECC5A]" : priority == "medium" ? "bg-[#FFA235]" : "bg-[#FF6B6B]"
    return (
        <div className="bg-[#DEDEDE] p-3 rounded-lg" draggable>
            <h1 className="text-[#606060] font-semibold">{title}</h1>
            <p className="text-sm font-medium text-[#606060]">{description}</p>
            <button className={`my-2 px-2 py-1 rounded-md text-xs text-[#FFFFFF] capitalize ${bgColorPeriority}`}>{priority}</button>
            <div className="flex gap-2 items-center"> <Clock color="#606060" size={20} />
                <span className=" text-[#606060]"> {FormattedDate}</span>
            </div>
            <span className="mt-7 text-[#606060]"> {duration}</span>
        </div>
    )
}

export default TodoCard