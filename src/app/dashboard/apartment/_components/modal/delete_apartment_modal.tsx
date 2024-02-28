import React from 'react';
import {Hanalei} from "next/dist/compiled/@next/font/dist/google";
import {useDeleteApartment} from "@/app/dashboard/apartment/_hooks/use_delete_apartment";
import {MdOutlineClose} from "react-icons/md";
import {EditApartmentForm} from "@/app/dashboard/apartment/form/edit_apartment_form";

interface Props{
    numApp:string
    HandleClick:()=>void
}

const DeleteApartmentModal = (props:Props) => {
    const {mutate} = useDeleteApartment()
    const HandleClickDelete = ()=>{
        mutate(props.numApp)
    }
    return (
        <div onClick={props.HandleClick} className='overlay-d bg-black bg-opacity-50'>
                <div className='central-d flex flex-col p-3 space-y-3' onClick={(e)=>e.stopPropagation()}>
                    <div className='flex justify-end w-full '>
                        <button onClick={props.HandleClick}>
                            <MdOutlineClose className='text-xl'/>
                        </button>
                    </div>
                    <h3 className='text-xl font-semibold '>Do you want to realy delete it ?</h3>
                    <div className='flex justify-between space-x-3'>
                        <button onClick={HandleClickDelete} className='bg-[#D3A286] w-[30%] text-white py-3'>
                            Delete
                        </button>
                        <button type='reset' onClick={props.HandleClick}  className='bg-[#F2F2F2] w-[30%] text-[#0F172A] py-3'>
                            Cancel
                        </button>
                    </div>
            </div>

        </div>
    );
};

export default DeleteApartmentModal;