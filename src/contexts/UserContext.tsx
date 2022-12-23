import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { api } from "../services/api";
import { AxiosError } from "axios";

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

export interface iProductsCart{
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    units?: number;
}

interface iUserProviderValue {
    isSearchActivated: boolean;
    productsList: iProductsList[];
    filteredProducts: iProductsList[];
    loadingLogin: boolean;
    loadingRegister: boolean;
    productsCartList: iProductsCart[];
    setIsSearchActivated: (statement: boolean) => void; 
    getAllProducts: () => void; 
    setFilteredProducts: (product: iProductsCart[]) => void
    loginUser: (body: iPostRequestBody) => void;
    registerUser: (body: iPostRequestBody) => void;
    navigate: (to: string) => void;
    setProductsCartList: (product: iProductsCart[]) => void;
}

export interface iPostRequestBody {
    name?: string;
    email: string;
    password: string;
}

interface iCatchError {
    error: string;
}

export const UserContext = createContext({} as iUserProviderValue)

export function UserProvider ({ children } : iProvidersChildrenProps) {
    const [ isSearchActivated, setIsSearchActivated ] = useState(false)
    const [ productsList, setProductsList ] = useState([] as iProductsList[])
    const [filteredProducts, setFilteredProducts] = useState([] as iProductsList[])
    const [ loadingLogin, setLoadingLogin ] = useState(false)
    const [ loadingRegister, setLoadingRegister ] = useState(false)
    const [ productsCartList, setProductsCartList ] = useState([] as iProductsCart[])
    const navigate = useNavigate()
    
    async function loginUser (body: iPostRequestBody) {
        try {
            setLoadingLogin(true)
            const response = await api.post('login', body)
            
            localStorage.setItem('userToken', response.data.accessToken)
            toast.success('Login efetuado');
            
            setTimeout(() => {
                navigate('/menu')
            }, 1500)

            
        } catch (error) {
            setLoadingLogin(true)
            const Error = error as AxiosError<iCatchError>
            toast.error("Email ou senha incorreta")

        } finally {
            setLoadingLogin(false)
        }
    }
    
    async function registerUser (body: iPostRequestBody) {
        try {
            setLoadingRegister(true)
            const response = await api.post('users', body)
            toast.success('Cadastro Realizado')

            localStorage.setItem('userToken', response.data.accessToken)
            
            setTimeout(() => {
                navigate('/menu')
            }, 1500)
            
        } catch (error) {
            setLoadingRegister(true)
            const Error = error as AxiosError
            
            
            if (Error.response?.data === "Email already exists") {
                toast.error("Este email já existe")
            }
        } finally {
            setLoadingRegister(false)
        }
    }
    
    async function getAllProducts () {
        try {
            const userToken = localStorage.getItem('userToken')
            api.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
            const response = await api.get('products')

            if (filteredProducts.length === 0) {
                setProductsList(response.data)

            } else {
                setProductsList(filteredProducts)

            }

        } catch (error) {
            navigate('/')
        }
    }
    
    return (
        <UserContext.Provider value={{ isSearchActivated, setIsSearchActivated, getAllProducts, productsList, loadingLogin, loginUser, registerUser, loadingRegister, navigate, productsCartList, setProductsCartList, filteredProducts, setFilteredProducts }}>
            {children}
        </UserContext.Provider>
    )
}