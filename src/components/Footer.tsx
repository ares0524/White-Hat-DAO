import { Box, Divider, Grid, Typography } from "@mui/material"
import { Fragment } from "react"
import { FooterIconButton, ManropeTypography, TitleTypography } from "./CustomStyledComponents"
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactLinkStyle = {
    color: "#CC2D8F",
    fontFamily: "Manrope",
    fontSize: "22px",
    fontStyle: "normal",
    fontWeight: "500",
}

export const Footer = () => {
    return(
        <Fragment>
            <Divider sx={{marginTop:"80px",backgroundColor:'#346DA1'}} />

            <Box sx={{display:'flex', alignItems:'center'}} marginTop={3}>
                <img src="/assets/images/logo.png" width={70} className="footerLogo" />
                <TitleTypography fontSize={22} color="#404040" fontWeight={700} sx={{fontSize:{md:'22px',xs:'18px'}}} textAlign="left">
                    White Hat DAO
                </TitleTypography>
            </Box>

            <Grid container marginTop={2}>
                <Grid lg={6} md={6} xs={12} marginTop={2} item={true}>
                    <ManropeTypography color="#404040" fontWeight={500} fontSize={18} sx={{width:{md:'80%',xs:'100%'}}}>
                        At <span style={{fontWeight:700}}>White Hat DAO</span>, we want to make it easy for everyone
                        to embrace web3 technology / eco-system in a secure, decentralised and future-proof way.
                        Join us in this Journey.
                    </ManropeTypography>
                </Grid>

                <Grid lg={3} md={6} xs={12} marginTop={2} item={true}>
                    <ManropeTypography fontSize={22} fontWeight={700} color="#404040">
                        Contact Us
                    </ManropeTypography>
                    <Typography sx={ContactLinkStyle}>hello@whitehatdao.com</Typography>
                </Grid>

                <Grid lg={3} md={6} xs={12} marginTop={2} mb={3} item={true}>
                    <a href="https://twitter.com/White_Hat_DAO" target="_blank">
                        <FooterIconButton aria-label="twitter">
                            <TwitterIcon fontSize="large" />
                        </FooterIconButton>
                    </a>

                    <a href="https://github.com/WhiteHatDAO" target="_blank">
                        <FooterIconButton aria-label="github">
                            <GitHubIcon fontSize="large" />
                        </FooterIconButton>
                    </a>

                    <a href="https://discord.gg/xqbwepBa3s" target="_blank">
                        <FooterIconButton aria-label="discord">
                            <img src="/assets/icons/discord.svg" width={45} />
                        </FooterIconButton>
                    </a>
                </Grid>
            </Grid>

            {/* <Divider sx={{my:"20px",backgroundColor:'#346DA1'}} /> */}

        </Fragment>
    )
}