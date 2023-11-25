import StoreContextProvider from "@/context/storeContext";
import { HomePage } from "./homepage/home-page";

export default function Home() {
  return (
    <StoreContextProvider>
      <HomePage />
    </StoreContextProvider>
  )
}
