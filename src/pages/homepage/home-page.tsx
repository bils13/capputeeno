import { Header, saira } from "@/components/header/header";
import { HomePageContainer, Link, NavContainer, NavWrapper, Organize } from "./home-page.style";
import { useStore } from "@/hooks/useStore";
import { ArrowIcon } from "@/components/arrow-icon";

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
            <HomePageContainer className={saira.className}>
                <NavContainer>
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
                    <Organize>
                        <p>Organizar por </p>
                        <ArrowIcon />
                    </Organize>
                </NavContainer>
            </HomePageContainer>
        </>
    )
}
