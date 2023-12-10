/* eslint-disable prettier/prettier */
import { HeaderContainer } from "./style"
import logoIgnite from "../../assets/ignit-logo.svg"

import { Timer, Scroll } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoIgnite} alt="" />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="Historico">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}