import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProductFetchResponse } from "@/interfaces/product-props";

export const query = `    
        query{
            allProducts {
                id
                name
                price_in_cents
                image_url
                category
                sales
            }
        }`

const fetchData = (): AxiosPromise<ProductFetchResponse> => {
    const response = axios({
        method: 'post',
        url: "http://localhost:3333/",
            data: { query },
        })
    return response
}

export function useProduct() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['product-data']
    })
    return {
        ...query,
        data: query.data?.data.data.allProducts
    }
}
