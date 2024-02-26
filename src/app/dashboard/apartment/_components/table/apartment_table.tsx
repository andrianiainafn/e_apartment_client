'use client'
import React, {useState} from 'react';
import ApartmentTableHeader from "@/app/dashboard/apartment/_components/table/apartment_table_header";
import ApartmentRow from "@/app/dashboard/apartment/_components/table/apartment_row";
import AddApartment from "@/app/dashboard/apartment/_components/button/add_apartment";
import CreateApartmentModal from "@/app/dashboard/apartment/_components/modal/create_apartment_modal";
import {useFetchApartment} from "@/app/dashboard/apartment/_hooks/use_fetch_apartment";
import {IApartment} from "@/app/dashboard/apartment/_constant/type";
import {EditApartmentModal} from "@/app/dashboard/apartment/_components/modal/edit_apartment_modal";
import DeleteApartmentModal from "@/app/dashboard/apartment/_components/modal/delete_apartment_modal";


const ApartmentTable = () => {
    const [isCreate,setIsCreate] = useState(false)
    const{isSuccess,data} = useFetchApartment()
    const[isEdit,setIsEdit] = useState(false)
    const[isDelete,setIsDelete] = useState(false)
    const HandleClick = ()=>{
        setIsCreate(ancien=>!ancien)
    }
    const HandleClickEdit = ()=>{
        setIsEdit(ancien=>!ancien)
    }
    const HandleClickDelete = ()=>{
        setIsDelete(ancien=>!ancien)
    }
    return (
        <>
            {
                isCreate && (
                    <CreateApartmentModal HandleClick={HandleClick}/>
                )
            }
            {
                isEdit && (
                    <EditApartmentModal HandleClick={HandleClickEdit}/>
                )
            }
            <div className='flex w-full flex-col space-y-2'>
                <div className='flex justify-between'>
                    <h2 className='font-semibold text-lg'>
                        Apartment List
                    </h2>
                    <div>
                        <AddApartment HandleClick={HandleClick}/>
                    </div>
                </div>
                <table >
                    <ApartmentTableHeader/>
                    <tbody  >
                    {
                        data?.data._embedded.apartments.map((value:Partial<IApartment>,key:number)=>(
                            <ApartmentRow key={key} design={value.design!} numApp={value.numApp!} rent={value.rent!} HandleClickEdit={HandleClickEdit}/>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ApartmentTable;