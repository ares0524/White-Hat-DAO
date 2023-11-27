import { CardContent, Grid } from "@mui/material";
import { TokenNameTypography, WHDCard } from "@/components/CustomStyledComponents";

export const Brand = () => {
    return (
        <WHDCard sx={{marginTop: '70px'}}>
            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                <TokenNameTypography fontSize={24} fontWeight={600} textAlign="center">
                    Trusted by top brands
                </TokenNameTypography>
            </CardContent>
            <CardContent>
                <Grid container sx={{justifyContent:'center',alignItems:'center',padding:'20px 0',textAlign:'center'}}>
                    <Grid lg={1} md={2} sm={3} xs={12} item={true} sx={{mt:{sm:'10px',xs:'30px'},mx:{xl:'15px',lg:'20px'}}}>
                        <a href="https://www.layer2dao.org/" target="_blank">
                            <img src="/assets/images/brands/Layer2DAO.png" width={75} />
                        </a>
                    </Grid>

                    <Grid lg={1} md={2} sm={3} xs={12} item={true} sx={{mt:{sm:'10px',xs:'30px'},mx:{xl:'15px',lg:'20px'}}}>
                        <a href="https://parcel.money/" target="_blank">
                            <img src="/assets/images/brands/percel.svg" width={55} />
                        </a>
                    </Grid>

                    <Grid lg={1} md={2} sm={3} xs={12} item={true} sx={{mt:{sm:'10px',xs:'30px'},mx:1}} className="unlockBrand">
                        <a href="https://unlock-protocol.com/" target="_blank">
                            <img src="/assets/images/brands/unlock.svg" width={120} />
                        </a>
                    </Grid>

                    <Grid lg={1} md={2} sm={3} xs={12} item={true} sx={{mt:{sm:'10px',xs:'30px'},mx:{xl:'15px',lg:'20px'}}}>
                        <a href="https://daostar.one/" target="_blank">
                            <img src="/assets/images/brands/daostar.jpg" width={75} />
                        </a>
                    </Grid>

                    <Grid lg={1} md={2} sm={3} xs={12} item={true} sx={{mt:{sm:'10px',xs:'30px'},mx:{xl:'15px',lg:'20px'}}}>
                        <a href="https://dework.xyz/" target="_blank">
                            <img src="/assets/images/brands/dework.png" width={75} />
                        </a>
                    </Grid>
                </Grid>
            </CardContent>
        </WHDCard>
    )
}