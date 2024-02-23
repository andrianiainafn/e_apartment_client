import React from 'react';
import ApartmentTable from "@/app/dashboard/_components/apartment_table";
import {BarChartHero} from "@/app/dashboard/_components/bar_chart";

const Page = () => {
    return (
        <div className='flex space-x-12'>
            <div className='flex flex-col flex-[35%]' >
                <ApartmentTable/>
            </div>
            <div className='flex flex-col flex-[30%]'>
                <BarChartHero/>
            </div>
        </div>
    );
};

export default Page;