import { Header, saira } from "@/components/header/header";
import { Button, Card, CardInfoWrapper, CartContainer, CartList, CartResume, Description, Links, PriceResume, QuantitySelect, TotalItems, UnitPrice, Wrapper } from "./cart.style";
import BackPage from "@/components/back-pag/back-page";
import { BinIcon } from "@/components/bin-icon";
import { Line } from "@/components/card/card.style";
import CartContextProvider from "@/context/cartContext";
import { ProductInCart } from "@/interfaces/product";
import { getPriceInReal } from "@/utils/price-in-real";
import { useEffect, useState } from "react";

type CartPriceType = string
type ItemQuantityType = number[]

export default function Cart(){
    const [cart, setCart] = useState<ProductInCart[]>([])
    const [cartPrice, setCartPrice] = useState<CartPriceType>()
    useEffect(() => {
        const cartItems = localStorage.getItem('cart-items')
        cartItems != null && setCart(JSON.parse(cartItems))       
        attTotalCartPrice(JSON.parse(cartItems!)) 
    }, [])

    function handleDeleteItem(id: string){
        const cartItems = [...cart]  
        const indexItem = cartItems.findIndex((current: ProductInCart)  => current.id === id)
        cartItems.splice(indexItem, 1)
        setCart([...cartItems])
        localStorage.setItem('cart-items', JSON.stringify(cartItems))
        attTotalCartPrice(cartItems)
    }

    const attTotalCartPrice = (cart: ProductInCart[]) => {
        const totalPrice = cart.reduce((total, produto) => {
            return parseInt(produto.price_in_cents) * produto.quantity + total
        }, 0)
        setCartPrice(() => getPriceInReal(totalPrice))
    }

    const changeItemsQuantity = (id: string, quantitySelected: string) => {     
        cart.map((current) => 
            current.id===id ? current.quantity = parseInt(quantitySelected) : ''
        )
        setCart([...cart])
        localStorage.setItem('cart-items', JSON.stringify(cart))
    }

    const listItemQuantity = (id: string) => {
        const newCart = cart.find((cart) => cart.id === id)
        const newQuantity = []
        for(let i=1; i<=newCart!.quantity+2; i++){
            newQuantity.push(i)
        }    
        return (
            newQuantity.map((quantity: number) => (
                <option key={quantity} selected={newCart?.quantity===quantity ? true : false}>{quantity}</option>
            )) 
        )
    }
    

    return(
        <CartContextProvider>
            <Header />
            <CartContainer className={saira.className}>
                <BackPage />
                <Wrapper>
                    <CartList>
                        <h1>Seu carrinho</h1>
                        <TotalItems>Total ({cart.length} produto{cart.length>1 ? 's': ''}) <span>{cartPrice ? `R$ ${cartPrice}` : ''}</span></TotalItems>
                        {
                            
                        cart.map((item: ProductInCart) => (
                            <Card key={item.id}>
                                <img src={item.image_url} alt={item.name} />
                                <CardInfoWrapper>
                                    <h2>
                                        {item.name}
                                        <span onClick={() => handleDeleteItem(item.id)}><BinIcon /></span>
                                    </h2>
                                    <Description>{item.description}</Description>
                                    <Wrapper alignItems='alignItems'>
                                        <QuantitySelect onChange={(e) => changeItemsQuantity(item.id, e.target.value)}>
                                            { listItemQuantity(item.id) } 
                                        </QuantitySelect>
                                        <UnitPrice>R$ {getPriceInReal(parseInt(item.price_in_cents) * item.quantity)}</UnitPrice>
                                    </Wrapper>
                                </CardInfoWrapper>
                            </Card>
                        ))
                        }
                    </CartList>
                    <CartResume>
                        <h2>Resumo do pedido</h2>
                        <Wrapper>
                            <PriceResume>Subtotal de produtos:</PriceResume>
                            <PriceResume>R$ 161,00</PriceResume>
                        </Wrapper>
                        <Wrapper margin='margin' alignItems='alignItems'>
                            <PriceResume>Entrega</PriceResume>
                            <PriceResume>R$ 40,00</PriceResume>
                        </Wrapper>
                        <Line />
                        <Wrapper alignItems='alignItems'>
                            <PriceResume bold='bold'>Total</PriceResume>
                            <PriceResume bold='bold'>R$ 200,00</PriceResume>
                        </Wrapper>
                        <Button>Finalizar a compra</Button>
                        <Wrapper direction='column'>
                            <Links>Ajuda</Links>
                            <Links>Reembolso</Links>
                            <Links>Entregas e frete</Links>
                            <Links margin='null'>Trocas e devoluções</Links>
                        </Wrapper>
                    </CartResume>
                </Wrapper>
            </CartContainer>
        </CartContextProvider>
    )
}