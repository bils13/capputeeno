import { createContext, ReactNode, useState } from "react";

export type linkOptionProps = string
export type PaginationProps = number
export type PopularityProps = string

interface ContextProps {
    handleSetTypeLink: (value: linkOptionProps) => void,
    handleSetPagination: (value: PaginationProps) => void,
    handleSetPopularity: (value: PopularityProps) => void, 
    typeLink: linkOptionProps,
    pagination: PaginationProps,
    popularity?: PopularityProps
}

interface StoreContextProviderProps {
    children: ReactNode,
}

export const StoreContext = createContext({} as ContextProps);

function StoreContextProvider({ children }: StoreContextProviderProps) {

    const [typeLink, setTypeLink] = useState<linkOptionProps>('all')
    const [pagination, setPagination] = useState<PaginationProps>(1)
    const [popularity, setPopularity] = useState<PopularityProps>()
    
    function handleSetTypeLink(value: linkOptionProps) {
        setTypeLink(value)
        setPagination(1)
        typeLink==='all' ? '' : setPopularity('') 
    }

    function handleSetPagination(value: PaginationProps) {
        setPagination(value)
    }

    function handleSetPopularity(value: PopularityProps) {
        setPopularity(value)
    }

    return(
        <StoreContext.Provider value={{
            handleSetTypeLink,
            handleSetPagination,
            handleSetPopularity,
            typeLink,
            pagination,
            popularity,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider