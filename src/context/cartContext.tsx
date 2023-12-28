import { ProductInCart, ProductProps } from "@/interfaces/product";
import { getPriceInReal } from "@/utils/price-in-real";
import { ReactNode, createContext, useEffect, useState } from "react";

interface CartContextProvider {
    children: ReactNode;
}

type CartPriceType = string

interface ContextProps {
    handleSetCart: (product?: ProductProps, id?: any) => void,
    handleDeleteItem: (id: string) => void,
    changeItemsQuantity: (id: string, quantitySelected: string) => void,
    totalItems: number
    carts: ProductInCart[]
    cartPrice?: CartPriceType,
}

export const CartContext = createContext({} as ContextProps)

function CartContextProvider({children}: CartContextProvider) {

    const [totalItems, setTotalItems] = useState(0)
    const [carts, setCarts] = useState<ProductInCart[]>([])
    const [cartPrice, setCartPrice] = useState<CartPriceType>()

    useEffect(() => {
        const cartItem = localStorage.getItem('cart-items') 
        if(cartItem) { 
            const currentCart = JSON.parse(cartItem)
            attTotalItems(currentCart)
            setCarts(currentCart)
            attTotalCartPrice(currentCart)
        }
    }, [])

    function handleSetCart(product?: ProductProps, id?: any){
        const cartItem = localStorage.getItem('cart-items') 
        if(cartItem){
            const prevCart = JSON.parse(cartItem)
            const indexItem = prevCart.findIndex((current: ProductInCart)  => current.id === id)
            if(indexItem >= 0){
                prevCart[indexItem].quantity += 1;
                localStorage.setItem('cart-items', JSON.stringify(prevCart))
                setCarts(prevCart)
                attTotalItems(prevCart)
            } else {
                const newItem = {...product, 'quantity': 1, 'id': id}
                prevCart.push(newItem)
                localStorage.setItem('cart-items', JSON.stringify(prevCart))
                setCarts(prevCart)
                attTotalItems(prevCart)
            }           
        }else {
            const newItem = [{...product, 'quantity': 1, 'id': id}]
            localStorage.setItem('cart-items', JSON.stringify(newItem))
        }
    }

    function handleDeleteItem(id: string){
        const cartItems = [...carts]  
        const indexItem = cartItems.findIndex((current: ProductInCart)  => current.id === id)
        cartItems.splice(indexItem, 1)
        setCarts([...cartItems])
        localStorage.setItem('cart-items', JSON.stringify(cartItems))
        attTotalCartPrice(cartItems)
        attTotalItems(cartItems)
    }

    const attTotalCartPrice = (cart: ProductInCart[]) => {
        const totalPrice = cart.reduce((total, produto) => {
            return parseInt(produto.price_in_cents) * produto.quantity + total
        }, 0)
        setCartPrice(() => getPriceInReal(totalPrice))
    }

    const attTotalItems = (currentCart: ProductInCart[]) => {
        const totalItem = currentCart.reduce((total: number, produto: ProductInCart) => {
            return produto.quantity + total
        }, 0)
        setTotalItems(totalItem)
    }

    const changeItemsQuantity = (id: string, quantitySelected: string) => {     
        carts.map((current) => 
            current.id===id ? current.quantity = parseInt(quantitySelected) : ''
        )
        setCarts([...carts])
        attTotalCartPrice(carts)
        localStorage.setItem('cart-items', JSON.stringify(carts))
        attTotalItems(carts)
        
    }

    return(
        <CartContext.Provider value={{
            handleSetCart, 
            handleDeleteItem,
            changeItemsQuantity,
            totalItems, 
            carts,
            cartPrice,
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider