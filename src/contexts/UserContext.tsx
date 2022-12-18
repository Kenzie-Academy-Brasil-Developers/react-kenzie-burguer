import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { api } from "../services/api";

export interface iProvidersChildrenProps {
    children: React.ReactNode;
}

export interface iProductsList {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

interface iUserContextValue {
    productsList: iProductsList[];
    getAllProducts: () => void; 
    login: (body: iLoginPostBody) => void;
}

export interface iLoginPostBody {
    email: string;
    password: string;
}

export const UserContext = createContext({} as iUserContextValue)

export function UserProvider ({ children } : iProvidersChildrenProps) {
    const [ productsList, setProductsList ] = useState([] as iProductsList[])
    const navigate = useNavigate()
    
    async function login (body: iLoginPostBody) {
        try {
            const response = await api.post('login', body)
            
            localStorage.setItem('userToken', response.data.accessToken)
            toast.success('Login efetuado');
            
            setTimeout(() => {
                navigate('/menu')
            }, 2000)

            
        } catch (error) {
            console.log(error.response.data);
            
        }
    }
    
    async function getAllProducts () {
        try {
            const userToken = localStorage.getItem('userToken')
            api.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
            const response = await api.get('products')

            setProductsList(response.data)

        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <UserContext.Provider value={{ getAllProducts, productsList, login }}>
            {children}
        </UserContext.Provider>
    )
}