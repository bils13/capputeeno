import { ProductProps } from "./product"

export interface ProductsFetchResponse {
    data: {
        allProducts: ProductProps[]
    }
    
}


export interface ProductFetchResponse {
    data: {
        Product: ProductProps
    }
}