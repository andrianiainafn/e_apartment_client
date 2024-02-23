import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useCreateApartment} from "@/app/dashboard/apartment/_hooks/use_create_apartment";

interface IFormInput{
    design:string
    rent:number
}
interface Props {
    HandleClick:()=>void
}
const CreateApartmentForm = (props:Props) => {
    const {mutate,isSuccess} = useCreateApartment()
    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting}
    } = useForm<IFormInput>()
    const onSubmit:SubmitHandler<IFormInput> = async (data)=>{
        mutate(data)
        if (isSuccess){
            console.log("success")
        }
    }
    return (
        <form className='flex flex-col space-y-3 w-full'  onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='design'>Design</label>
                <input type='text'  placeholder='Ex: Write the unit test'
                       className='outline-none p-2 input ' {...register("design",{required:true})} />
                {errors.design && <span className='text-red-600'> This field is required</span>}
            </div>
            <div className="grid w-full  items-center gap-1.5">
                <label htmlFor='rent'>Rent</label>
                <input type='text'  placeholder='Ex: 10000'
                       className='outline-none p-2 input ' {...register("rent",{required:true})} />
                {errors.rent && <span className='text-red-600'> This field is required</span>}
            </div>
            <button type='submit' className='bg-[#D3A286] w-full text-white py-3'>
                Create task
            </button>
            <button type='reset' onClick={props.HandleClick}  className='bg-[#F2F2F2] w-full text-[#0F172A] py-3'>
                Cancel
            </button>
        </form>
    );
};

export default CreateApartmentForm;