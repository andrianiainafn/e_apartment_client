import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MdOutlineStarOutline } from "react-icons/md";

const TopBar = () => {
    return (
        <div className='flex space-x-2 items-start'>
            <Avatar className='w-14 h-14'>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className='flex flex-col space-y-1'>
                <h2 className='font-semibold text-xl'>
                    Sakura Airi
                </h2>
                <p>@Admin</p>
            </div>
            <div className='bg-[#CE7951] m-2 rounded-full px-2 py-1 flex space-x-1 items-center'>
                <MdOutlineStarOutline/>
                <p className='text-sm'>Pro user</p>
            </div>
        </div>
    );
};

export default TopBar;