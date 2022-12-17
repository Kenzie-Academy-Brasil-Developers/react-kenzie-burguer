import React, { createContext, useState } from "react";
import { api } from "../services/api";

export interface iProvidersChildrenProps {
    children: React.ReactNode;
}

interface iProductsList {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

export const UserContext = createContext({})

export function UserProvider ({ children } : iProvidersChildrenProps) {
    const [ productsList, setProductsList ] = useState([] as iProductsList[])
    
    async function getAllProducts () {
        try {
            // const userToken = JSON.parse(localStorage.getItem('userToken'))
            api.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGdtYWlsLmNvbSIsImlhdCI6MTY3MTMwNzU5NiwiZXhwIjoxNjcxMzExMTk2LCJzdWIiOiIxIn0.DwRsRVUIbaaJtMDE036-N8HJLvyfIlvTyFs4NOfMgB4";
            const response = await api.get('products')

            setProductsList(response.data)

        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <UserContext.Provider value={{ getAllProducts, productsList }}>
            {children}
        </UserContext.Provider>
    )
}