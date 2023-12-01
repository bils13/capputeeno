import { ProductProps } from "./product"

export interface ProductFetchResponse {
    data: {
        allProducts: ProductProps[]
    }
    
}
