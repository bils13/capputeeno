import { Header, saira } from "@/components/header/header";
import { HomePageContainer, NavContainer, Organize } from "./home-page.style";
import { ArrowIcon } from "@/components/arrow-icon";
import { FilterByType } from "@/components/filter-by-type/filter-by-type";

export function HomePage(){
    return(
        <>
            <Header />
            <HomePageContainer className={saira.className}>
                <NavContainer>
                <FilterByType />
                <Organize>
                    <p>Organizar por </p>
                    <ArrowIcon />
                </Organize>
                </NavContainer>
            </HomePageContainer>
        </>
    )
}
