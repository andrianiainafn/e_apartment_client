'use client'
import React from 'react';
import ButtonDelete from "@/app/dashboard/_components/button/button_delete";
import ButtonEdit from "@/app/dashboard/_components/button/button_edit";
interface Props{
    design:string
    rent:number
}

const ApartmentRowOverview = (props:Props) => {
    const {design,rent}=props
    return (
        <tr className='text-center h-[6vh] '>
            <td>
                {design}
            </td>
            <td>
                {rent}
            </td>
            <td className=' flex justify-center mt-2'>
                {
                    rent < 1000 && (
                        <div className='bg-[#0EB83D7D] bg-opacity-20 rounded-full font-light w-20 text-sm py-1 '>
                            Bas
                        </div>
                    )
                }
                {
                    (rent >= 1000 && rent <= 5000) && (
                        <div className='bg-[#FEC138] bg-opacity-20 rounded-full font-light w-20 text-sm py-1 '>
                            moyen
                        </div>
                    )
                }
                {
                    ( rent > 5000) && (
                        <div className='bg-[#FF0E0E57] bg-opacity-20 rounded-full font-light w-20 text-sm py-1 '>
                            eleve
                        </div>
                    )
                }
            </td>
        </tr>

    );
};

export default ApartmentRowOverview;