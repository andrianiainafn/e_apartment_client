'use client'
import { BarChart } from '@tremor/react';
import {useFetchApartmentStat} from "@/app/dashboard/apartment/_hooks/use_fetch_apartment";
import {useEffect, useState} from "react";


const dataFormatter = (number: number) =>
    Intl.NumberFormat('us').format(number).toString();
interface IData {
    name:string
    "Number of rent": number
}
export const BarChartHero = () => {
    const {isLoading,isSuccess,data} = useFetchApartmentStat()
    const [dataChart,setDataChart] = useState<IData[]>([])
    useEffect(()=>{
        if (isSuccess){
            console.log(data.data)
            setDataChart(prevState => [
                {
                    name:"minimal",
                    "Number of rent" :data.data.min
                },
                {
                    name:"maximal",
                    "Number of rent" :data.data.max
                },
                {
                    name:"total",
                    "Number of rent" :data.data.total
                },
            ])
        }
    },[isSuccess])
    return (
        <BarChart
            data={dataChart}
            index="name"
            categories={['Number of rent']}
            colors={['amber-700']}
            yAxisWidth={48}
            onValueChange={(v) => console.log(v)}
        />
    )
}