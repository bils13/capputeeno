import { useStore } from "@/hooks/useStore"
import { Link, LinkWrapper } from "./filter-by-type.style"

const NavLinks = [
    {title: "Todos os Produtos", category: "all"},
    {title: "Camisetas", category: "t-shirts"},
    {title: "Canecas", category: "mugs"},
]

export function FilterByType(){
    const { typeLink, handleSetTypeLink } = useStore()
    return(
            <LinkWrapper>
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
            </LinkWrapper>
    )
}