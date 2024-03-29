'use client'
import React from 'react';
import Link from "next/link";
import ApartmentRowOverview from "@/app/dashboard/_components/table/apartment_row_overview";
import ApartmentTableHeaderOverview from "@/app/dashboard/_components/table/apartment_table_header_overview";
import {useFetchRecentApartment} from "@/app/dashboard/apartment/_hooks/use_fetch_apartment";
import {IApartment} from "@/app/dashboard/apartment/_constant/type";

const ApartmentTableOverview = () => {
    const{data,isSuccess}=useFetchRecentApartment()
    return (
        <div className='flex w-full flex-col space-y-2'>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-lg'>
                    Apartment
                </h2>
                <Link href='/dashboard/apartment' className='text-[#CFA061] underline'>view all</Link>
            </div>
            <table >
                <ApartmentTableHeaderOverview/>
                <tbody  >
                {
                    data?.data._embedded.apartments.map((value:Partial<IApartment>,key:number)=>(
                        <ApartmentRowOverview key={key} design={value.design!}  rent={value.rent!}/>
                    ))
                }
                </tbody>
            </table>
        </div>
    );
};

export default ApartmentTableOverview;