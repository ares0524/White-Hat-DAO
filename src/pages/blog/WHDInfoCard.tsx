import { ManropeTypography, SummaryButton, TitleTypography } from "@/components/CustomStyledComponents"
import { Box, Grid, } from "@mui/material"
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import 'react-toastify/dist/ReactToastify.css';

const BoxStyle = {
    borderRadius: '10px',
    border: '0.5px solid #346DA1',
    background: '#E6E7EE',
    boxShadow: '-15px -15px 20px 0px #FFF, 15px 15px 20px 0px #C9CCDA',
    padding: '30px 20px',
}

const JoinBtnStyle = {
    width:'100%',
    color:"#346DA1",
    textTransform:'capitalize',
    fontSize:'24px',
    marginTop:'20px',
    padding:'10px',
    fontWeight: 700
}

export const WHDInfoCard = () => {

    return (
            
        <Grid md={4} item={true} sx={{display:{md:'block',xs:'none'}}}>
            <Box sx={BoxStyle} style={{padding:'0'}}>
                <img src="/assets/images/blogs/hacker_ethereum.png" style={{borderRadius:'10px 10px 0 0'}} width={"100%"} />
                <Box padding={2}>
                    <TitleTypography sx={{fontSize:{xl:'24px',lg:'22px',md:'18px'}}} textAlign={"center"}>
                        White Hat DAO
                    </TitleTypography>

                    {/* <Box marginTop={2}>
                        <a href="https://whitehatdao.com" color="#CC2D8F" style={{textDecoration:'none',opacity:'1'}}>www.whitehatdao.com</a>
                    </Box> */}

                    <ManropeTypography color={"#404040"} sx={{fontSize:{lg:'18px',md:'16px'}}} fontWeight={500} lineHeight={24} marginTop={3}>
                        Empowering community voice
                    </ManropeTypography>

                    <Box marginTop={2} display={'flex'} color={"#346DA1"}>
                        <GroupOutlinedIcon />
                        <ManropeTypography marginLeft={2} color={"#346DA1"} sx={{fontSize:{lg:'18px',md:'16px'}}} fontWeight={500} lineHeight={24}>
                            2341 Members
                        </ManropeTypography>
                    </Box>

                    <Box marginTop={2} display={'flex'} color={"#346DA1"}>
                        <QuestionAnswerOutlinedIcon />
                        <ManropeTypography marginLeft={2} color={"#346DA1"} sx={{fontSize:{lg:'18px',md:'16px'}}} fontWeight={500} lineHeight={24}>
                            234 Topics
                        </ManropeTypography>
                    </Box>

                    <Box marginTop={2} display={'flex'} color={"#346DA1"}>
                        <SignalCellularAltOutlinedIcon />
                        <ManropeTypography marginLeft={2} color={"#346DA1"} sx={{fontSize:{lg:'18px',md:'16px'}}} fontWeight={500} lineHeight={24}>
                            23 Proposals
                        </ManropeTypography>
                    </Box>
                    {/* <SummaryButton sx={JoinBtnStyle}>
                        Join
                    </SummaryButton> */}
                    <a href="https://snapshot.org/#/whitehatdao.eth" style={{color:'#346DA1'}} target="_blank">
                        <SummaryButton sx={JoinBtnStyle}>
                                Join
                        </SummaryButton>
                    </a>
                </Box>
            </Box>
        </Grid>
    )
}