import {useQuery} from "react-query";
import {apartmentService} from "@/app/dashboard/apartment/_service/apartment.service";

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