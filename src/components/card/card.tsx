import { getPriceInReal } from "@/utils/price-in-real";
import { CardWrapper, Image, Line, Price, TextWrapper } from "./card.style";
import { ProductProps } from "@/interfaces/product";


export function Card(props: ProductProps){
    return(
        <CardWrapper>
            <Image src={props.image_url} alt={props.name}/>
            <TextWrapper>
                <label>{props.name}</label>
                <Line />
                <Price>R$ {getPriceInReal(props.price_in_cents)}</Price>
            </TextWrapper>
        </CardWrapper>
    )
}