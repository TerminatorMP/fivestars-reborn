import { Box, Container } from "@mui/system";
import Heading from "./Heading";


export default function Trailer(props) {
    return (
        <Box pt={12} pb={12} sx={{
          backgroundColor: '#000000',
        }}>
          <Container maxWidth={'lg'}>
            {/* ><Heading title={'Trailer'} sx={{color: "#fff", marginBottom: "20px"}} /> */}
            <Box sx={{
              display: "flex",
              justifyContent: "center",
            }}>
              <Box sx={{
                position: "relative",
                width: "70%",
                height: "0",
                paddingBottom: "39.375%",
                border: "solid 20px transparent",
                background: "linear-gradient(Canvas, Canvas) padding-box,linear-gradient(135deg, #ff6d00, #1d00ff) border-box",
                backgroundClip: "padding-box, border-box",
                bacxkgroundOrigin: "border-box",
                borderRadius: "10px",
              }}>
                <iframe src="https://www.youtube-nocookie.com/embed/DYYOsZmwwwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}></iframe>
              </Box>
            </Box>
          </Container>
        </Box>
    )
}