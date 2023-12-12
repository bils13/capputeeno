import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProductsFetchResponse } from "@/interfaces/product-props";
import { getFieldByPopularity } from "@/utils/field-by-popularity";

const fetchData = (currentPage: number, typeLink: string, popularity: any): AxiosPromise<ProductsFetchResponse> => {
    let query
    let limitPerPage
    typeLink==="all" ? limitPerPage = 12 : limitPerPage = 7
    if(popularity!=undefined){
        query = `    
                query{
                    allProducts(page: ${currentPage-1}, perPage: ${limitPerPage} ${typeLink==="all" ? '' : ',filter: { category: "' + typeLink + '" }'}, sortField: "${popularity.field}", sortOrder: "${popularity.order}"){
                        id
                        name
                        price_in_cents
                        image_url
                        category
                        sales
                    }
                }`
    }else {
        query = `    
                query{
                    allProducts(page: ${currentPage-1}, perPage: ${limitPerPage} ${typeLink==="all" ? '' : ',filter: { category: "' + typeLink + '" }'}) {
                        id
                        name
                        price_in_cents
                        image_url
                        category
                        sales
                    }
                }`
    }

    const response = axios({
        method: 'post',
        url: "http://localhost:3333/",
            data: { query },
        })
    return response
}

export function useProducts(currentPage: number, typeLink: string, popularity?: string) {
    const query = useQuery({
        queryFn: () => fetchData(currentPage, typeLink, getFieldByPopularity(popularity)),
        queryKey: ['product-data', typeLink, currentPage, popularity]
    })
    return {
        ...query,
        data: query.data?.data.data.allProducts
    }
}
