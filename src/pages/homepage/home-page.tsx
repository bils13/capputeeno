import { Header, saira } from "@/components/header/header";
import { HomePageContainer, NavContainer } from "./home-page.style";
import { FilterByType } from "@/components/filter-by-type/filter-by-type";
import { OrganizeByPref } from "@/components/org-by-preference/org-by-pref";
import { Pagination } from "@/components/pagination/pagination";

export function HomePage(){
    return(
        <>
            <Header />
            <HomePageContainer className={saira.className}>
                <NavContainer>
                    <FilterByType />
                    <OrganizeByPref />
                </NavContainer>
                <Pagination />
            </HomePageContainer>
        </>
    )
}
