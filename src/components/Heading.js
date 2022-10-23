import { Typography } from "@mui/material"

export default function Heading({title}) {
  return (
    <Typography 
      variant="h3" 
      mt={4} 
      fontWeight={800}
    >
        {title}
    </Typography>
  )
}