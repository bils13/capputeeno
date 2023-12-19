import CartContextProvider from "./cartContext";
import StoreContextProvider from "./storeContext";

const GlobalContext = ({children}: any) => {
    return(
        <CartContextProvider>
            <StoreContextProvider>
                {children}
            </StoreContextProvider>
        </CartContextProvider>
    )
}

export default GlobalContext