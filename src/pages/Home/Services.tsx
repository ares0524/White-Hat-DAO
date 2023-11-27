import * as React from 'react';
import { Box, CardContent, Grid, CardMedia, CardActions, Modal, Backdrop, Fade, Typography } from "@mui/material";
import { WHDCard, ManropeTypography, TitleTypography, ServiceSubTitle, SummaryButton } from "@/components/CustomStyledComponents";

const ServiceBtnStyle = {
    padding: '10px 48px',
    margin:'auto', 
    fontFamily: 'Manrope', 
    textTransform: 'capitalize',
    fontSize: '22px',
    fontWeight: '700',
    
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
    color:'#151515'
};

export const Services = () => {
    const [notificationModalOpen, setNotificationModalOpen] = React.useState(false);

    const handleNotificationModalOpen = () => setNotificationModalOpen(true);
    const handleNotificationModalClose = () => setNotificationModalOpen(false);

    return (
        <WHDCard sx={{marginTop: '70px',p:2}}>
            <TitleTypography>Services</TitleTypography>
            <Grid container spacing={5} sx={{marginTop: '1px',mb:1}}>
                <Grid md={6} lg={4} item={true} mt={2} sx={{width:'100%'}}>
                    <WHDCard sx={{padding:'15px',height:"95%",display:'grid'}}>
                        <Box>
                            <CardMedia 
                                sx={{ height: '245px',borderRadius:'10px'}}
                                image="/assets/images/services/service-1.jpeg"
                            />
                            <CardContent>
                                <ServiceSubTitle sx={{fontSize:{xl:'22px',lg:'18px',md:'18px',xs:'18px'}}}>
                                    Safety Rating
                                </ServiceSubTitle>
                                <ManropeTypography fontSize={16} color="#404040" sx={{textAlign:"center"}}>
                                    After review of your product, we provide a broad security score to allow consumers to make informed decisions about your product.
                                </ManropeTypography>
                            </CardContent>
                        </Box>
                        <CardActions>
                            <SummaryButton onClick={handleNotificationModalOpen} sx={ServiceBtnStyle}>Apply</SummaryButton>
                        </CardActions>
                    </WHDCard>
                </Grid>

                <Grid md={6} lg={4} item={true} mt={2} sx={{width:'100%'}}>
                    <WHDCard sx={{padding:'15px',height:"95%",display:'grid'}}>
                        <Box>
                            <CardMedia 
                                sx={{ height: '245px',borderRadius:'10px'}}
                                image="/assets/images/services/service-2.jpeg"
                            />
                            <CardContent>
                                <ServiceSubTitle sx={{fontSize:{xl:'22px',lg:'18px',md:'18px',xs:'18px'}}}>
                                    Web3 Services
                                </ServiceSubTitle>
                                <ManropeTypography fontSize={16} color="#404040" sx={{textAlign:"center"}}>
                                    Smart Contract creation ( all standards ),  Web3 platform,  Websites creation,  Platform integration,  Decentralized App creation.
                                </ManropeTypography>
                            </CardContent>
                        </Box>
                        <CardActions>
                            <SummaryButton onClick={handleNotificationModalOpen} sx={ServiceBtnStyle}>Inquire Here</SummaryButton>
                        </CardActions>
                    </WHDCard>
                </Grid>

                <Grid md={6} lg={4} item={true} mt={2} sx={{width:'100%'}}>
                    <WHDCard sx={{padding:'15px',height:"95%",display:'grid'}}>
                        <Box>
                            <CardMedia 
                                sx={{ height: '245px',borderRadius:'10px'}}
                                image="/assets/images/services/service-3.jpeg"
                            />
                            <CardContent>
                                <ServiceSubTitle sx={{fontSize:{xl:'22px',lg:'18px',md:'18px',xs:'18px'}}}>
                                    Smart Contract Security Audit
                                </ServiceSubTitle>
                                <ManropeTypography fontSize={16} color="#404040" sx={{textAlign:"center"}}>
                                    We provide smart contract audit services for succinct reports on your team's security risks and optimization oportunties. 
                                </ManropeTypography>
                            </CardContent>
                        </Box>
                        <CardActions>
                            <a href="https://forms.gle/c1aStTNWq7fbZPRB7" style={{color: '#1976d2',margin:'auto'}} target="_blank">
                                <SummaryButton sx={ServiceBtnStyle}>
                                    Get Quote
                                </SummaryButton>
                            </a>
                        </CardActions>
                    </WHDCard>
                </Grid>
            </Grid>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={notificationModalOpen}
                onClose={handleNotificationModalClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                backdrop: {
                    timeout: 500,
                },
                }}
            >
                <Fade in={notificationModalOpen}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                        Notification
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Please contact us on hello@whitehatdao.com
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </WHDCard>
    )
}