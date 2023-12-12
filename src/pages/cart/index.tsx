import { Header, saira } from "@/components/header/header";
import { Button, Card, CardInfoWrapper, CartContainer, CartList, CartResume, Description, Links, PriceResume, QuantitySelect, TotalItems, UnitPrice, Wrapper } from "./cart.style";
import BackPage from "@/components/back-pag/back-page";
import { BinIcon } from "@/components/bin-icon";
import { Line } from "@/components/card/card.style";
import CartContextProvider from "@/context/cartContext";
import { useReadLocalStorage } from 'usehooks-ts'
import { ProductInCart } from "@/interfaces/product";
import { getPriceInReal } from "@/utils/price-in-real";


export default function Cart(){
    const cart = useReadLocalStorage<ProductInCart[]>('cart-items')
    return(
        <CartContextProvider>
            <Header />
            <CartContainer className={saira.className}>
                <BackPage />
                <Wrapper>
                    <CartList>
                        <h1>Seu carrinho</h1>
                        <TotalItems>Total (3 produtos) <span>R$ 161,00</span></TotalItems>
                        {
                        cart?.map((item: ProductInCart) => (
                            <Card>
                            <img src={item.image_url} alt={item.name} />
                            <CardInfoWrapper>
                                <h2>
                                    {item.name}
                                    <span><BinIcon /></span>
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