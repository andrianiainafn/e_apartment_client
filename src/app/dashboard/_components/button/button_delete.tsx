import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

interface Props{
    HandleClick: ()=>void
}
const ButtonDelete = (props:Props) => {
    return (
        <button onClick={props.HandleClick} className=' border border-red-600 text-red-600 text-sm rounded-xl h-[4vh] w-[6vw] justify-center  flex space-x-1 items-center' >
            <p>Delete</p>
            <MdDeleteOutline className='text-red-600 text-xl'/>
        </button>
    );
};

export default ButtonDelete;