import React from 'react';

const ApartmentTableHeader = () => {
    return (
        <thead className='w-full h-[6vh]   rounded-lg text-left text-sm font-normal bg-[#fff] border-b border-[#eee] '>
            <tr className='text-center'>
                <th className='font-normal opacity-75'>
                    Design
                </th>
                <th className='font-normal opacity-75'>
                    Rent
                </th>
                <th className='font-normal opacity-75'>
                    Obs
                </th>
                <th className='font-normal opacity-75'>
                    Action
                </th>
            </tr>
        </thead>
    );
};

export default ApartmentTableHeader;