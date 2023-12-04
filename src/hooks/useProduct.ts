import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProductFetchResponse } from "@/interfaces/product-props";

const fetchData = (currentPage: number): AxiosPromise<ProductFetchResponse> => {
    const query = `    
        query{
            allProducts(page: ${currentPage-1}, perPage: 12) {
                id
                name
                price_in_cents
                image_url
                category
                sales
            }
        }`
        // ${currentePage-1} == é necessário subtrair 1 inteiro pois a logica da paginação começa em 1 e no graphiql a variável (page) começa em 0
        

    const response = axios({
        method: 'post',
        url: "http://localhost:3333/",
            data: { query },
        })
    return response
}

export function useProduct(currentPage: number) {
    const query = useQuery({
        queryFn: () => fetchData(currentPage),
        queryKey: ['product-data', currentPage]
    })
    return {
        ...query,
        data: query.data?.data.data.allProducts
    }
}
