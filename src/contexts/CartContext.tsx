import { createContext, useContext, useState } from "react";
import { iProductsCart, iProductsList, iProvidersChildrenProps, UserContext } from "./UserContext";

interface iCartProviderValue {
    isCartModalOpen: boolean;
    setIsCartModalOpen: (state: boolean) => void;
    addProductCart: (item: iProductsCart) => void;
    subProductCart: (item: iProductsCart) => void;
}

export const CartContext = createContext({} as iCartProviderValue)

export function CartProvider ({ children } : iProvidersChildrenProps) {
    const [ isCartModalOpen, setIsCartModalOpen ] = useState(false)
    const { productsCartList, setProductsCartList } = useContext(UserContext)
    
    function addProductCart (item : iProductsCart) {
        const productIndex = productsCartList.findIndex((element) => element.id === item?.id)
        
        if (productIndex === -1) {
            setProductsCartList([...productsCartList, {...item, units: 1}])

        } else {
            const handleProductsCart = productsCartList.splice(productIndex, 1)
            handleProductsCart[0].units! += 1
            setProductsCartList([...productsCartList, handleProductsCart[0]])
        }
    }

    function subProductCart (item : iProductsCart) {
        const productIndex = productsCartList.findIndex((element) => element.id === item?.id)
        
        
        if (item.units! < 2) {
            productsCartList.splice(productIndex, 1)
            setProductsCartList([...productsCartList])
            
        } else {
            const handleProductsCart = productsCartList.splice(productIndex, 1)
            handleProductsCart[0].units! -= 1
            setProductsCartList([...productsCartList, handleProductsCart[0]])
        }
    }
    
    return (
        <CartContext.Provider value={{ isCartModalOpen, setIsCartModalOpen, addProductCart, subProductCart }}>
            {children}
        </CartContext.Provider>
    )
}