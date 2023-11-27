import { ManropeTypography, WHDCard } from "@/components/CustomStyledComponents"
import { Box, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export const Banner = () => {
    return (
        <WHDCard sx={{marginTop:'30px',display:'flex'}}>
            <Grid container>
                <Grid md={7} xs={12} item={true}>
                    <CardContent sx={{padding:{lg:'35px 40px',xs:'10px 20px'}}}>
                        <Typography sx={{fontSize:{xl:'48px',lg:'40px',md:'30px',xs:'25px'},fontWeight:600,fontFamily:"Pilat Extended",textAlign:{lg:'left',xs:'center'}}}>
                            Shop with <span style={{color:'#CC2D8F'}}>Crypto</span>
                        </Typography>
                        <ManropeTypography sx={{fontSize:{lg:'24px',xs:'20px'}}} fontWeight={600} lineHeight={40} marginTop={2}>
                            Gift Cards are the easiest way to live on crypto!
                        </ManropeTypography>
                        <ManropeTypography sx={{fontSize:{lg:'24px',xs:'20px'}}} fontWeight={600} lineHeight={40}>
                            We have the Biggest Brands! 🛍️ Explore for your favourites!
                        </ManropeTypography>

                        <Box marginTop={4} sx={{backgroundColor:'#DDDEE8',width:{lg:'fit-content',xs:'94%'},padding:'10px 15px',borderRadius:'5px',display:{lg:'flex',xs:'block'},gap:'10px'}}>
                            <ManropeTypography fontSize={16} sx={{fontWeight:"800",mt:{lg:'0',xs:1}}} color="#346DA1">
                                Buy Gift Cards
                            </ManropeTypography>

                            <Box display='flex' alignItems='center' sx={{mt:{lg:'0',xs:1}}}>
                                <ManropeTypography>
                                    Pay with:
                                </ManropeTypography>
                                <img src="/assets/images/logo.png" alt="WHD Token" style={{marginLeft:'10px'}} width={21} />
                                <ManropeTypography fontSize={14} color="#CC2D8F" marginLeft={1}>
                                    White Hat DAO Token (WHD)
                                </ManropeTypography>
                            </Box>

                            <Box display='flex' alignItems='center' sx={{mt:{lg:'0',xs:1}}}>
                                <ManropeTypography fontSize={14} fontWeight={600}>
                                    Available Networks: 
                                </ManropeTypography>
                                <img src="/assets/images/web3/ethereum.svg" style={{marginLeft:'5px'}} width={20} alt="Ethereum" />
                                <img src="/assets/images/web3/polygon.svg" style={{marginLeft:'5px'}} width={20} alt="Polygon" />
                            </Box>
                        </Box>
                    </CardContent>
                </Grid>

                <Grid md={5} xs={12} item={true} sx={{display:'flex',justifyContent:'flex-end'}}>
                    <CardMedia
                        component='img'
                        sx={{ width:"100%",maxHeight:'300px' }}
                        image="/assets/images/gift-cards/banner.png"
                        alt="banner"
                    />
                </Grid>
            </Grid>
        </WHDCard>
    )
}