import { createContext, ReactNode, useState } from "react";

export type linkOptionProps = string

interface ContextProps {
    handleSetTypeLink: (value: linkOptionProps) => void
    typeLink: linkOptionProps
}

interface StoreContextProviderProps {
    children: ReactNode,
}

export const StoreContext = createContext({} as ContextProps);

function StoreContextProvider({ children }: StoreContextProviderProps) {

    const [typeLink, setTypeLink] = useState<linkOptionProps>('all')
    
    function handleSetTypeLink(value: linkOptionProps) {
        setTypeLink(value)
    }

    return(
        <StoreContext.Provider value={{
            handleSetTypeLink,
            typeLink
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider