import React from 'react';
import {MdOutlineClose} from "react-icons/md";
import {EditApartmentForm} from "@/app/dashboard/apartment/form/edit_apartment_form";
interface Props{

    HandleClick:()=>void
}
export const EditApartmentModal = (props :Props) => {
    return (
        <div className='overlay' onClick={props.HandleClick}>
            <div className='central flex flex-col p-3' onClick={(e)=>e.stopPropagation()}>
                <div className='flex justify-end w-full '>
                    <button onClick={props.HandleClick}>
                        <MdOutlineClose className='text-xl'/>
                    </button>
                </div>
                <h3 className='text-xl font-semibold '>Edit Task</h3>
                <EditApartmentForm HandleClick={props.HandleClick} />
            </div>
        </div>
    );
};