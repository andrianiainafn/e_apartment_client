'use client'
import { BarList } from '@tremor/react';
import {useFetchApartmentStat} from "@/app/dashboard/apartment/_hooks/use_fetch_apartment";
import {useEffect, useState} from "react";


interface IData {
    name:string
    value: number
}
export const BarListHero = () => {
    const {isLoading,isSuccess,data} = useFetchApartmentStat()
    const [dataChart,setDataChart] = useState<IData[]>([])
    useEffect(()=>{
        if (isSuccess){
            setDataChart(prevState => [
                {
                    name:'Total rent',
                    value:data.data.total,

                },
                {
                    name:'Maximal rent',
                    value:data.data.max,

                },
                {
                    name:'Minimal rent',
                    value:data.data.min,
                }
            ])
        }
    },[isSuccess])
    return (
        <div className='flex flex-col space-y-3 w-[35%]'>
            <div className=' flex justify-end bg-[#CFA061] w-[5vw] h-[2px]'/>
            <div className='flex space-x-3'>
                    {dataChart.map((elem,key)=>(
                        <div key={key} className='flex flex-col space-y-3 rounded-lg text-[#5A5E65] bg-[#DDCBA6] p-2 w-[40%] h-[15vh]'>
                            <h3 className='font-semibold'>
                                {elem.name}
                            </h3>
                            <h2 className='flex justify-center items-center font-bold text-2xl'>
                                {elem.value}
                            </h2>
                        </div>
                    ))}
            </div>
        </div>
    )
};