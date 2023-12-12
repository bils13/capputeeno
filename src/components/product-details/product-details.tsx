import { Button, DescriptionWrapper, Details, Freight, Image, Price, ProductContainerDetails } from "./product-details.style";
import { BagIcon } from "../bag-icon";
import { useProduct } from "@/hooks/useProduct";
import { useParams } from "next/navigation";
import { getPriceInReal } from "@/utils/price-in-real";
import { useCart } from "@/hooks/useCart";


export function ProductDetails() {
    const params = useParams()
    const { data } = useProduct(params.id)
    const { handleSetCart } = useCart()
    return (
        <ProductContainerDetails>
            <Image src={data?.image_url} />
            <Details>
                <label>Caneca</label>
                <h1>{data?.name}</h1>
                <Price>{"R$ " + getPriceInReal(data?.price_in_cents)}</Price>
                <Freight>*Frete de R$40,00 para todo o Brasil. Grátis para compras 
                acima de R$900,00.</Freight>
                <DescriptionWrapper>
                    <label>Descrição</label>
                    <p>{data?.description}</p>
                </DescriptionWrapper>
                <Button onClick={() => handleSetCart(data, params.id)}>
                    <BagIcon value='#FFFFFF'/>
                    Adicionar ao carrinho
                </Button>
            </Details>
        </ProductContainerDetails>
    )   
}