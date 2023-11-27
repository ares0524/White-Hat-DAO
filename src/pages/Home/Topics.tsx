import { Box, Divider, Pagination } from "@mui/material"
import { CreateTopicButton, ManropeTypography, SummaryButton, TagTypography, TitleTypography } from "@/components/CustomStyledComponents";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import { Link } from "react-router-dom";
import { proposal } from "../blog/proposals";
import { useState } from "react";

const BoxStyle = {
    borderRadius: '10px',
    border: '0.5px solid #346DA1',
    background: '#E6E7EE',
    boxShadow: '-15px -15px 20px 0px #FFF, 15px 15px 20px 0px #C9CCDA',
    padding: '30px 20px',
        
    "& .MuiListItem-padding": {
        padding: '12px 15px',
        borderRadius: '5px'
    },
}

const ButtonStyle = {
    color: '#346DA1',
    fontSize: '16px',
    fontFamily: 'Manrope',
    textTransform: 'Capitalize',
    display: 'flex',
    padding: '5px 10px',
    alignItems: 'center',
    textDecoration: 'none'
}


export const Topics = () => {
    const [sampleProposal] = useState(proposal);

    return (
        <Box marginTop={2}>
            <Box sx={BoxStyle}>
                <TitleTypography sx={{textTransform:'capitalize',fontSize:'24px',textAlign:'left'}}>
                    All Topics
                </TitleTypography>
                {/* <TitleTypography sx={{fontSize:'20px',textAlign:'left',textTransform:'capitalize',fontFamily:'Manrope',display:{md:'block',xs:'none'}}}>
                    Whitehat DAO in the next 5 years
                </TitleTypography> */}

                <Link to={'/blog/create'}>
                    <CreateTopicButton sx={{width:'100%',margin:'20px 0',fontSize:{lg:'20px',md:'16px'},padding:'10px'}}>
                        Create a topic
                    </CreateTopicButton>
                </Link>

                {/* <Box key={topic}> */}
                    <Divider sx={{backgroundColor:'#346DA1',margin:'10px 0',opacity:.5}} />

                    {/* User Info */}
                    <Box>
                        <Box marginTop={2}>
                            <Box display='flex' color={"#404040"} alignItems={'center'}>
                                <img src="/assets/images/logo.png" width={50} style={{borderRadius:'50%'}} alt="user" />
                                <ManropeTypography sx={{fontSize:{md:'16px',xs:'14px'}}} fontWeight={700} marginLeft={1}>
                                    Affirmation
                                </ManropeTypography>
                                <ManropeTypography sx={{fontSize:{md:'16px',xs:'14px'}}} fontWeight={400} marginLeft={2}>
                                    Proposals&nbsp;&nbsp;&nbsp;March 18, 2023
                                </ManropeTypography>
                            </Box>
                        </Box>

                        <Box color={"#404040"} marginTop={2}>
                            <Link to={'/blog/detail'} style={{textDecoration:'none'}}>
                                <ManropeTypography fontSize={20} fontWeight={700} lineHeight={40} color={"#151515"}>
                                    Gov Proposal Discussion #0221
                                </ManropeTypography>
                            </Link>

                            <Box display={'flex'} gap={1}>
                                <TagTypography sx={{fontSize:{lg:'16px',md:'14px',xs:'10px'},mt:1}} style={{backgroundColor:'white'}}>
                                    DAO
                                </TagTypography>

                                <TagTypography sx={{fontSize:{lg:'16px',md:'14px',xs:'10px'},mt:1}} style={{backgroundColor:'white'}}>
                                    Governance
                                </TagTypography>

                                <TagTypography sx={{fontSize:{lg:'16px',md:'14px',xs:'10px'},mt:1}} style={{backgroundColor:'white'}}>
                                    Web3
                                </TagTypography>
                            </Box>

                            <ManropeTypography fontWeight={500} lineHeight={20} sx={{fontSize:{md:'16px',xs:'12px'}}} marginTop={2}>
                                {sampleProposal.slice(0, 350)}...
                            </ManropeTypography>   
                        </Box>

                        <Box display={'flex'} justifyContent={'space-between'} color={'#346DA1'}>
                            <Box display={'flex'} alignItems={"center"}>
                                <Box display={'flex'}>
                                    <ThumbUpOffAltIcon />
                                    <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2</ManropeTypography>
                                </Box>
                                <Box display={'flex'} marginLeft={2}>
                                    <ChatOutlinedIcon />
                                    <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2</ManropeTypography>
                                </Box>
                            </Box>

                            <Box display={'flex'} alignItems={'center'}>
                                <Link to={'/blog/detail'} style={{textDecoration:'none'}}>
                                    <SummaryButton sx={ButtonStyle}>
                                        Read More
                                    </SummaryButton>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                {/* </Box> */}
                <Divider sx={{backgroundColor:'#346DA1',margin:'20px 0',opacity:.5}} />
                {/* <Divider sx={{backgroundColor:'#346DA1',margin:'20px 0',opacity:.5}} />

                <Box>
                    <Box marginTop={2}>
                        <Box display='flex' color={"#404040"} alignItems={'center'}>
                            <img src="/assets/images/logo.png" width={50} style={{borderRadius:'50%'}} alt="user" />
                            <ManropeTypography sx={{fontSize:{md:'16px',xs:'14px'}}} fontWeight={700} marginLeft={1}>
                                dummy.eth
                            </ManropeTypography>
                            <ManropeTypography sx={{fontSize:{md:'16px',xs:'14px'}}} fontWeight={400} marginLeft={2}>
                                Proposals June 3, 2022
                            </ManropeTypography>
                        </Box>
                        <Box display={'flex'} gap={1}>
                            <TagTypography sx={{fontSize:{lg:'16px',md:'14px',xs:'10px'}}} style={{backgroundColor:'#346DA1'}}>
                                Airdrop
                            </TagTypography>

                            <TagTypography sx={{fontSize:{lg:'16px',md:'14px',xs:'10px'}}} style={{backgroundColor:'#CC2D8F'}}>
                                Security
                            </TagTypography>

                            <TagTypography sx={{fontSize:{lg:'16px',md:'14px',xs:'10px'}}} style={{backgroundColor:'#6D29FE'}}>
                                Blockchain
                            </TagTypography>
                        </Box>
                    </Box>

                    <Box color={"#404040"} marginTop={2}>
                        <ManropeTypography fontSize={20} fontWeight={700} lineHeight={40}>
                            Securing web3 initiative by WhiteHatDAO, building with simple UX.
                        </ManropeTypography>

                        <ManropeTypography fontWeight={500} lineHeight={20} sx={{fontSize:{md:'16px',xs:'12px'}}} marginTop={2}>
                            {sampleProposal.slice(1, 100)}...
                        </ManropeTypography>   
                    </Box>

                    <Box display={'flex'} justifyContent={'space-between'} color={'#346DA1'}>
                        <Box display={'flex'} alignItems={"center"}>
                            <Box display={'flex'}>
                                <ThumbUpOffAltIcon />
                                <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2</ManropeTypography>
                            </Box>
                            <Box display={'flex'} marginLeft={2}>
                                <ChatOutlinedIcon />
                                <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2</ManropeTypography>
                            </Box>
                        </Box>

                        <Box display={'flex'} alignItems={'center'}>
                            <Link to={'/blog/detail'} style={{textDecoration:'none'}}>
                                <GradientButton sx={ButtonStyle}>
                                    Read More
                                </GradientButton>
                            </Link>
                        </Box>
                    </Box>
                </Box>

                <Divider sx={{backgroundColor:'#346DA1',margin:'20px 0',opacity:.5}} />

                <Box>
                    <Box marginTop={2}>
                        <Box display='flex' color={"#404040"} alignItems={'center'}>
                            <img src="/assets/images/logo.png" width={50} style={{borderRadius:'50%'}} alt="user" />
                            <ManropeTypography sx={{fontSize:{md:'16px',xs:'14px'}}} fontWeight={700} marginLeft={1}>
                                dummy.eth
                            </ManropeTypography>
                            <ManropeTypography sx={{fontSize:{md:'16px',xs:'14px'}}} fontWeight={400} marginLeft={2}>
                                Proposals June 3, 2022
                            </ManropeTypography>
                        </Box>
                        <Box display={'flex'} gap={1}>
                            <TagTypography sx={{fontSize:{lg:'16px',md:'14px',xs:'10px'}}} style={{backgroundColor:'#346DA1'}}>
                                Airdrop
                            </TagTypography>

                            <TagTypography sx={{fontSize:{lg:'16px',md:'14px',xs:'10px'}}} style={{backgroundColor:'#CC2D8F'}}>
                                Security
                            </TagTypography>

                            <TagTypography sx={{fontSize:{lg:'16px',md:'14px',xs:'10px'}}} style={{backgroundColor:'#6D29FE'}}>
                                Blockchain
                            </TagTypography>
                        </Box>
                    </Box>

                    <Box color={"#404040"} marginTop={2}>
                        <ManropeTypography fontSize={20} fontWeight={700} lineHeight={40}>
                            Securing web3 initiative by WhiteHatDAO, building with simple UX.
                        </ManropeTypography>

                        <ManropeTypography fontWeight={500} lineHeight={20} sx={{fontSize:{md:'16px',xs:'12px'}}} marginTop={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/><br/>
                        </ManropeTypography>   
                    </Box>

                    <Box display={'flex'} justifyContent={'space-between'} color={'#346DA1'}>
                        <Box display={'flex'} alignItems={"center"}>
                            <Box display={'flex'}>
                                <ThumbUpOffAltIcon />
                                <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2</ManropeTypography>
                            </Box>
                            <Box display={'flex'} marginLeft={2}>
                                <ChatOutlinedIcon />
                                <ManropeTypography fontSize={16} fontWeight={500} marginLeft={1}>2</ManropeTypography>
                            </Box>
                        </Box>

                        <Box display={'flex'} alignItems={'center'}>
                            <Link to={'/blog/detail'} style={{textDecoration:'none'}}>
                                <GradientButton sx={ButtonStyle}>
                                    Read More
                                </GradientButton>
                            </Link>
                        </Box>
                    </Box>
                </Box> */}
                <Box margin={"auto"} display={'flex'}>
                    <Pagination
                        sx={{margin:'auto',mt:2}}
                        count={5}
                        color='primary'
                    />
                </Box>
            </Box>
        </Box>
    )
}