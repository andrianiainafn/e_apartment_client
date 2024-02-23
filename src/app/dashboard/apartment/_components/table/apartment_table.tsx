'use client'
import React, {useState} from 'react';
import ApartmentTableHeader from "@/app/dashboard/apartment/_components/table/apartment_table_header";
import ApartmentRow from "@/app/dashboard/apartment/_components/table/apartment_row";
import AddApartment from "@/app/dashboard/apartment/_components/button/add_apartment";
import CreateApartmentModal from "@/app/dashboard/apartment/_components/modal/create_apartment_modal";
import {useFetchApartment} from "@/app/dashboard/apartment/_hooks/use_fetch_apartment";
import {IApartment} from "@/app/dashboard/apartment/_constant/type";

const ApartmentTable = () => {
    const [isCreate,setIsCreate] = useState(false)
    const{isSuccess,data} = useFetchApartment()
    if(isSuccess){
        console.log(data)
    }
    const HandleClick = ()=>{
        setIsCreate(ancien=>!ancien)
    }
    return (
        <>
            {
                isCreate && (
                    <CreateApartmentModal HandleClick={HandleClick}/>
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
                            <ApartmentRow key={key} design={value.design!} numApp={'23'} rent={value.rent!}/>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ApartmentTable;