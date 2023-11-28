import Image from "next/image";
import { CardWrapper, ImageWrapper, Line, Price, TextWrapper } from "./card.style";
import TShirt from "@/assets/tShirt.png"


export function Card(){
    return(
        <CardWrapper>
            <ImageWrapper>
                <Image src={TShirt} alt='Camiseta' fill={true}/>
            </ImageWrapper>
            <TextWrapper>
                <label>Caneca de cerâmica rústica</label>
                <Line />
                <Price>R$ 40,00</Price>
            </TextWrapper>
        </CardWrapper>
    )
}