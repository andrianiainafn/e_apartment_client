import React from 'react';
import { MdOutlineEdit } from "react-icons/md";

const ButtonEdit = () => {
    return (
        <button className=' border border-[#D3A286] text-[#D3A286] text-sm rounded-xl h-[4vh] w-[6vw] justify-center flex space-x-1 items-center' >
            <p>Edit</p>
            <MdOutlineEdit className='text-xl'/>
        </button>
    );
};

export default ButtonEdit;