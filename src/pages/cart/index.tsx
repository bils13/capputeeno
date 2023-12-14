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

export default function Cart(){
    const [cart, setCart] = useState<ProductInCart[]>([])
    const [cartPrice, setCartPrice] = useState<CartPriceType>()
    useEffect(() => {
        const cartItems = localStorage.getItem('cart-items')
        cartItems != null && setCart(JSON.parse(cartItems))       
        attTotalCartPrice(JSON.parse(cartItems!)) 
    }, [])

    function handleDeleteItem(id: string){
        const cartItems = localStorage.getItem('cart-items')
        if (cartItems) { 
            const cartItemsObj = JSON.parse(cartItems)  
            const indexItem = cartItemsObj.findIndex((current: ProductInCart)  => current.id === id)
            cartItemsObj.splice(indexItem, 1)
            setCart([...cartItemsObj])
            localStorage.setItem('cart-items', JSON.stringify(cartItemsObj))
            attTotalCartPrice(cartItemsObj)
        }
    }

    const attTotalCartPrice = (cart: ProductInCart[]) => {
        const totalPrice = cart.reduce((total, produto) => {
            return parseInt(produto.price_in_cents) * produto.quantity + total
        }, 0)
        setCartPrice(() => getPriceInReal(totalPrice))
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
                                    <QuantitySelect>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </QuantitySelect>
                                    <UnitPrice>R$ {getPriceInReal(item.price_in_cents)}</UnitPrice>
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