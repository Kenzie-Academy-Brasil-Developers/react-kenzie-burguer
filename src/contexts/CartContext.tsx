import { createContext, useState } from "react";
import { iProvidersChildrenProps } from "./UserContext";

interface iCartProviderValue {
    isCartModalOpen: boolean;
    setIsCartModalOpen: (state: boolean) => void;
}

export const CartContext = createContext({} as iCartProviderValue)

export function CartProvider ({ children } : iProvidersChildrenProps) {
    const [ isCartModalOpen, setIsCartModalOpen ] = useState(false)
    
    return (
        <CartContext.Provider value={{ isCartModalOpen, setIsCartModalOpen }}>
            {children}
        </CartContext.Provider>
    )
}