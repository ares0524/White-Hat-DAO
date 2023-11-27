import { WHDCard, EditGrid, TokenNameTypography, ManropeTypography, SummaryBox, SummaryButton } from "@/components/CustomStyledComponents"
import { CardContent, Typography, Box, Grid, Divider } from "@mui/material"
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import { useAccount } from "wagmi";

export const DueDiligenceAuditing = () => {
    const AdminMetaMaskAddress = import.meta.env.VITE_METAMASK_ADDRESS;
    const AdminCoinBaseAddress = import.meta.env.VITE_COINBASE_ADDRESS;
    const { address } = useAccount();

    return(
        <WHDCard sx={{marginTop:'30px'}}>
            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                {address == AdminMetaMaskAddress || address == AdminCoinBaseAddress ? (
                    <EditGrid container sx={{display:{md:'flex',xs:"none"}}}>
                        <img src="/assets/icons/edit.svg" style={{marginRight: '7px'}} />
                        <Typography marginTop="3px">Edit</Typography>
                    </EditGrid>
                ): (null)}

                <TokenNameTypography textAlign="center" sx={{fontSize:{lg:'30px',md:'25px',xs:'18px'},lineHeight:{md:'normal',xs:'30px'}}}>
                    Due-Diligence / Auditing
                </TokenNameTypography>
            </CardContent>

            <CardContent sx={{padding:'20px'}}>
                <ManropeTypography fontWeight={500} color="#404040" sx={{fontSize:'16px'}} mt={1}>
                    We provide Due-Diligence, Safety Rating and a Comprehensive Security Assessment of your smart contract and blockchain code to identify vulnerabilities and recommend ways to fix them.
                </ManropeTypography>
                
                <Grid container spacing={5}>
                    <Grid lg={7} item={true} display={'grid'}>
                        <SummaryBox sx={{color:"#346DA1",display:'block'}}>
                            <Box>
                                <TokenNameTypography sx={{fontSize:{lg:'22px',xs:'18px'}}} display="flex" alignItems='center' fontFamily="Manrope">
                                    <InfoSharpIcon fontSize="large" /> &nbsp;&nbsp;
                                    Note!
                                </TokenNameTypography>
                            </Box>
                            <Divider sx={{backgroundColor:'#346DA1',margin:'5px 0',opacity:.5}} />
                            <Box marginTop={2}>
                                <ManropeTypography  sx={{fontSize:'16px'}}>
                                    Our industry-leading audit methodology and tooling includes a review of your code's logic, with a mathematical approach to ensure your program works as intended.
                                </ManropeTypography>
                            </Box>
                        </SummaryBox>
                        <SummaryButton sx={{ mt:2,fontSize:{lg:'24px',xs:'16px'},display:{md:'flex',xs:'none'},width:{md:'70%',xs:'100%'},px:{md:'20px',xs:'0'}}}>
                            <a href="https://forms.gle/c1aStTNWq7fbZPRB7" target="_blank">
                                Apply for Smart Contract Security Audit
                            </a>
                        </SummaryButton>

                        <SummaryButton sx={{ mt:2,fontSize:{lg:'24px',xs:'16px'},display:{md:'none',xs:'flex'},width:{md:'70%',xs:'100%'},px:{md:'20px',xs:'0'}}}>
                            <a href="https://forms.gle/c1aStTNWq7fbZPRB7" target="_blank">
                                Apply for Smart Contract Audit
                            </a>
                        </SummaryButton>
                    </Grid>

                    <Grid lg={5} item={true} sx={{textAlign:'center'}}>
                        <img width="80%" src="/assets/images/audit/security-team.png" />
                    </Grid>
                </Grid>
            </CardContent>
        </WHDCard>
    )
}