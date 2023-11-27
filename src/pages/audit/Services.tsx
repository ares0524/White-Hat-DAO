import { AuditServiceBox, AuditServiceTitle, ManropeTypography, TokenNameTypography } from "@/components/CustomStyledComponents"
import { Box, Grid } from "@mui/material"

export const Services = () => {
    return(
        <Box marginTop={5}>
            <AuditServiceTitle sx={{fontSize:{xl:'30px',lg:'25px',md:'23px',xs:'20px'}}}>
                Our Services Includes
            </AuditServiceTitle>

            <Grid container spacing={5} marginTop={1}>
                <Grid md={4} xs={12} item={true}>
                    <AuditServiceBox>
                        <TokenNameTypography sx={{fontSize:{lg:'22px',xs:'20px'}}} fontWeight={700}>
                            Identify Errors & Risks
                        </TokenNameTypography>
                        <ManropeTypography fontSize={16} fontWeight={500} color="#404040">
                            Have your code reviewed by W-HAT team of seasoned security experts.
                        </ManropeTypography>
                    </AuditServiceBox>
                </Grid>

                <Grid md={4} xs={12} item={true}>
                    <AuditServiceBox>
                        <TokenNameTypography sx={{fontSize:{lg:'22px',xs:'20px'}}} fontWeight={700}>
                            Identify Errors & Risks
                        </TokenNameTypography>
                        <ManropeTypography fontSize={16} fontWeight={500} color="#404040">
                            Have your code reviewed by W-HAT team of seasoned security experts.
                        </ManropeTypography>
                    </AuditServiceBox>
                </Grid>

                <Grid md={4} xs={12} item={true}>
                    <AuditServiceBox>
                        <TokenNameTypography sx={{fontSize:{lg:'22px',xs:'20px'}}} fontWeight={700}>
                            Identify Errors & Risks
                        </TokenNameTypography>
                        <ManropeTypography fontSize={16} fontWeight={500} color="#404040">
                            Have your code reviewed by W-HAT team of seasoned security experts.
                        </ManropeTypography>
                    </AuditServiceBox>
                </Grid>
            </Grid>
        </Box>
    )
}