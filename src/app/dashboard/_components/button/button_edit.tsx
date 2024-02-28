'use client'
import React from 'react';
import { MdOutlineEdit } from "react-icons/md";
import {useFetchApartmentDetails} from "@/app/dashboard/apartment/_hooks/use_fetch_apartment";
import {APARTMENT_ENDPOINT} from "@/app/dashboard/apartment/_constant/endpoint";
import {useApartmentDetails} from "@/state/global_state";

interface Props{
    HandleClickEdit:()=>void
    numApp:string
}

const ButtonEdit = (props:Props) => {
    const {isSuccess,data,isError} = useFetchApartmentDetails(props.numApp)
    const updateDesign = useApartmentDetails((state)=>state.updateDesign)
    const updateNumApp = useApartmentDetails((state)=>state.updateNumApp)
    const updateRent = useApartmentDetails((state)=>state.updateRent)
    const HandleClickEdit  = ()=>{
        if(isSuccess){
            updateDesign(data.data.design)
            updateRent(data.data.rent)
            updateNumApp(props.numApp)
            props.HandleClickEdit()
        }
    }
    return (
        <button onClick={HandleClickEdit} className=' border border-[#CFA061] text-[#CFA061] text-sm rounded-xl h-[4vh] w-[6vw] justify-center flex space-x-1 items-center' >
            <p>Edit</p>
            <MdOutlineEdit className='text-xl'/>
        </button>
    );
};

export default ButtonEdit;