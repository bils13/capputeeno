import { createContext, ReactNode, useState } from "react";

export type linkOptionProps = string
export type PaginationProps = number

interface ContextProps {
    handleSetTypeLink: (value: linkOptionProps) => void,
    handleSetPagination: (value: PaginationProps) => void,
    typeLink: linkOptionProps,
    pagination: PaginationProps
}

interface StoreContextProviderProps {
    children: ReactNode,
}

export const StoreContext = createContext({} as ContextProps);

function StoreContextProvider({ children }: StoreContextProviderProps) {

    const [typeLink, setTypeLink] = useState<linkOptionProps>('all')
    const [pagination, setPagination] = useState<PaginationProps>(1)
    
    function handleSetTypeLink(value: linkOptionProps) {
        setTypeLink(value)
        setPagination(1)
    }

    function handleSetPagination(value: PaginationProps) {
        setPagination(value)
    }

    return(
        <StoreContext.Provider value={{
            handleSetTypeLink,
            handleSetPagination,
            typeLink,
            pagination,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider