import { Header, saira } from "@/components/header/header";
import { HomePageContainer, Link, NavContainer, NavWrapper } from "./home-page.style";
import { useStore } from "@/hooks/useStore";

const NavLinks = [
    {title: "Todos os Produtos", category: "all"},
    {title: "Camisetas", category: "t-shirts"},
    {title: "Canecas", category: "mugs"},
]

export function HomePage(){
    const { typeLink, handleSetTypeLink } = useStore()
    return(
        <>
            <Header />
            <HomePageContainer>
                <NavContainer className={saira.className}>
                    <NavWrapper>
                        {
                            NavLinks.map((option) => {
                                return (
                                    <Link
                                        key={option.category}
                                        isActive={option.category === typeLink ? typeLink : ''}
                                        onClick={() => handleSetTypeLink(option.category)}
                                    >
                                        {option.title}
                                    </Link>
                                )
                            })
                        }
                    </NavWrapper>
                </NavContainer>
            </HomePageContainer>
        </>
    )
}
