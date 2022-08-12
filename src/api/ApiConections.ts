import axios from "axios";
import { LoginBody } from "../pages/Login";

import { userBody } from "../pages/RegisterUser";
import BASE_URL from "./BaseURL"

export type AddressBody = {
    number:string
    street:string
    district:string
    city:string
    uf:string
}
const token:any = localStorage.getItem("token")

async function createUser(user:userBody){
    const result = await axios.post(`${BASE_URL}/user`, user)
    return result
}

async function login(data:LoginBody){
    return await axios.post(`${BASE_URL}/login`, data)
}

function getUserName(){
    return axios.get(`${BASE_URL}/get-user-name`, {
        headers:{
            authorization:`Bearer ${token}`
        }
    })
}

function getAddress(){
    return axios.get(`${BASE_URL}/address`, {
        headers:{
            authorization:`Bearer ${token}`
        }
    })
}

function newAddress(data:AddressBody){
    return axios.post(`${BASE_URL}/address`, 
        data,
        {
            headers:{
                authorization:`Bearer ${token}`
            }
        }
    )
}

function listSpecialties(){
    return axios.get(`${BASE_URL}/specialties`, {
        headers:{
            authorization:`Bearer ${token}`
        }
    })
}

const api = {
    createUser,
    login,
    getUserName,
    getAddress,
    newAddress,
    listSpecialties
}
export default api