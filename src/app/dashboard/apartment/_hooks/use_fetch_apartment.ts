import {useQuery} from "react-query";
import {apartmentService} from "@/app/dashboard/apartment/_service/apartment.service";
import {queryClient} from "@/_lib/query_clients";

export const useFetchApartment= ()=>{
    return useQuery(
        {
            queryKey: ['apartments'],
            queryFn:()=>apartmentService.getAllApartment()
        }
    )
}
export const useFetchApartmentDetails = (apartmentId: string)=>{
    return useQuery(
        {
            queryKey: ['apartment',apartmentId],
            queryFn:()=>apartmentService.getApartmentById(apartmentId)
        }
    )
}

export const useFetchApartmentStat = ()=>{
    return useQuery(
        {
         queryKey:['apartment','stat'],
         queryFn:()=>apartmentService.getStatForChart()
        })
}

export  const useFetchRecentApartment=()=>{
    return useQuery(
        {
            queryKey:['apartment','recent'],
            queryFn:()=>apartmentService.getRecentApartment()
        }
    )
}