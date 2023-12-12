import { BagWrapper, HeaderContainer, HeaderWrapper, Input, InputContainer } from "./header.style";
import { Saira_Stencil_One } from 'next/font/google'
import { Saira } from 'next/font/google' 
import { GlassIcon } from "../glass-icon";
import { BagIcon } from "../bag-icon";
import { useRouter } from "next/router";

export const saira_stencil = Saira_Stencil_One({ preload: false, weight: '400', })
export const saira = Saira({ preload: false, weight: '400', })

export function Header(){
    const router = useRouter()
    const handleClickRedirect = (value: string) => {
        router.push(value)
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
                        placeholder="Procurando por algo específico?"
                        className={saira.className}/>
                    <GlassIcon />
                </InputContainer>
                <BagWrapper onClick={() => handleClickRedirect('/cart')}>
                    <BagIcon value='#737380'/>
                    <p className={saira.className}>0</p>
                </BagWrapper>
            </HeaderWrapper>
        </HeaderContainer>
    )
}