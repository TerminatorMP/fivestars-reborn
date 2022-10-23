import { Typography, Box } from "@mui/material"
import { Container } from "@mui/system"
import Heading from "../../src/components/Heading"
import InConstruction from "../../src/components/InConstruction"
import Navbar from "../../src/components/nav/Navbar"
import IconConstruction from "../../src/icon/IconConstruction"


export default function Site() {
  return(
    <>
      <Navbar />
      <Container maxWidth="md">

        <InConstruction />

      </Container>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}