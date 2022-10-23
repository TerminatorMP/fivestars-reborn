import { Link } from "@mui/material"

export default function NavLink({link, text}) {
  return (
    <Link
      href={link} 
      underline="none" 
      color="background.default"
      sx={{
        margin: "0 1rem",
        fontSize: "1.2rem",
        fontWeight: "bold",
        '&:hover': {
          color: "primary.main",
        }
      }}
    >
      {text}
    </Link>
  )
}