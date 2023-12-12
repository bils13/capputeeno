import { ProductFetchResponse } from "@/interfaces/product-props"
import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"

const fetchData = (id: string): AxiosPromise<ProductFetchResponse> => {
    const query = `
        query{
            Product(id: "${id}"){
                name
                description
                image_url
                price_in_cents
            }
        }
    `
    const response = axios({
        method: 'post',
        url: 'http://localhost:3333/',
        data: { query }
    })
    return response
}

export function useProduct(id: any){
    const query = useQuery({
        queryFn: () => fetchData(id),
        queryKey: ['product-data-id', id],
    })
    return {
        ...query,
        data: query.data?.data.data.Product
    }
}

