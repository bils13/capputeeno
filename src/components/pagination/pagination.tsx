import { useStore } from "@/hooks/useStore";
import { ArrowContainer, ArrowWrapper, PContainer, Page } from "./pagination.style";
import { ArrowIcon } from "../arrow-icon";

const Pages = [
    {'option': 1, 'id':1},
    {'option': 2, 'id':2},
    {'option': 3, 'id':3},
    {'option': 4, 'id':4},
    {'option': 5, 'id':5},
]

export function Pagination(){

    const { pagination, handleSetPagination } = useStore()

    const handleClickArrow = (value: string) => {
        if(value==='less' && (pagination > 1 && pagination <=5 )){
            handleSetPagination(pagination - 1)
        }
        else if(value==='more' && (pagination >= 1 && pagination <5 )){
            handleSetPagination(pagination + 1)
        }
    }
    
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
            <ArrowContainer>
                <ArrowWrapper 
                    rotates='90'
                    onClick={() => handleClickArrow('less')}>
                    <ArrowIcon />
                </ArrowWrapper>
                <ArrowWrapper 
                    rotates='270'
                    onClick={() => handleClickArrow('more')}>
                    <ArrowIcon />
                </ArrowWrapper>
            </ArrowContainer>
        </PContainer>
    )
}