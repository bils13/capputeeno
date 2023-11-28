import { Card } from "../card/card";
import { CardsContainer } from "./cartd.style";
import { useProduct } from "@/hooks/useProduct";

export function Cards(){
    const { data } = useProduct()
    return(
        <CardsContainer>
            <Card />
        </CardsContainer>
    )
}