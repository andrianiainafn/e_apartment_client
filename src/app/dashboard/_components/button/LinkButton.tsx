'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props{
    href:string
    icon: React.ReactNode
    label:string
}

const LinkButton = (props:Props) => {
    const {icon,href,label} = props
    const pathname = usePathname()
    return (
        <div className={`flex flex-col items-center ${pathname == href ? "text-[#CE7951] text-white":""}`}>
            {icon}
            <Link href={href} >{label}</Link>
        </div>
    );
};

export default LinkButton;