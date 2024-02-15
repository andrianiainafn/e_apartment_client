import {useMutation, useQueryClient} from "react-query";
import {IApartment} from "@/app/dashboard/apartment/_constant/type";
import {apartmentService} from "@/app/dashboard/apartment/_service/apartment.service";

export const useUpdateApartment = (apartmentId:string) =>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (apartment: Partial<IApartment>) => apartmentService.editApartment(apartment, apartmentId),
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                predicate: (query) => {
                    console.log(query.queryKey);
                    return query.queryKey[0] === "apartment"
                }
            })
        }
    })
}
