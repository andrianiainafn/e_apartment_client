import React from 'react';
import CreateApartmentForm from "@/app/dashboard/apartment/form/create_apartment_form";
import {MdOutlineClose} from "react-icons/md";
interface Props{
    HandleClick:()=>void
}
const CreateApartmentModal = (props :Props) => {
    return (
        <div className='overlay' onClick={props.HandleClick}>
            <div className='central flex flex-col p-3' onClick={(e)=>e.stopPropagation()}>
                <div className='flex justify-end w-full '>
                    <button onClick={props.HandleClick}>
                        <MdOutlineClose className='text-xl'/>
                    </button>
                </div>
                <h3 className='text-xl font-semibold '>Create Apartment</h3>
                <CreateApartmentForm HandleClick={props.HandleClick}/>
            </div>
        </div>
    );
};

export default CreateApartmentModal;