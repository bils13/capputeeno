import { Header } from "@/components/header/header";
import { Button, Card, CardInfoWrapper, CartContainer, CartList, CartResume, Description, Links, PriceResume, QuantitySelect, TotalItems, UnitPrice, Wrapper, WrapperCart } from "./cart.style";
import BackPage from "@/components/back-pag/back-page";
import { BinIcon } from "@/components/bin-icon";
import { Line } from "@/pages/homepage/partials/card/card.style";
import { ProductInCart } from "@/interfaces/product";
import { getPriceInReal } from "@/utils/price-in-real";
import { saira } from "@/utils/fonts";
import { useCart } from "@/hooks/useCart";

export default function Cart(){

    const { carts, 
            handleDeleteItem, 
            changeItemsQuantity,
            cartPrice } = useCart()
    

    const listItemQuantity = (id: string) => {
        const newCart = carts.find((cart) => cart.id === id)
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
       <>
            <Header />
            <CartContainer className={saira.className}>
                <BackPage />
                <WrapperCart>
                    <CartList>
                        <h1>Seu carrinho</h1>
                        <TotalItems>Total ({carts.length} produto{carts.length>1 ? 's': ''}) <span>{cartPrice ? `R$ ${cartPrice}` : ''}</span></TotalItems>
                        {
                        carts.map((item: ProductInCart) => (
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
                            <PriceResume>R$ {cartPrice}</PriceResume>
                        </Wrapper>
                        <Wrapper margin='margin' alignItems='alignItems'>
                            <PriceResume>Entrega</PriceResume>
                            <PriceResume>R$ 40,00</PriceResume>
                        </Wrapper>
                        <Line />
                        <Wrapper alignItems='alignItems'>
                            <PriceResume bold='bold'>Total</PriceResume>
                            <PriceResume bold='bold'>R$ {cartPrice && parseFloat(cartPrice?.replace(',','.')) + 40}</PriceResume>
                        </Wrapper>
                        <Button>Finalizar a compra</Button>
                        <Wrapper direction='column'>
                            <Links>Ajuda</Links>
                            <Links>Reembolso</Links>
                            <Links>Entregas e frete</Links>
                            <Links margin='null'>Trocas e devoluções</Links>
                        </Wrapper>
                    </CartResume>
                </WrapperCart>
            </CartContainer>
        </>
    )
}