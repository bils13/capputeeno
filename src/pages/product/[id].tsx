import { Header, saira } from "@/components/header/header"
import { ProductContainer } from "./product.style"
import { ProductDetails } from "@/components/product-details/product-details"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import BackPage from "@/components/back-pag/back-page"
import CartContextProvider from "@/context/cartContext"

const client = new QueryClient

export default function Product(){
    return(
        <QueryClientProvider client={client} contextSharing={true}>
            <CartContextProvider>
                <Header />  
                <ProductContainer className={saira.className}>
                    <BackPage />
                    <ProductDetails />
                </ProductContainer>
            </CartContextProvider>
        </QueryClientProvider>
    )
}