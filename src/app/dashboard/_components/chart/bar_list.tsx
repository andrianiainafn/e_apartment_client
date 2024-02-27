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
        <>
            <BarList data={dataChart}   className="mx-auto max-w-sm"/>
        </>
    )
};