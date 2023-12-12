import { useRouter } from "next/router";
import { ReturnIcon } from "../return-icon";
import { IconWrapper } from "./back-page.style";

export default function BackPage(){
    const router = useRouter()
    const handleClickRedirect = () => {
        router.back()
    }
    return(
        <IconWrapper onClick={handleClickRedirect}>
            <ReturnIcon />
            <p>Voltar</p>
        </IconWrapper>
    )
}