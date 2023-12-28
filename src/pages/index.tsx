import { Header } from "@/components/header/header";
import { FilterByType } from "@/pages/homepage/partials/filter-by-type/filter-by-type";
import { OrganizeByPref } from "@/pages/homepage/partials/org-by-preference/org-by-pref";
import { Pagination } from "@/pages/homepage/partials/pagination/pagination";
import { Cards } from "@/pages/homepage/partials/cards/cards";
import { HomePageContainer, NavContainer } from "./homepage/home-page.style";
import { saira } from "@/utils/fonts";

export default function Home() {
  return (
    <>
      <Header />
          <HomePageContainer className={saira.className}>
              <NavContainer>
                  <FilterByType />
                  <OrganizeByPref />
              </NavContainer>
              <Pagination />
              <Cards />
              <Pagination />
          </HomePageContainer>
    </>
  )
}
