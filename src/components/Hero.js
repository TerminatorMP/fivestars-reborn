import { Button } from "@mui/material"
import { Box } from "@mui/system"
import IconDiscord from "../icon/IconDiscord"
import { useRef } from "react"
import Image from "next/image"
import ArrowBounce from "./ArraowBounce/ArrowBounce"


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
      <Box component="div" sx={{
        position: "absolute",
        top:"50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "60%"
      }}>
        <Image src="/hero_heading.png" alt="FiveStars Reborn" width="800px" height="300px" />
        <Button variant="outlined" sx={{
          display: "inline-box",
          fontSize: "1.6rem",
          padding: "1rem 2rem",
          textTransform: "none",
          border: "solid 1px",
          marginLeft: "-10px",
        }}
                onClick={handleJoin}
                endIcon={<IconDiscord style={{marginLeft:"0.5rem", width:'2rem', height: '2rem'}} />}
        >
          Discord
        </Button>
      </Box>
      <Box sx={{
        position: "absolute",
        bottom: "10px",
        left: "50%",
        transform: "translateX(-50%)",
      }}>
        <ArrowBounce />
      </Box>
      <a style={{display: "none"}} ref={linkRef} href="https://discord.gg/BPNM2sBzxy" rel="noreferrer" target="_blank" />
    </Box>
  )
}