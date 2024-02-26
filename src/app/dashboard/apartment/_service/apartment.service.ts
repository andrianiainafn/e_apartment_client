import {httpClient} from "@/_lib/axios";
import {APARTMENT_ENDPOINT} from "@/app/dashboard/apartment/_constant/endpoint";
import {IApartment} from "@/app/dashboard/apartment/_constant/type";

class ApartmentService{
    public getApartmentById(apartmentId:string){
        return httpClient.get(`apartments/${apartmentId}`)
    }
    public getAllApartment(){
        return httpClient.get(APARTMENT_ENDPOINT.GET_ALL)
    }
    public createApartment(apartment:Partial<IApartment>){
        return httpClient.post(APARTMENT_ENDPOINT.CREATE,apartment)
    }
    public editApartment(apartment:Partial<IApartment>,apartmentId:string){
        return httpClient.put(`apartments/${apartmentId}`,apartment)
    }
    public deleteApartmentById(apartmentId:string){
        return httpClient.delete(`apartments/${apartmentId}`)
    }
    public  deleteApartments(apartmentsId:string[]){
        const deleteApartmentRequest = apartmentsId.map(id =>{
            return httpClient.delete(`apartments/${id}`)
        })
        return deleteApartmentRequest
    }
    public getStatForChart(){
        return httpClient.get('/stat/apartment')
    }
    public getRecentApartment(){
        return httpClient.get('/apartments?size=4')
    }
}
export const apartmentService = new ApartmentService()