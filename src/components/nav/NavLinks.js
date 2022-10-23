import { Toolbar } from "@mui/material"
import NavLink from "./NavLink"
import NavMenu from "./NavMenu"



export default function NavLinks() {
  return (
    <Toolbar>
      <NavMenu />
      <NavLink link="/bughunt" text="Bughunt" />
    </Toolbar>
  )
}