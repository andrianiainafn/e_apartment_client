import React from 'react';
import ApartmentTableHeader from "@/app/dashboard/_components/apartment_table_header";
import ApartmentRow from "@/app/dashboard/_components/apartment_row";
import Link from "next/link";

const ApartmentTable = () => {
    return (
        <div className='flex w-full flex-col space-y-2'>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-lg'>
                    Apartment
                </h2>
                <Link href='/' className='text-[#D3A286] underline'>view all</Link>
            </div>
            <table >
                <ApartmentTableHeader/>
                <tbody  >
                    <ApartmentRow/>
                    <ApartmentRow/>
                    <ApartmentRow/>
                </tbody>
            </table>
        </div>
    );
};

export default ApartmentTable;