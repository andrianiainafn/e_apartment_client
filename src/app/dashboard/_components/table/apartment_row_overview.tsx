import React from 'react';
import ButtonDelete from "@/app/dashboard/_components/button/button_delete";
import ButtonEdit from "@/app/dashboard/_components/button/button_edit";


const ApartmentRowOverview = () => {
    return (
        <tr className='text-center h-[6vh] '>
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
            {/*<td className=''>*/}
            {/*   <div className='flex space-x-2'>*/}
            {/*       <ButtonEdit/>*/}
            {/*       <ButtonDelete/>*/}
            {/*   </div>*/}
            {/*</td>*/}
        </tr>

    );
};

export default ApartmentRowOverview;