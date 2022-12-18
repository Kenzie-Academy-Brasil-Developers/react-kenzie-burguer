import { log } from "console";
import React, { createContext, useEffect, useState } from "react";
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

interface iLoginPostBody {
    email: string;
    password: string;
}

export const UserContext = createContext({} as iUserContextValue)

export function UserProvider ({ children } : iProvidersChildrenProps) {
    const [ productsList, setProductsList ] = useState([] as iProductsList[])
    
    async function login (body: iLoginPostBody) {
        try {
            const response = api.post('login', body)

            console.log(response);
            
            // localStorage.setItem('userToken', )
            
        } catch (error) {
            console.log(error);
            
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