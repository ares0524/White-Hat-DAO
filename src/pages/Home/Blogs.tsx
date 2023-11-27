import { Box, CardContent, Grid, CardMedia, CardActions, Pagination } from "@mui/material";
import { WHDCard, ManropeTypography, TitleTypography, SummaryButton } from "@/components/CustomStyledComponents";
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';

export const Blog = () => {
    return(
        <Box>
            <TitleTypography marginTop={7} sx={{textTransform: 'capitalize'}}>Web3 News</TitleTypography>

            <Grid container spacing={5} sx={{marginTop: '1px'}}>
                <Grid lg={3} md={6} item={true} sx={{width:'100%'}}>
                    <WHDCard sx={{height:"100%",display:'grid'}}> 
                        <Box>
                            <CardMedia 
                                sx={{ height: '245px' }}
                                image="/assets/images/blogs/blog-1.jpeg"
                            />
                            <CardContent>
                                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                    <Box sx={{display:'flex', alignItems:'center'}}>
                                        <img width={25} height={25} style={{borderRadius:"25px"}} src="/assets/images/blogs/coindesk.png" /> &nbsp;
                                        <ManropeTypography fontSize={14} fontWeight={400} color="#404040">
                                            CoinDesk
                                        </ManropeTypography>
                                    </Box>

                                    <Box sx={{display:'flex', alignItems:'center'}}>
                                        <CalendarMonthSharpIcon sx={{color:"#404040"}} />
                                        <ManropeTypography fontSize={14} fontWeight={400} color="#404040">
                                            Sep 13, 2023
                                        </ManropeTypography>
                                    </Box>
                                </Box>
                                <ManropeTypography fontSize={18} color="#151515" fontWeight={500} marginTop={1}>
                                    NFT Video Startup Glass Falls
                                </ManropeTypography>
                                <ManropeTypography fontSize={16} color="#404040" sx={{marginTop:'10px'}}>
                                    The startup's founders say they're ending active development after two years.
                                </ManropeTypography>
                            </CardContent>
                        </Box>
                        <CardActions sx={{padding: '15px'}}>
                            <SummaryButton sx={{padding:'12px 20px',fontSize:'18px',color:'#151515'}}>Learn More</SummaryButton>
                        </CardActions>
                    </WHDCard>
                </Grid>

                <Grid lg={3} md={6} item={true} sx={{width:'100%'}}>
                    <WHDCard sx={{height:"100%",display:'grid'}}>
                        <Box>
                            <CardMedia 
                                sx={{ height: '245px' }}
                                image="/assets/images/blogs/blog-2.jpeg"
                            />
                            <CardContent>
                                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                    <Box sx={{display:'flex', alignItems:'center'}}>
                                        <img width={25} height={25} style={{borderRadius:"25px"}} src="/assets/images/blogs/coindesk.png" /> &nbsp;
                                        <ManropeTypography fontSize={14} fontWeight={400} color="#404040">
                                            CoinDesk
                                        </ManropeTypography>
                                    </Box>

                                    <Box sx={{display:'flex', alignItems:'center'}}>
                                        <CalendarMonthSharpIcon sx={{color:"#404040"}} />
                                        <ManropeTypography fontSize={14} fontWeight={400} color="#404040">
                                            Sep 12, 2023
                                        </ManropeTypography>
                                    </Box>
                                </Box>
                                <ManropeTypography fontSize={18} color="#151515" fontWeight={500} marginTop={1}>
                                    Tezos: What Makes It Different?
                                </ManropeTypography>
                                <ManropeTypography fontSize={16} color="#404040" sx={{marginTop:'10px'}}>
                                    The energy-efficient platform has participants "baking" instead of staking their XTZ and allows...
                                </ManropeTypography>
                            </CardContent>
                        </Box>
                        <CardActions sx={{padding: '15px'}}>
                            <SummaryButton sx={{padding:'12px 20px',fontSize:'18px',color:'#151515'}}>Learn More</SummaryButton>
                        </CardActions>
                    </WHDCard>
                </Grid>

                <Grid lg={3} md={6} item={true} sx={{width:'100%'}}>
                    <WHDCard sx={{height:"100%",display:'grid'}}>
                        <Box>
                            <CardMedia 
                                sx={{ height: '245px' }}
                                image="/assets/images/blogs/blog-3.jpeg"
                            />
                            <CardContent>
                                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                    <Box sx={{display:'flex', alignItems:'center'}}>
                                        <img width={25} height={25} style={{borderRadius:"25px"}} src="/assets/images/blogs/coindesk.png" /> &nbsp;
                                        <ManropeTypography fontSize={14} fontWeight={400} color="#404040">
                                            CoinDesk
                                        </ManropeTypography>
                                    </Box>

                                    <Box sx={{display:'flex', alignItems:'center'}}>
                                        <CalendarMonthSharpIcon sx={{color:"#404040"}} />
                                        <ManropeTypography fontSize={14} fontWeight={400} color="#404040">
                                            Sep 8, 2023
                                        </ManropeTypography>
                                    </Box>
                                </Box>
                                <ManropeTypography fontSize={18} color="#151515" fontWeight={500} marginTop={1}>
                                    Bitcoin Hangs on Just Above $27K
                                </ManropeTypography>
                                <ManropeTypography fontSize={16} color="#404040" sx={{marginTop:'10px'}}>
                                    The Fed on Wednesday is widely expected to hold rates steady, but investors will monitor new economic.
                                </ManropeTypography>
                            </CardContent>
                        </Box>
                        <CardActions sx={{padding: '15px'}}>
                            <SummaryButton sx={{padding:'12px 20px',fontSize:'18px',color:'#151515'}}>Learn More</SummaryButton>
                        </CardActions>
                    </WHDCard>
                </Grid>

                <Grid lg={3} md={6} item={true} sx={{width:'100%'}}>
                    <WHDCard sx={{height:"100%",display:'grid'}}>
                        <Box>
                            <CardMedia 
                                sx={{ height: '245px' }}
                                image="/assets/images/blogs/blog-4.jpeg"
                            />
                            <CardContent>
                                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                                    <Box sx={{display:'flex', alignItems:'center'}}>
                                        <img width={25} height={25} style={{borderRadius:"25px"}} src="/assets/images/blogs/coindesk.png" /> &nbsp;
                                        <ManropeTypography fontSize={14} fontWeight={400} color="#404040">
                                            CoinDesk
                                        </ManropeTypography>
                                    </Box>

                                    <Box sx={{display:'flex', alignItems:'center'}}>
                                        <CalendarMonthSharpIcon sx={{color:"#404040"}} />
                                        <ManropeTypography fontSize={14} fontWeight={400} color="#404040">
                                            Sep 14, 2023
                                        </ManropeTypography>
                                    </Box>
                                </Box>
                                <ManropeTypography fontSize={18} color="#151515" fontWeight={500} marginTop={1}>
                                    Tezos Co-Founder on FTX Fallout
                                </ManropeTypography>
                                <ManropeTypography fontSize={16} color="#404040" sx={{marginTop:'10px'}}>
                                Tezos co-founder Kathleen Breitman reflects on the collapse of crypto exchange FTX...
                                </ManropeTypography>
                            </CardContent>
                        </Box>
                        <CardActions sx={{padding: '15px'}}>
                            <SummaryButton sx={{padding:'12px 20px',fontSize:'18px',color:'#151515'}}>Learn More</SummaryButton>
                        </CardActions>
                    </WHDCard>
                </Grid> 
            </Grid>

            {/* <Box sx={{display: 'flex', marginTop:5,justifyContent:'center'}}>
                <Button sx={PaginationBtnStyle}></Button>&nbsp;
                <Button style={{opacity:0.5}} sx={PaginationBtnStyle}></Button>&nbsp;
                <Button style={{opacity:0.5}} sx={PaginationBtnStyle}></Button>&nbsp;
                <Button style={{opacity:0.5}} sx={PaginationBtnStyle}></Button>&nbsp;
                <Button style={{opacity:0.5}} sx={PaginationBtnStyle}></Button>&nbsp;
            </Box> */}
            <Box margin={"auto"} display={'flex'}>
                <Pagination
                    sx={{margin:'auto',mt:2}}
                    count={5}
                    color='primary'
                />
            </Box>
        </Box>
    )
}