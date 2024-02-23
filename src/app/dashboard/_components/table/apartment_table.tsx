import React from 'react';


import Link from "next/link";
import ApartmentRowOverview from "@/app/dashboard/_components/table/apartment_row_overview";
import ApartmentTableHeaderOverview from "@/app/dashboard/_components/table/apartment_table_header_overview";

const ApartmentTableOverview = () => {
    return (
        <div className='flex w-full flex-col space-y-2'>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-lg'>
                    Apartment
                </h2>
                <Link href='/dashboard/apartment' className='text-[#D3A286] underline'>view all</Link>
            </div>
            <table >
                <ApartmentTableHeaderOverview/>
                <tbody  >
                    <ApartmentRowOverview/>
                    <ApartmentRowOverview/>
                    <ApartmentRowOverview/>
                </tbody>
            </table>
        </div>
    );
};

export default ApartmentTableOverview;