import { Button } from "@mui/material"
import { Box } from "@mui/system"
import IconDiscord from "../icon/IconDiscord"
import { useRef } from "react"
import Image from "next/image"


export default function Hero() {
  const linkRef = useRef(null)
  
  const handleJoin = () => {
    linkRef.current.click()
  }

  return (
    <Box component="div" sx={{
      width: "100%",
      height: "100vh",
      position: "relative",
    }}>
      <Image src="/hero_img.webp" alt="FiveStars Reborn" layout="fill" />
      <Button variant="outlined" sx={{
        position: "absolute",
        top: "90%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "1.8rem",
        padding: "1rem 3rem",
        textTransform: "none",
      }}
      onClick={handleJoin}
      endIcon={<IconDiscord style={{marginLeft:"0.5rem", width:'2rem', height: '2rem'}} />}
      >
        Discord
      </Button>
      <a style={{display: "none"}} ref={linkRef} href="https://discord.gg/gGHxxWV3yG" rel="noreferrer" target="_blank" />
    </Box>
  )
}