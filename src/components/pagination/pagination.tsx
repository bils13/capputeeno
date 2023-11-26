import { useStore } from "@/hooks/useStore";
import { PContainer, Page } from "./pagination.style";

const Pages = [
    {'option': 1, 'id':1},
    {'option': 2, 'id':2},
    {'option': 3, 'id':3},
    {'option': 4, 'id':4},
    {'option': 5, 'id':5},
]

export function Pagination(){

    const { pagination, handleSetPagination } = useStore()

    return(
        <PContainer>
            {
                Pages.map(page => {
                    return(
                        <Page
                            key={page.id}
                            isActive={page.option === pagination ? page.option : ''}
                            onClick={() => handleSetPagination(page.option)}
                        >
                            {page.option}
                        </Page>
                    )
                }) 
                    
            }
        </PContainer>
    )
}