import { useProducts } from "@/hooks/useProducts";
import { Card } from "../card/card";
import { CardsContainer } from "./cartd.style";
import { ProductProps } from "@/interfaces/product";
import { useStore } from "@/hooks/useStore";

export function Cards(){
    const { pagination, typeLink, popularity } = useStore()
    const { data } = useProducts(pagination, typeLink, popularity);
    return(
        <CardsContainer>
            {
            data?.map((data: ProductProps) => ( 
                <Card 
                    key={data.id}
                    name={data.name}
                    id={data.id}
                    price_in_cents={data.price_in_cents}
                    category={data.category}
                    image_url={data.image_url}
                    sales={data.sales}
                    />
                    
            ))
            }
        </CardsContainer>
    )
}


