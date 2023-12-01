import StoreContextProvider from "@/context/storeContext";
import { HomePage } from "./homepage/home-page";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={client}>
      <StoreContextProvider>
        <HomePage />
      </StoreContextProvider>
    </QueryClientProvider>
  )
}
