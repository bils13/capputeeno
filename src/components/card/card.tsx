import { getPriceInReal } from "@/utils/price-in-real";
import { CardWrapper, Image, Line, Price, TextWrapper } from "./card.style";
import { ProductProps } from "@/interfaces/product";
import { useRouter } from "next/router";

export function Card(props: ProductProps){
    const router = useRouter()
    const handleClickRedirectProduct = (id: string) => {
        router.push(`/product/${id}`)
        console.log('fui clicado')
    }
    return(
        <CardWrapper onClick={() => handleClickRedirectProduct(props.id)}>
            <Image src={props.image_url} alt={props.name}/>
            <TextWrapper>
                <label>{props.name}</label>
                <Line />
                <Price>R$ {getPriceInReal(props.price_in_cents)}</Price>
            </TextWrapper>
        </CardWrapper>
    )
}