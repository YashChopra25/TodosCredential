import SideMenu from "@/components/CustomComponents/SideMenu";
import { BadgeInfo, Clock, Plus, Search } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DrawerComponent from "@/components/CustomComponents/DrawerComponents/Drawer";
import { BannerTask, filterOption } from "@/lib/Menu";
import drawar from "@/../public/drawar.svg"
import TodoCard from "@/components/CustomComponents/TodoCard";

export default function Home() {
  return (
    <div className="flex w-auto min-h-screen ">
      <SideMenu />
      <div className="px-4 py-6 bg-[#DEDEDE] w-full flex flex-col gap-4">
        {/* Top Header  */}
        <div className=" flex justify-between items-center">
          <h1 className="text-5xl font-semibold">Good morning, Joe!</h1>
          <p className="flex gap-2 text-base">Help & feedback  <BadgeInfo /></p>
        </div>
        {/* Templates  */}
        <div className="grid grid-cols-3 gap-2">
          {
            BannerTask?.map((banner, index) => (
              <div className='bg-[#F3F3F3] flex w-full gap-2 rounded py-4' key={`${banner.imageurl}-${index}`}>
                <Image src={banner.imageurl} alt={banner.imageurl} className="aspect-square" />
                <div className='w-8/12 text-[#666666]'>
                  <h3 className='text-base font-semibold'>{banner.title}</h3>
                  <p className='text-sm'>{banner.description} </p>
                </div>
              </div>
            ))
          }
        </div>

        {/* Filter Bar  */}
        <div className="flex items-center justify-between">
          {/*search-box */}
          <form >
            <div className="relative">
              <input type="search" className="block w-full p-3 pe-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search" />
              <div className="absolute top-2 right-4 flex items-center pointer-events-none">
                <Search />
              </div>
            </div>
          </form>
          {/* filter-options  */}
          <div className="flex gap-4 items-center">

            {
              filterOption?.map((filter, index) => (
                <div className="text-[#797979] flex gap-3" key={`${filter.title}-${index}`} >
                  <p className="text-base ">{filter.title}</p>
                  {filter.icons}
                </div>
              ))
            }
            <DrawerComponent >
              <Button className="bg-[#2F2188] hover:bg-[#4C38C2]">Create new <span className='ms-2 bg-white rounded-full'><Plus color="#4C38C2" size={20} /></span></Button>
            </DrawerComponent>
          </div>
        </div>

        <div className="w-full h-full bg-white rounded-md grid grid-cols-4 p-4 gap-4">
          {/* To do */}
          <div className="flex flex-col gap-4">
            <div className="text-[#555555] flex items-center justify-between">
              <h1 className="text-xl">To do</h1>
              <Image src={drawar} alt="Drawar" />
            </div>
            <TodoCard />
            <div>
              <DrawerComponent statusSelected={"To do"} >
                <Button className="w-full text-[#E3E1E1] flex items-center justify-between ">Add new <span className='ms-2 rounded-full'><Plus color="#E3E1E1" size={20} /></span></Button>
              </DrawerComponent>
            </div>
          </div>
          {/* In progress  */}
          <div className="flex flex-col gap-4">
            <div className="text-[#555555] flex items-center justify-between">
              <h1 className="text-xl">In progress</h1>
              <Image src={drawar} alt="Drawar" />
            </div>{
              Array.from({ length: 2 }).map((_, index) => (
                <TodoCard />
              ))
            }
            <div>

              <DrawerComponent statusSelected={"To do"} >
                <Button className="w-full text-[#E3E1E1] flex items-center justify-between ">Add new <span className='ms-2 rounded-full'><Plus color="#E3E1E1" size={20} /></span></Button>
              </DrawerComponent>
            </div>
          </div>
          {/* Under Review  */}
          <div className="flex flex-col gap-4">
            <div className="text-[#555555] flex items-center justify-between">
              <h1 className="text-xl">Under Review</h1>
              <Image src={drawar} alt="Drawar" />
            </div>
            <TodoCard />
            <div>
              <DrawerComponent statusSelected={"To do"} >
                <Button className="w-full text-[#E3E1E1] flex items-center justify-between ">Add new <span className='ms-2 rounded-full'><Plus color="#E3E1E1" size={20} /></span></Button>
              </DrawerComponent>
            </div>
          </div>
          {/* Finished  */}
          <div className="flex flex-col gap-4">
            <div className="text-[#555555] flex items-center justify-between">
              <h1 className="text-xl">Finished</h1>
              <Image src={drawar} alt="Drawar" />
            </div>
            <TodoCard />
            <div>
              <DrawerComponent statusSelected={"To do"} >
                <Button className="w-full text-[#E3E1E1] flex items-center justify-between ">Add new <span className='ms-2 rounded-full'><Plus color="#E3E1E1" size={20} /></span></Button>
              </DrawerComponent>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}
