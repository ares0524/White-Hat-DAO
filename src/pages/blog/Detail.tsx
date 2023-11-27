import { ManropeTypography, SummaryButton } from "@/components/CustomStyledComponents"
import { Box, Breadcrumbs, Grid, Typography, Link, Divider } from "@mui/material"
import { Fragment } from "react"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareIcon from '@mui/icons-material/Share';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { proposal } from "./proposals";
import { WHDInfoCard } from "./WHDInfoCard";

const BoxStyle = {
    borderRadius: '10px',
    border: '0.5px solid #346DA1',
    background: '#E6E7EE',
    boxShadow: '-15px -15px 20px 0px #FFF, 15px 15px 20px 0px #C9CCDA',
    padding: '30px 20px',
}

const ButtonStyle = {
    color: '#346DA1',
    fontSize: '16px',
    fontFamily: 'Manrope',
    textTransform: 'Capitalize',
    display: 'flex',
    padding: '5px 10px',
    alignItems: 'center',
    fontWeight: 600
}

const TagStyle = {
    padding: '3px 10px',
    gap: '10px',
    borderRadius: '50px',
    boxShadow: "2px 2px 5px 0px #C9CCDA, -2px -2px 5px 0px #FFF",
    fontSize: '14px'
}

export const Detail = () => {
    // const makeComment = () => {
    //     toast.info('Coming soon', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //     });
    // }

    return (
        <Fragment>
            <Grid container spacing={{lg:7,xs:3}} sx={{paddingTop:'30px!important'}}>
                <Grid md={8} item={true} width={'100%'}>
                    <Box sx={BoxStyle} padding={2}>
                        <div role="presentation">
                            <Breadcrumbs style={{color:'#346DA1'}} aria-label="breadcrumb">
                                <Link
                                    underline="hover"
                                    color="inherit"
                                    href="#"
                                    fontWeight={500}
                                >
                                    WhiteHatDAO
                                </Link>
                                <Typography fontWeight={700}>
                                    General
                                </Typography>
                            </Breadcrumbs>
                        </div>

                        <Divider sx={{backgroundColor:'#346DA1',margin:'10px 0',opacity:.5}} />

                        {/* User Info */}
                        <Box marginTop={2}>
                            <Box display='flex' color={"#404040"} alignItems={'center'}>
                                <img src="/assets/images/logo.png" width={50} style={{borderRadius:'50%'}} alt="user" />
                                <ManropeTypography fontSize={18} fontWeight={700} marginLeft={1}>
                                    0x5cF7...a95e856
                                </ManropeTypography>
                                <ManropeTypography fontSize={18} fontWeight={400} marginLeft={2}>
                                    March 18, 2023
                                </ManropeTypography>
                            </Box>

                        </Box>

                        {/* Blog content */}
                        <Box color={"#404040"} marginTop={2}>
                            <ManropeTypography sx={{fontSize:{xl:'30px',lg:'25px',xs:'20px'}}} fontWeight={700} lineHeight={40}>
                                Gov Proposal Discussion #0221
                            </ManropeTypography>

                            <Box display={'flex'} gap={1} marginTop={1}>
                                <Typography sx={TagStyle} style={{backgroundColor:'white'}}>
                                    DAO
                                </Typography>

                                <Typography sx={TagStyle} style={{backgroundColor:'white'}}>
                                    Governance
                                </Typography>

                                <Typography sx={TagStyle} style={{backgroundColor:'white'}}>
                                    Web3
                                </Typography>
                            </Box>

                            <ManropeTypography fontSize={16} fontWeight={500} lineHeight={20} marginTop={2} whiteSpace={'break-spaces'}>
                                {proposal}
                            </ManropeTypography>   

                            <Box sx={{display:{lg:'flex',xs:'block'}}} mt={2} justifyContent={'space-between'} color={'#346DA1'}>
                                <Box display={'flex'} sx={{justifyContent:{lg:'flex-start',xs:'space-around'}}} alignItems={"center"}>
                                    <Box display={'flex'}>
                                        <ThumbUpOffAltIcon />
                                        <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2 Likes</ManropeTypography>
                                    </Box>
                                    <Box display={'flex'} marginLeft={2}>
                                        <ThumbDownOffAltIcon />
                                        <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>1 Dislike</ManropeTypography>
                                    </Box>
                                    <Box display={'flex'} marginLeft={2}>
                                        <ChatOutlinedIcon />
                                        <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2 Likes</ManropeTypography>
                                    </Box>
                                </Box>

                                <Box display={'flex'} sx={{mt:{lg:'0',xs:2},justifyContent:{lg:'flex-start',xs:'space-around'}}} alignItems={'center'}>
                                    <Box display={'flex'} marginRight={2}>
                                        <ManropeTypography fontSize={16} fontWeight={500} marginRight={1}>Share post</ManropeTypography>
                                        <ShareIcon />
                                    </Box>
                                    <SummaryButton sx={ButtonStyle}>
                                        <MonetizationOnIcon />
                                        Tip Author
                                    </SummaryButton>
                                </Box>
                            </Box>
                        </Box>

                        <Divider sx={{backgroundColor:'#346DA1',margin:'10px 0',opacity:.5}} />

                        {/* Comment Box */}
                        {/* <Box marginTop={2}>
                            <ManropeTypography fontSize={16} fontWeight={600} lineHeight={24} color='#404040'>
                                2 Comment
                            </ManropeTypography>

                            <Paper
                                component="form"
                                sx={SearchBoxStyle}
                            >
                                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Make a comment"
                                    inputProps={{ 'aria-label': 'make a comment' }}
                                />
                            </Paper>

                            Action Buttons
                            <Box marginTop={3} display={'flex'} justifyContent={'end'}>
                                <Button sx={{color:'#CC2D8F',textTransform:'capitalize',fontSize:'20px',fontWeight:'600'}}>Cancel</Button>
                                <GradientButton sx={ButtonStyle} onClick={makeComment} style={{fontSize:'20px',fontWeight:"600",width:'150px',marginLeft:'20px'}}>
                                    Post
                                </GradientButton>
                            </Box>

                            Comment
                            <Box>
                                <Box marginTop={2}>
                                    User Info
                                    <Box display='flex' color={"#404040"} alignItems={'center'}>
                                        <img src="/assets/images/logo.png" width={40} style={{borderRadius:'50%'}} alt="user" />
                                        <ManropeTypography fontSize={18} fontWeight={700} marginLeft={1}>
                                            NFTthinker.eth
                                        </ManropeTypography>
                                    </Box>

                                    Content
                                    <Box sx={{backgroundColor:'#DDDEE8'}} marginTop={1} padding={2} borderRadius={'5px'}>
                                        <ManropeTypography color={"#404040"} fontSize={16} fontWeight={500} lineHeight={20}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </ManropeTypography>

                                        <Box display={'flex'} justifyContent={'space-between'} color={'#346DA1'} marginTop={2}>
                                            <Box display={'flex'} alignItems={"center"}>
                                                <Box display={'flex'}>
                                                    <ThumbUpOffAltIcon />
                                                    <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2</ManropeTypography>
                                                </Box>
                                                <Box display={'flex'} marginLeft={2}>
                                                    <ThumbDownOffAltIcon />
                                                    <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2</ManropeTypography>
                                                </Box>
                                                <Box display={'flex'} marginLeft={2}>
                                                    <ChatOutlinedIcon />
                                                    <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>1</ManropeTypography>
                                                </Box>
                                            </Box>

                                            <Box alignItems={'center'}>
                                                <Button sx={{color:'#346DA1',textTransform:'capitalize',fontSize:'16px',fontWeight:'500'}}>Reply</Button>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Box sx={{backgroundColor:'#DDDEE8'}} padding={2} borderRadius={'5px'} marginTop={2} marginLeft={10}>
                                        <ManropeTypography color={"#404040"} fontSize={16} fontWeight={500} lineHeight={20}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </ManropeTypography>
                                    </Box>
                                    
                                </Box>

                                <Box marginTop={2}>
                                    User Info
                                    <Box display='flex' color={"#404040"} alignItems={'center'}>
                                        <img src="/assets/images/logo.png" width={40} style={{borderRadius:'50%'}} alt="user" />
                                        <ManropeTypography fontSize={18} fontWeight={700} marginLeft={1}>
                                            NFTthinker.eth
                                        </ManropeTypography>
                                    </Box>

                                    Content
                                    <Box sx={{backgroundColor:'#DDDEE8'}} padding={2} marginTop={1} borderRadius={'5px'}>
                                        <ManropeTypography color={"#404040"} fontSize={16} fontWeight={500} lineHeight={20}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </ManropeTypography>

                                        <Box display={'flex'} justifyContent={'space-between'} color={'#346DA1'} marginTop={2}>
                                            <Box display={'flex'} alignItems={"center"}>
                                                <Box display={'flex'}>
                                                    <ThumbUpOffAltIcon />
                                                    <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2</ManropeTypography>
                                                </Box>
                                                <Box display={'flex'} marginLeft={2}>
                                                    <ThumbDownOffAltIcon />
                                                    <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2</ManropeTypography>
                                                </Box>
                                                <Box display={'flex'} marginLeft={2}>
                                                    <ChatOutlinedIcon />
                                                    <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>1</ManropeTypography>
                                                </Box>
                                            </Box>

                                            <Box alignItems={'center'}>
                                                <Button sx={{color:'#346DA1',textTransform:'capitalize',fontSize:'16px',fontWeight:'500'}}>Reply</Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box> */}

                    </Box>
                </Grid>

                <WHDInfoCard />
            </Grid>

            <ToastContainer />
        </Fragment>
    )
}