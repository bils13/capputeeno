import { ProductInCart, ProductProps } from "@/interfaces/product";
import { ReactNode, createContext, useEffect, useState } from "react";

interface CartContextProvider {
    children: ReactNode;
}

interface ContextProps {
    handleSetCart: (product?: ProductProps, id?: any) => void,
}

export const CartContext = createContext({} as ContextProps)

function CartContextProvider({children}: CartContextProvider) {

    function handleSetCart(product?: ProductProps, id?: any){
        const cartItem = localStorage.getItem('cart-items') 
        if(cartItem){
            const prevCart = JSON.parse(cartItem)
            const indexItem = prevCart.findIndex((current: ProductInCart)  => current.id === id)
            if(indexItem >= 0){
                prevCart[indexItem].quantity += 1;
                localStorage.setItem('cart-items', JSON.stringify(prevCart))
            } else {
                const newItem = {...product, 'quantity': 1, 'id': id}
                prevCart.push(newItem)
                localStorage.setItem('cart-items', JSON.stringify(prevCart))
            }           
        }else {
            const newItem = [{...product, 'quantity': 1, 'id': id}]
            localStorage.setItem('cart-items', JSON.stringify(newItem))
        }
    }




    return(
        <CartContext.Provider value={{handleSetCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider