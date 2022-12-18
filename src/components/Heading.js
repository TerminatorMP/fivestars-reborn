import { Typography } from "@mui/material"

export default function Heading({title, sx}) {
  return (
    <Typography 
      variant="h3"
      fontWeight={800}
      sx={sx}
    >
        {title}
    </Typography>
  )
}