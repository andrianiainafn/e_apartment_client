'use client'
import React from 'react';
import { IoAddCircleOutline } from "react-icons/io5";

interface Props{
    HandleClick:()=>void
}
const AddApartment = (props:Props) => {
    return (
        <button onClick={props.HandleClick} className=' border border-[#CFA061] text-[#CFA061] text-sm rounded-xl h-[6vh] w-[10vw] justify-center flex space-x-1 items-center' >
            <p>New apartment</p>
            <IoAddCircleOutline className='text-xl'/>
        </button>
    );
};

export default AddApartment;