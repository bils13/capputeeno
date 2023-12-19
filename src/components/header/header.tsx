import { BagWrapper, HeaderContainer, HeaderWrapper, Input, InputContainer } from "./header.style";
import { Saira_Stencil_One } from 'next/font/google'
import { Saira } from 'next/font/google' 
import { GlassIcon } from "../glass-icon";
import { BagIcon } from "../bag-icon";
import { useRouter } from "next/router";
import { useCart } from "@/hooks/useCart";
import { useStore } from "@/hooks/useStore";
import { ChangeEvent } from "react";

export const saira_stencil = Saira_Stencil_One({ preload: false, weight: '400', })
export const saira = Saira({ preload: false, weight: '400', })

export function Header(){
    const { handleSetSearch, search } = useStore()
    const { totalItems } = useCart()
    const router = useRouter()
    const handleClickRedirect = (value: string) => {
        router.push(value)
    } 
    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        handleSetSearch(e.target.value)
        console.log(search)
    }
    return(
        <HeaderContainer>
            <h1 
                onClick={() => handleClickRedirect('/')}
                className={saira_stencil.className}
                >capputeeno</h1>
            <HeaderWrapper>
                <InputContainer>
                    <Input 
                        onChange={(e)=>handleChangeSearch(e)}
                        placeholder="Procurando por algo específico?"
                        className={saira.className}/>
                    <GlassIcon />
                </InputContainer>
                <BagWrapper onClick={() => handleClickRedirect('/cart')}>
                    <BagIcon value='#737380'/>
                    <p className={saira.className}>{totalItems}</p>
                </BagWrapper>
            </HeaderWrapper>
        </HeaderContainer>
    )
}