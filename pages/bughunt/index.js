import { Table, Typography, TableContainer, Paper, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { Box, Container } from "@mui/system";
import Head from "next/head";
import Navbar from "../../src/components/nav/Navbar";
import Heading from "../../src/components/Heading";
import IconAttention from "../../src/icon/IconAttention";


export default function Index({rows}) {
  return (
    <div>
      <Head>
        <title>FiveStars Reborn</title>
        <meta name="description" content="Finde Bugs und werde belohnt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Container maxWidth="md">
          <Heading title="Bug Hunt" />
          <Box sx={{ mt: 4, mb: 4 }}>
            
            <Typography variant="body1" sx={{ mt: 2 }}>
              Hilf uns bei der Suche nach Bugs. 
              Wenn du einen findest, kannst du ihn uns melden und bekommst dafür eine Belohnung.
            </Typography>

            <Typography variant="h4" sx={{ mt: 8 }}>
              Bug gefunden?
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Dann melde ihn uns. Wir werden uns dann umgehend darum kümmern.
              <br/><br/>
              Gehe einfach in den Discord und erstelle ein Ticket in dem Channel <b>#ticket-erstellen</b>.
              <br/>
              Gib uns eine kurze Beschreibung und wann / wo der Bug auftritt.
            </Typography>

            <Typography variant="h4" sx={{ mt: 8, mb: 2 }}>
              Belohnungen
            </Typography>

            <Typography variant="body1" sx={{ mt: 2, mb: 2}}>
              Die Belohnungen sind gestaffelt nach Schweregrad des Bugs.
            </Typography>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Tier</TableCell>
                    <TableCell align="right">Belohnung</TableCell>
                    <TableCell align="right">Beschreibung</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.tier}
                      </TableCell>
                      <TableCell align="right"><b>{row.belohnung}</b></TableCell>
                      <TableCell align="right">{row.beschreibung}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="caption">
              *Die Entscheidung in welches Tier ein Bug fällt, wird vom Support Team getroffen.
            </Typography>

            <Typography color={"secondary.main"} mt={4} sx={{display: "flex", alignItems: "center"}}>
              <IconAttention /> Die Belohnung für einen Bug bekommt nur der Spieler, der ihn als erstes gemeldet hat.
            </Typography>
          </Box>
        </Container>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  function createData(
    tier,
    belohnung,
    beschreibung,
  ) {
    return { tier, belohnung, beschreibung };
  }
  
  const rows = [
    createData('Tier 4', "bis 1.000", "Übersetzungsfehler, Grammatikfehler"),
    createData('Tier 3', "bis 10.000", "Fehler die, das Spiel leicht beeinträchtigen"),
    createData('Tier 2', "bis 100.000", "Fehler die das Spiel stark beeinträchtigen"),
    createData('Tier 1', "bis 300.000", "Game breaking Bugs --> Item Duplizierung, Unendlich Geld, etc.")
  ];

  return {
    props: {rows}, // will be passed to the page component as props
  }
}