import React, {useState} from 'react';
import ButtonDelete from "@/app/dashboard/_components/button/button_delete";
import ButtonEdit from "@/app/dashboard/_components/button/button_edit";
import DeleteApartmentModal from "@/app/dashboard/apartment/_components/modal/delete_apartment_modal";

interface Props{
    design:string
    numApp:string
    rent:number
    HandleClickEdit:()=>void

}
const ApartmentRow = (props:Props) => {
    const {design,numApp,rent} = props
    const[isDelete,setIsDelete] = useState(false)
    const HandleClickDelete = ()=>{
        setIsDelete(ancien=>!ancien)
    }
    return (
        <>
        {
            isDelete && (
            <DeleteApartmentModal HandleClick={HandleClickDelete} numApp={numApp}/>
        )
        }

        <tr className='text-center h-[6vh] border-b-dark-tremor-content border-b-[0.2px] border-opacity-20 '>
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
            <td className=''>
               <div className='flex space-x-2 justify-center'>
                   <ButtonEdit HandleClickEdit={props.HandleClickEdit} numApp={numApp}/>
                   <ButtonDelete HandleClick={HandleClickDelete}/>
               </div>
            </td>
        </tr>
        </>
    );
};

export default ApartmentRow;