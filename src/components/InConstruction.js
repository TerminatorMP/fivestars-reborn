import { Box, Typography } from "@mui/material"
import IconConstruction from "../icon/IconConstruction"

export default function InConstruction() {
  return (
    <Box sx={{
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <IconConstruction sx={{fontSize: "10rem"}} />
      <Typography align="center" variant="h2" mt={4} fontWeight={800} sx={{textTransform: "uppercase"}}>
        Wird gebaut...
      </Typography>
    </Box>
  )
}