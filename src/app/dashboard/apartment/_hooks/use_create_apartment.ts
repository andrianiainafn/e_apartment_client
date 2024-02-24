import {useMutation, useQuery, useQueryClient} from "react-query";
import {apartmentService} from "@/app/dashboard/apartment/_service/apartment.service";
import {IApartment} from "@/app/dashboard/apartment/_constant/type";

export const  useCreateApartment = () => {
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['create'],
            mutationFn:(apartment: Partial<IApartment>)=> apartmentService.createApartment(apartment),
            onSuccess: async ()=>{
                await queryClient.invalidateQueries(['apartments'])
                await queryClient.resetQueries(['apartments'])
            }
        }
    )
}