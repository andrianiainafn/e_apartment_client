import React from 'react';
import { MdHome } from "react-icons/md";
import LinkButton from "@/app/dashboard/_components/button/LinkButton";
import {navigationLink} from "@/app/dashboard/_constant/link";

const Navigation = () => {
    return (
        <div className='flex flex-col space-y-6 p-3'>
            {navigationLink.map((value,key)=>(
                <LinkButton key={key} href={value.hrf} icon={value.icon} label={value.label}/>
            ))
            }
        </div>
    );
};

export default Navigation;