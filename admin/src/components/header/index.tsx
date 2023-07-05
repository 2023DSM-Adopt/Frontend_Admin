import { Outlet } from "react-router-dom";
import * as _ from "./style";

export const Header = () => {
    return(
        <>
            <_.Background>
                <_.LogoFlex>
                    <_.Logo src="/assets/img/Logo.svg"/>
                </_.LogoFlex>
            </_.Background>
            <Outlet/>
        </>
    );
}