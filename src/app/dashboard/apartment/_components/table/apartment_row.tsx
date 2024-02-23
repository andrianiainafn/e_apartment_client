import React from 'react';
import ButtonDelete from "@/app/dashboard/_components/button/button_delete";
import ButtonEdit from "@/app/dashboard/_components/button/button_edit";

interface Props{
    design:string
    numApp:string
    rent:number

}
const ApartmentRow = (props:Props) => {
    return (
        <tr className='text-center h-[6vh] '>
            <td className='' >
                12
            </td>
            <td>
                Test design
            </td>
            <td>
                200000
            </td>
            <td className=' flex justify-center mt-2'>
                <div className='bg-[#FEC138] bg-opacity-20 rounded-full font-light w-20 text-sm py-1 '>
                    moyen
                </div>
            </td>
            <td className=''>
               <div className='flex space-x-2 justify-center'>
                   <ButtonEdit/>
                   <ButtonDelete/>
               </div>
            </td>
        </tr>

    );
};

export default ApartmentRow;