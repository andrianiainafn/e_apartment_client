import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

const ButtonDelete = () => {
    return (
        <button className=' border border-red-600 text-red-600 text-sm rounded-xl h-[4vh] w-[6vw] justify-center  flex space-x-1 items-center' >
            <p>Delete</p>
            <MdDeleteOutline className='text-red-600 text-xl'/>
        </button>
    );
};

export default ButtonDelete;