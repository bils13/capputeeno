import StoreContextProvider from "@/context/storeContext";
import { HomePage } from "./homepage/home-page";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import CartContextProvider, { CartContext } from "@/context/cartContext";

const client = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={client}>
      <StoreContextProvider>
        <CartContextProvider>
          <HomePage />
        </CartContextProvider>
      </StoreContextProvider>
    </QueryClientProvider>
  )
}
