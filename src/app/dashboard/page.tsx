import React from 'react';
import ApartmentTableOverview from "@/app/dashboard/_components/table/apartment_table";
import {BarChartHero} from "@/app/dashboard/_components/chart/bar_chart";

const Page = () => {
    return (
        <div className='flex space-x-12'>
            <div className='flex flex-col flex-[35%]' >
                <ApartmentTableOverview/>
            </div>
            <div className='flex flex-col flex-[30%]'>
                <BarChartHero/>
            </div>
        </div>
    );
};

export default Page;