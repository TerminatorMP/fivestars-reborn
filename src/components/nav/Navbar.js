import { Container } from "@mui/system"
import { AppBar, Box, Link, Toolbar } from "@mui/material"
import IconMenu from "../../icon/IconMenu"
import NavLinks from "./NavLinks"
import Image from "next/image"


export default function Navbar({position = "static"}) {
  return (
    <nav id="nav">
      <AppBar position={position} sx={{
        backgroundColor: "text.primary",
        color: "background.main",
      }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Link href="/" underline="none" color="text">
              <Image src="/banner.webp" alt="FiveStars Reborn" width="200" height="50" />
            </Link>
            <Box sx={{flexGrow: 1}}/>
            <NavLinks />
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  )
}