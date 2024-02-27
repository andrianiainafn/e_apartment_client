import React from 'react';
import ApartmentTable from "@/app/dashboard/apartment/_components/table/apartment_table";
import {BarListHero} from "@/app/dashboard/_components/chart/bar_list";

const Page = () => {
    return (
        <div className='flex flex-col space-y-6'>
            <ApartmentTable/>
            <BarListHero/>
        </div>
    );
};

export default Page;