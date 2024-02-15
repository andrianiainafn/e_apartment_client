import {useMutation, useQueryClient} from "react-query";
import {apartmentService} from "@/app/dashboard/apartment/_service/apartment.service";

// export const useDeleteApartments = () =>{
//     const queryClient = useQueryClient()
//     return useMutation(
//         {
//             mutationKey:['deletes'],
//             mutationFn:(apartmentsId:string[])=> apartmentService.deleteApartments(apartmentsId),
//             onSuccess: async () =>{
//                 await queryClient.invalidateQueries(["apartments",])
//                 await queryClient.resetQueries(["apartments"])
//             }
//         }
//     )
// }
export const useDeleteApartment = () =>{
    const queryClient = useQueryClient()
    return useMutation(
        {
            mutationKey:['delete'],
            mutationFn:(apartmentsId:string)=> apartmentService.deleteApartmentById(apartmentsId),
            onSuccess: async () =>{
                await queryClient.invalidateQueries(["apartments",])
                await queryClient.resetQueries(["apartments"])
            }
        }
    )
}