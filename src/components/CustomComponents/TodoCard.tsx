import { Clock } from 'lucide-react'
import React from 'react'

const TodoCard = () => {
    return (
        <div className="bg-[#DEDEDE] p-3 rounded-lg" draggable>
            <h1 className="text-[#606060] font-medium">Implement User Authentication</h1>
            <p className="text-sm font-medium text-[#606060]">Develop and integrate user authentication using email and password.</p>
            <button className="my-5 px-2 py-1 bg-red-500 rounded-md text-xs text-[#FFFFFF]">Urgent</button>
            <div className="flex gap-2 items-center"> <Clock color="#606060" size={20} />
                <span className=" text-[#606060]"> 2024-08-15</span>
            </div>
            <span className="mt-7 text-[#606060]"> 1hr ago</span>
        </div>
    )
}

export default TodoCard