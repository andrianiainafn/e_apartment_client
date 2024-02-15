import {httpClient} from "@/_lib/axios";
import {APARTMENT_ENDPOINT} from "@/app/dashboard/apartment/_constant/endpoint";
import {IApartment} from "@/app/dashboard/apartment/_constant/type";

class ApartmentService{
    public getApartmentById(apartmentId:string){
        return httpClient.get(`${apartmentId}/${APARTMENT_ENDPOINT.GET_ALL}`)
    }
    public getAllApartment(){
        return httpClient.get(APARTMENT_ENDPOINT.GET_ALL)
    }
    public createApartment(apartment:Partial<IApartment>){
        return httpClient.post(APARTMENT_ENDPOINT.CREATE,apartment)
    }
    public editApartment(apartment:Partial<IApartment>,apartmentId:string){
        return httpClient.put(`${apartmentId}/${APARTMENT_ENDPOINT.UPDATE}`,apartment)
    }
    public deleteApartmentById(apartmentId:string){
        return httpClient.delete(`${apartmentId}/${APARTMENT_ENDPOINT.DELETE_BY_ID}`)
    }
    public  deleteApartments(apartmentsId:string[]){
        const deleteApartmentRequest = apartmentsId.map(id =>{
            return httpClient.delete(`${id}/${APARTMENT_ENDPOINT.DELETE_BY_ID}`)
        })
        return deleteApartmentRequest
    }

}
export const apartmentService = new ApartmentService()