import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProductFetchResponse } from "@/interfaces/product-props";

const getFieldByPopularity = (value: any) => {
    if (value === 'minor_price') return {field: "price_in_cents", order: "ASC"}
    if (value === 'biggest_price') return {field: "price_in_cents", order: "DSC"}
    if (value === 'news') return {field: "created_at", order: "ASC"}
}


const fetchData = (currentPage: number, typeLink: string, popularity: any): AxiosPromise<ProductFetchResponse> => {
    let query
    if(popularity!=undefined){
        query = `    
                query{
                    allProducts(page: ${currentPage-1}, perPage: 7 ${typeLink==="all" ? '' : ',filter: { category: "' + typeLink + '" }'}, sortField: "${popularity.field}", sortOrder: "${popularity.order}"){
                        id
                        name
                        price_in_cents
                        image_url
                        category
                        sales
                    }
                }`
        console.log(query)
    }else {
        if(typeLink==='all'){
            query = `    
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
        } else {
            query = `    
                query{
                    allProducts(page: ${currentPage-1}, perPage: 5, filter: { category: "${typeLink}" }){
                        id
                        name
                        price_in_cents
                        image_url
                        category
                        sales
                    }
                }`
        }
    }

    const response = axios({
        method: 'post',
        url: "http://localhost:3333/",
            data: { query },
        })
    return response
}

export function useProduct(currentPage: number, typeLink: string, popularity?: string) {
    const query = useQuery({
        queryFn: () => fetchData(currentPage, typeLink, getFieldByPopularity(popularity)),
        queryKey: ['product-data', typeLink, currentPage, popularity]
    })
    return {
        ...query,
        data: query.data?.data.data.allProducts
    }
}
