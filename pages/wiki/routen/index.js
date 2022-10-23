import { Typography, Box, Accordion, AccordionSummary, AccordionDetails, Divider } from "@mui/material"
import { Container } from "@mui/system"
import InConstruction from "../../../src/components/InConstruction"
import Navbar from "../../../src/components/nav/Navbar"
import IconExpand from "../../../src/icon/IconExpand"
import IconAttention from "../../../src/icon/IconAttention"


const Route = ({label, url}) => {
  return (
    <Accordion my={2}>
      <AccordionSummary
        expandIcon={<IconExpand />}
      >
        <Typography sx={{fontSize:"1.2rem", color:"text.secondary"}}>{label}</Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <img src={url} alt="Routen Beschreiung" width={"100%"} height={"200px"} />
      </AccordionDetails>
    </Accordion>
  )
}

export default function Site() {
  return(
    <>
      <Navbar />
      <Container maxWidth="md" sx={{paddingBottom:"2rem"}}>

        <Typography mt={4} mb={2} variant="h4">
          Farm Routen
        </Typography>
        <Typography mb={2}>
          Hier findest du alle Schritte die zu einer Farm Route gehören.
        </Typography>

        <Route label="Metall" url="/route_metall.drawio.svg" />
        <Route label="Stahl" url="/route_stahl.drawio.svg" />
        <Route label="Stoff" url="/route_stoff.drawio.svg" />
        <Route label="Holz / Kohle" url="/route_kohle.drawio.svg" />
        <Route label="Öl / Benzin" url="/route_benzin.drawio.svg" />
        <Route label="Uran" url="/route_uran.drawio.svg" />
        <Route label="Waffe" url="/route_waffe.drawio.svg" />
        <Route label="Schutzweste" url="/route_schutzweste.drawio.svg" />

        <Typography color={"secondary.main"} mt={4} sx={{display: "flex", alignItems: "center"}}>
          <IconAttention /> Zum herstellen von markierten Materiallien wird eine Lizenz benötigt.
        </Typography>

      </Container>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}