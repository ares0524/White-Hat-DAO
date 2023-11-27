import * as React from "react";
import { CustomBox, ManropeTypography, StyledMenu } from "@/components/CustomStyledComponents"
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material"
import { Fragment } from "react"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DropDownBtnStyle = {
    background: '#E6E7EE',
    boxShadow: "-5px -5px 10px 0px #FFF, 5px 5px 10px 0px #C9CCDA",
    padding: '10px 20px',
    color: "#404040",
    border: '1px solid #346EA1',
    borderImageSlice: 1,
    backgroundClip: 'padding-box',
    width: '100%',
    justifyContent: 'space-between'
}

const TitleStyle = {
    color: "#313131",
    fontFamily: "Pilat Extended",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
}

const ImageStyle = {
    width: '100%',
    borderRadius: '20px'
}

export const Products = () => {
    const [cardMenu, setCardMenu] = React.useState<null | HTMLElement>(null);
    const [FYICategory, setFYICategory] = React.useState<null | HTMLElement>(null);
    const isCardMenuOpen = Boolean(cardMenu);
    const isFYICategory = Boolean(FYICategory);

    const handleCardMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setCardMenu(event.currentTarget);
    };
    const handleCardMenuClose = () => {
        setCardMenu(null);
    };

    const handleFYICategoryClick = (event: React.MouseEvent<HTMLElement>) => {
        setFYICategory(event.currentTarget);
    };
    const handleFYICategoryClose = () => {
        setFYICategory(null);
    };

    return (
        <Fragment>
            <Grid container marginTop={5} spacing={5}>
                <Grid md={4} item={true} width={'100%'}>
                    <CustomBox sx={{display:{md:'block',xs:'none'}}}>
                        <List>
                            <ListItem sx={{backgroundColor:'#DDDEE8'}}>
                                <img width={24} src="/assets/icons/lightning-bolt.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    Top Giftcards
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/video-game.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    Games
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/store.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    Ecommerce
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/theater-comedy.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    Entertainment
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/electric-plug.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    Electronics
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/plane.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    Travel
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/clothes.png" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    Apparel
                                </ManropeTypography>
                            </ListItem>
                        </List>
                    </CustomBox>

                    <CustomBox sx={{display:{md:'block',xs:'none'}}} marginTop={7}>
                        <List>
                            <ListItem sx={{backgroundColor:'#DDDEE8'}}>
                                <img width={24} src="/assets/icons/category.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    FYI - Category
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/document-question.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    How it works
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/faq.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    Frequently Asked Questions
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/discussion.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    WHD Discussion forum
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/product-subscriptions.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    Request to add a product
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/business-contact.svg" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    Partnership
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/clothes.png" />
                                <ManropeTypography sx={{fontSize:{lg:'20px',xs:'16px'},color:'#346DA1',fontWeight:600}}>
                                    Contact Admin for help
                                </ManropeTypography>
                            </ListItem>
                        </List>
                    </CustomBox>

                    <Grid sx={{display:{md:'none',xs:'block'}}} xs={12}  className="auditLeaderboardCategory" item={true}>
                        <Button
                            id="demo-customized-button"
                            aria-controls={isCardMenuOpen ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={isCardMenuOpen ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                            sx={DropDownBtnStyle}
                            onClick={handleCardMenuClick}
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            <ListItem sx={{textTransform:'capitalize'}}>
                                <img width={24} src="/assets/icons/lightning-bolt.svg" />
                                <ManropeTypography sx={{fontSize:22,color:'#346DA1',fontWeight:600,ml:1}}>
                                    Top Giftcards
                                </ManropeTypography>
                            </ListItem>
                        </Button>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={cardMenu}
                            open={isCardMenuOpen}
                            onClose={handleCardMenuClose}
                        >
                            <ListItem>
                                <img width={24} src="/assets/icons/video-game.svg" />
                                <ManropeTypography sx={{fontSize:22,color:'#346DA1',fontWeight:600,ml:1}}>
                                    Games
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/store.svg" />
                                <ManropeTypography sx={{fontSize:22,color:'#346DA1',fontWeight:600,ml:1}}>
                                    Ecommerce
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/theater-comedy.svg" />
                                <ManropeTypography sx={{fontSize:22,color:'#346DA1',fontWeight:600,ml:1}}>
                                    Entertainment
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/electric-plug.svg" />
                                <ManropeTypography sx={{fontSize:22,color:'#346DA1',fontWeight:600,ml:1}}>
                                    Electronics
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/plane.svg" />
                                <ManropeTypography sx={{fontSize:22,color:'#346DA1',fontWeight:600,ml:1}}>
                                    Travel
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/clothes.png" />
                                <ManropeTypography sx={{fontSize:22,color:'#346DA1',fontWeight:600,ml:1}}>
                                    Apparel
                                </ManropeTypography>
                            </ListItem>
                        </StyledMenu>
                    </Grid>

                    <Grid sx={{display:{md:'none',xs:'block'}}} xs={12} marginTop={2} className="auditLeaderboardCategory" item={true}>
                        <Button
                            id="demo-customized-button"
                            aria-controls={isFYICategory ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={isFYICategory ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                            sx={DropDownBtnStyle}
                            onClick={handleFYICategoryClick}
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            <ListItem sx={{textTransform:'capitalize'}}>
                                <img width={24} src="/assets/icons/category.svg" />
                                <ManropeTypography sx={{fontSize:22,ml:1,color:'#346DA1',fontWeight:600}}>
                                    FYI - Category
                                </ManropeTypography>
                            </ListItem>
                        </Button>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                            }}
                            anchorEl={FYICategory}
                            open={isFYICategory}
                            onClose={handleFYICategoryClose}
                        >
                            <ListItem>
                                <img width={24} src="/assets/icons/document-question.svg" />
                                <ManropeTypography sx={{fontSize:22,ml:1,color:'#346DA1',fontWeight:600}}>
                                    How it works
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/faq.svg" />
                                <ManropeTypography sx={{fontSize:22,ml:1,color:'#346DA1',fontWeight:600}}>
                                    Frequently Asked Questions
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/discussion.svg" />
                                <ManropeTypography sx={{fontSize:22,ml:1,color:'#346DA1',fontWeight:600}}>
                                    WHD Discussion forum
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/product-subscriptions.svg" />
                                <ManropeTypography sx={{fontSize:22,ml:1,color:'#346DA1',fontWeight:600}}>
                                    Request to add a product
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/business-contact.svg" />
                                <ManropeTypography sx={{fontSize:22,ml:1,color:'#346DA1',fontWeight:600}}>
                                    Partnership
                                </ManropeTypography>
                            </ListItem>

                            <ListItem>
                                <img width={24} src="/assets/icons/clothes.png" />
                                <ManropeTypography sx={{fontSize:22,ml:1,color:'#346DA1',fontWeight:600}}>
                                    Contact Admin for help
                                </ManropeTypography>
                            </ListItem>
                        </StyledMenu>
                    </Grid>
                </Grid>

                <Grid md={8} item={true}>
                    <CustomBox>
                        <Box display='flex' justifyContent='space-between'>
                            <Typography sx={TitleStyle}>
                                Top Giftcards
                            </Typography>

                            <Button sx={{backgroundColor:'#DDDEE8'}}>
                                <ShoppingCartOutlinedIcon />
                                Cart
                            </Button>
                        </Box>

                        <Box>
                            <Grid container paddingTop={3} spacing={2}>
                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/ea-access.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        EA Access
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/harrys.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        HARRY'S
                                    </ManropeTypography>
                                </Grid>
                                
                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/nord-vpn.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        NordVPN
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/ocharleys.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        O'Charley's
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/sierra.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        Sierra
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/skype.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        Skype
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/steam.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        Steam
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/walmart.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        Walmart
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/youtube.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        Youtube
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/apex.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        Apex Legends
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/go-play.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        GO Play Golf
                                    </ManropeTypography>
                                </Grid>
                                
                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/foot-locker.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        Foot Locker
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/glaad.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        Glaad
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/globalgiving.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        GlobalGiving USA
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/landrys.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        Landrys
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/ncsoft.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        NCSOFT
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/old-navy.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        Old Navy
                                    </ManropeTypography>
                                </Grid>

                                <Grid md={4} sm={6} xs={12} item={true}>
                                    <img src="/assets/images/gift-cards/products/special-olympics.webp" style={ImageStyle} />
                                    <ManropeTypography fontSize={20} textAlign='center' fontWeight="600" color="#404040">
                                        Speical Olympics
                                    </ManropeTypography>
                                </Grid>
                            </Grid>
                        </Box>
                    </CustomBox>
                </Grid>
            </Grid>
        </Fragment>
    )
}