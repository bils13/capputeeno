import { Header } from "@/components/header/header"
import { ProductContainer } from "./product.style"
import { ProductDetails } from "@/pages/product/partials/product-details/product-details"
import BackPage from "@/components/back-pag/back-page"
import { saira } from "@/utils/fonts"

export default function Product(){
    return(
        <>
            <Header />  
            <ProductContainer className={saira.className}>
                <BackPage />
                <ProductDetails />
            </ProductContainer>
        </>
    )
}