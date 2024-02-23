import { AiOutlineHome } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { BsHouseHeart } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
export const navigationLink = [
    {
        label:'Home',
        icon: <AiOutlineHome style={{width:22, height:22}}/>,
        hrf:'/dashboard'
    },
    {
        label:'Renter',
        icon: <IoPeopleOutline style={{width:22, height:22}}/>,
        hrf:'/dashboard/renter'
    },
    {
        label:'Apartment',
        icon: <BsHouseHeart style={{width:22, height:22}}/>,
        hrf:'/dashboard/apartment'
    },
    {
        label:'Setting',
        icon: <IoSettingsOutline style={{width:22, height:22}}/>,
        hrf:'/setting'
    },
]