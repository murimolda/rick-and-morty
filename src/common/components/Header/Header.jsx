import logo from "../../../assets/img/logo.png"
import { NavLink } from "react-router"
import s from "./Header.module.css"

export const Header = () => {
  return (
    <header className={s.container}>
      <nav>
        <NavLink to={"/"}><img src={logo} alt="logotype" /></NavLink>
        <NavLink to={"/"} className={({ isActive }) => isActive ? `${s.headerLink} ${s.active}` : s.headerLink
  }>Home</NavLink>
        <NavLink to={"/characters"} className={({ isActive }) => isActive ? `${s.headerLink} ${s.active}` : s.headerLink
  }>Characters</NavLink>
        <NavLink to={"/locations"} className={({ isActive }) => isActive ? `${s.headerLink} ${s.active}` : s.headerLink
  }>Locations</NavLink>
        <NavLink to={"/episodes"} className={({ isActive }) => isActive ? `${s.headerLink} ${s.active}` : s.headerLink
  }>Episodes</NavLink>
      </nav>
    </header>
  )
}