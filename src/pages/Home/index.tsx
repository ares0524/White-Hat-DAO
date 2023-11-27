import * as React from 'react';
import { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Box, Button, CardContent, ClickAwayListener, Divider, Grid, Grow, MenuItem, Pagination, Paper, Popper, Typography } from "@mui/material";
import { WHDTypography, TokenNameTypography, WHDCard, ManropeTypography, TokenPriceRangeSlider, ContractBox, NetworksBox, SummaryButton, ContractAddressMenu, EditGrid, AnnouncementTitle } from "@/components/CustomStyledComponents";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MenuIcon from '@mui/icons-material/Menu';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Search } from "./Search";
import { Services } from "./Services";
import { Brand } from "./Brands";
import { Blog } from "./Blogs";
import { Topics } from "./Topics";
import { useAccount } from 'wagmi';
import { formatShortWalletAddress } from '@/utility/formatter';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';

const WHDTokenDetailsStyle = {
    margin: "15px",
    marginTop: '20px',
    backgroundColor: '#DDDEE8',
    borderRadius: "10px",
    paddingBottom: "5px!important"
}

const WHDPriceDownStyle = {
    position: 'relative',
    top: '-15px',
    left:'-8px'
}

const BuySellBtnStyle = {
    borderRadius: '28px',
    background: '#E6E7EE',
    boxShadow: "2px 2px 5px 0px #C9CCDA inset, -2px -2px 5px 0px #FFF inset",
    padding: '3px 10px'
}

export const Home = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const AdminMetaMaskAddress = import.meta.env.VITE_METAMASK_ADDRESS;
    const AdminCoinBaseAddress = import.meta.env.VITE_COINBASE_ADDRESS;
    const ContractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
    const { address } = useAccount();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
        anchorRef.current &&
        anchorRef.current.contains(event.target as HTMLElement)
        ) {
        return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
        } else if (event.key === 'Escape') {
        setOpen(false);
        }
    }

    const viewAnnouncement = (id: string) => {
        window.localStorage.setItem("announcement", id);
        window.open('/announcement/detail', '_blank')
    }

    const goToAnnounceCreate = () => {
        window.open('/announcement/create', '_blank')
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(ContractAddress);
        toast.success('Copied to clipboard!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Fragment>
            <Grid container spacing={6} sx={{paddingTop:'30px!important'}}>
                <Grid lg={7} item={true} display={'grid'}>
                    <WHDCard sx={{display:'grid'}}>
                        <CardContent sx={{px:{md:'16px',xs:'10px'},display:'grid'}}>
                            {address == AdminMetaMaskAddress || address == AdminCoinBaseAddress ? (
                                <EditGrid container sx={{display:{md:'flex',xs:"none"},alignItems:'center'}}>
                                    <img src="/assets/icons/edit.svg" style={{marginRight: '7px'}} />
                                    <Typography marginTop="3px">Edit</Typography>
                                </EditGrid>
                            ): (null)}
                            <WHDTypography sx={{ fontSize: {xs:'24px',md:'35px',lg:'40px',xl:'45px'}}}>
                                White Hat DAO
                            </WHDTypography>
                            <ManropeTypography marginTop={2} fontSize={16}>
                                Safety and security should be at the heart of all platforms, especially pubic goods services, 
                                which is why we are passionate about providing technical support and high level security integration for projects 
                                from all blockchains and backgrounds.
                            </ManropeTypography>
                            <SummaryButton sx={{ mt:2,width:'100%',display: {md:'block',xs:'none'}, fontSize: {xl:'20px',lg:'16px'}}}>
                                <a href="https://snapshot.org/#/whitehatdao.eth" target="_blank">
                                    Join the WHD Discussion on Governance / Proposals / Blogposts
                                </a>
                            </SummaryButton>
                            <SummaryButton sx={{ mt:2,width:'100%',display: {md:'none',xs:'block'}}}>
                                <a href="https://snapshot.org/#/whitehatdao.eth" target="_blank">
                                    Join the WHD Discussion
                                </a>
                            </SummaryButton>
                        </CardContent>
                    </WHDCard>

                    <WHDCard sx={{marginTop:6}}>
                        <CardContent sx={{backgroundColor: '#DDDEE8',px:{md:'16px',xs:'10px'}}}>
                            {address == AdminMetaMaskAddress || address == AdminCoinBaseAddress ? (
                                <EditGrid onClick={goToAnnounceCreate} container sx={{display:{md:'flex',xs:"none"},alignItems:'center'}}>
                                    {/* <img src="/assets/icons/edit.svg" style={{marginRight: '7px'}} /> */}
                                    <AddIcon />
                                    <Typography marginTop="3px">Add</Typography>
                                </EditGrid>
                            ): (null)}
                            <Box sx={{display: 'flex',alignItems:'center'}}>
                                <CircleNotificationsIcon sx={{color:'#346DA1',fontSize: {md:'32px',xs:'24px'}}} />
                                <TokenNameTypography fontWeight={700} marginLeft={1} sx={{ fontSize: {xl:'24px',lg:'20px',xs:'16px'},lineHeight:{md:'40px',xs:'20px'} }}>
                                    Announcements & Updates
                                </TokenNameTypography>
                            </Box>
                        </CardContent>
                        <Box display={'grid'}>
                            <CardContent sx={{px:{md:'16px',xs:'10px'}}}>
                                <Box sx={{backgroundColor: '#DDDEE8', borderRadius:'10px'}} padding={1} marginTop={1}>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}} padding={1}>
                                        <Box sx={{display:'flex', alignItems:'center'}}>
                                            <AnnouncementTitle fontWeight={700} fontSize={16} onClick={() => viewAnnouncement('0')}>
                                                White Hat DAO Governance Token Launch !!
                                            </AnnouncementTitle>
                                            {address == AdminMetaMaskAddress || address == AdminCoinBaseAddress ? (
                                                <Button>
                                                    <DeleteIcon fontSize='small' />
                                                </Button>
                                            ): (null)}
                                        </Box>
                                        <ManropeTypography 
                                            fontSize={20} 
                                            sx={{color: '#727272', display:{md:'block',xs:'none'},fontSize:'16px'}} fontWeight={400}>
                                            26-04-2023
                                        </ManropeTypography>
                                    </Box>

                                    <Box sx={{display: {md:'flex',xs:'block'}, justifyContent: 'space-between',color: "#404040"}} padding={1}>
                                        <Box sx={{display: 'flex',alignItems:'center'}}>
                                            <ManropeTypography fontSize={20} fontWeight={400} sx={{fontSize:'16px'}}>
                                                How do investors benefit by investing in White Hat DAO 
                                            </ManropeTypography>
                                            <InfoOutlinedIcon sx={{position:'relative',mt:'5px',ml:'10px'}} fontSize="small" />
                                        </Box>

                                        <Box sx={{display:{md:'block',xs:'flex',alignItems:'center'},mt: {md:'0',xs:'10px'},justifyContent:'space-between'}}>
                                            <NetworksBox sx={{display: 'flex',gap:{md:1,xs:0.5}}} >
                                                <Button><span style={{color: "#346DA1"}}>Gov</span></Button>
                                                <Button><span style={{color: "#346DA1"}}>Token</span></Button>
                                            </NetworksBox>

                                            <ManropeTypography fontSize={20} sx={{color: '#727272', display:{md:'none',xs:'block'},fontSize:'16px'}} fontWeight={400}>
                                                26-04-2023
                                            </ManropeTypography>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{backgroundColor: '#DDDEE8', borderRadius:'10px'}} padding={1} marginTop={1}>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}} padding={1}>
                                        <Box sx={{display:'flex', alignItems:'center'}}>
                                            <AnnouncementTitle fontWeight={700} fontSize={16} onClick={() => viewAnnouncement('1')}>
                                                Gov Token use case
                                            </AnnouncementTitle>
                                            {address == AdminMetaMaskAddress || address == AdminCoinBaseAddress ? (
                                                <Button>
                                                    <DeleteIcon fontSize='small' />
                                                </Button>
                                            ): (null)}
                                        </Box>
                                        <ManropeTypography 
                                            fontSize={20} 
                                            sx={{color: '#727272', display:{md:'block',xs:'none'},fontSize:'16px'}} fontWeight={400}>
                                            26-04-2023
                                        </ManropeTypography>
                                    </Box>

                                    <Box sx={{display: {md:'flex',xs:'block'}, justifyContent: 'space-between',color: "#404040"}} padding={1}>
                                        <Box sx={{display: 'flex',alignItems:'center'}}>
                                            <ManropeTypography fontSize={20} fontWeight={400} sx={{fontSize:'16px'}}>
                                                White Hat DAO is a valuable resource for individuals looking...
                                            </ManropeTypography>
                                            <InfoOutlinedIcon sx={{position:'relative',mt:'5px',ml:'10px'}} fontSize="small" />
                                        </Box>

                                        <Box sx={{display:{md:'block',xs:'flex',alignItems:'center'},mt: {md:'0',xs:'10px'},justifyContent:'space-between'}}>
                                            <NetworksBox sx={{display: 'flex',gap:{md:1,xs:0.5}}} >
                                                <Button><span style={{color: "#346DA1"}}>Token</span></Button>
                                                <Button><span style={{color: "#346DA1"}}>Utility</span></Button>
                                            </NetworksBox>

                                            <ManropeTypography fontSize={20} sx={{color: '#727272', display:{md:'none',xs:'block'},fontSize:'16px'}} fontWeight={400}>
                                                26-04-2023
                                            </ManropeTypography>
                                        </Box>
                                    </Box>
                                </Box>

                                <Box sx={{backgroundColor: '#DDDEE8', borderRadius:'10px'}} padding={1} marginTop={1}>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}} padding={1}>
                                        <Box sx={{display:'flex', alignItems:'center'}}>
                                            <AnnouncementTitle fontWeight={700} fontSize={16} onClick={() => viewAnnouncement('2')}>
                                                Token listing and community airdrop
                                            </AnnouncementTitle>
                                            {address == AdminMetaMaskAddress || address == AdminCoinBaseAddress ? (
                                                <Button>
                                                    <DeleteIcon fontSize='small' />
                                                </Button>
                                            ): (null)}
                                        </Box>
                                        <ManropeTypography 
                                            fontSize={20} 
                                            sx={{color: '#727272', display:{md:'block',xs:'none'},fontSize:'16px'}} fontWeight={400}>
                                            26-04-2023
                                        </ManropeTypography>
                                    </Box>

                                    <Box sx={{display: {md:'flex',xs:'block'}, justifyContent: 'space-between',color: "#404040"}} padding={1}>
                                        <Box sx={{display: 'flex',alignItems:'center'}}>
                                            <ManropeTypography fontSize={20} fontWeight={400} sx={{fontSize:'16px'}}>
                                                More details will be coming up soon regarding Centralized...
                                            </ManropeTypography>
                                            <InfoOutlinedIcon sx={{position:'relative',mt:'5px',ml:'10px'}} fontSize="small" />
                                        </Box>

                                        <Box sx={{display:{md:'block',xs:'flex',alignItems:'center'},mt: {md:'0',xs:'10px'},justifyContent:'space-between'}}>
                                            <NetworksBox sx={{display: 'flex',gap:{md:1,xs:0.5}}} >
                                                <Button><span style={{color: "#346DA1"}}>Token</span></Button>
                                                <Button><span style={{color: "#346DA1"}}>Cex</span></Button>
                                            </NetworksBox>

                                            <ManropeTypography fontSize={20} sx={{color: '#727272', display:{md:'none',xs:'block'},fontSize:'16px'}} fontWeight={400}>
                                                26-04-2023
                                            </ManropeTypography>
                                        </Box>
                                    </Box>
                                </Box>

                            </CardContent>
                            
                            <Pagination
                                sx={{margin:'auto',mb:1}}
                                count={5}
                                color='primary'
                            />
                        </Box>
                    </WHDCard>
                </Grid>

                <Grid lg={5} item={true} sx={{width:'100%'}}>
                    <WHDCard>
                        <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                            {address == AdminMetaMaskAddress || address == AdminCoinBaseAddress ? (
                                <EditGrid container sx={{display:{md:'flex',xs:"none"},alignItems:'center'}}>
                                    <img src="/assets/icons/edit.svg" style={{marginRight: '7px'}} />
                                    <Typography marginTop="3px">Edit</Typography>
                                </EditGrid>
                            ): (null)}
                            <TokenNameTypography sx={{fontSize:{xl:'20px',md:'17px',xs:'14px'},lineHeight:{xl:'40px',xs:'30px'}}}>
                                White Hat DAO Gov Token Details
                            </TokenNameTypography>
                        </CardContent>
                        <CardContent sx={WHDTokenDetailsStyle}>
                            <Box>
                                <Grid container>
                                    <img src="/assets/images/logo.png" width={40} className="WHDTokenState" />
                                    <TokenNameTypography sx={{fontSize:{md:"16px",xs:'14px'},lineHeight:{md:'40px',xs:'20px'}}}>
                                        White Hat DAO Token (WHDT)
                                    </TokenNameTypography>
                                </Grid>
                                <Grid container marginTop={2}>
                                    <Grid xs={6} item={true}>
                                        <ManropeTypography fontSize={16} color="#7C7C7C">
                                            Token Price
                                        </ManropeTypography>

                                        <ManropeTypography sx={{fontSize:'20px'}} color="#404040">
                                            $0.10
                                        </ManropeTypography>

                                        <ManropeTypography fontSize={16} sx={WHDPriceDownStyle} color="#16c784">
                                            <ArrowDropUpIcon style={{position: "relative",top: "10px"}} fontSize="large" /> 1%
                                        </ManropeTypography>
                                    </Grid>

                                    <Grid xs={6} item={true}>
                                        <ManropeTypography fontSize={16} color="#7C7C7C">
                                            Market cap
                                        </ManropeTypography>

                                        <ManropeTypography sx={{fontSize:'20px'}} color="#404040">
                                            $4,080,000
                                        </ManropeTypography>

                                        <ManropeTypography fontSize={16} sx={WHDPriceDownStyle} color="#16c784">
                                            <ArrowDropUpIcon style={{position: "relative",top: "10px"}} fontSize="large" /> 1%
                                        </ManropeTypography>
                                    </Grid>

                                </Grid>
                                <TokenPriceRangeSlider
                                    aria-label="Temperature"
                                    defaultValue={30}
                                />
                                <Box style={{justifyContent: "space-between", display: 'flex'}}>
                                    <ManropeTypography fontSize={16} color="#404040">$0.1002</ManropeTypography>
                                    <ManropeTypography fontSize={16} color="#404040">24H Range</ManropeTypography>
                                    <ManropeTypography fontSize={16} color="#404040">$0.122</ManropeTypography>
                                </Box>
                                <Box style={{justifyContent: "space-between", display: 'flex'}} marginTop={3}>
                                    <ManropeTypography sx={{fontSize:'16px'}} color="#7C7C7C">Circulating Supply</ManropeTypography>
                                    <ManropeTypography sx={{fontSize:'16px'}} color="#404040" fontWeight={600}>68,000,000</ManropeTypography>
                                </Box>
                                <Box style={{justifyContent: "space-between", display: 'flex'}} marginTop={2}>
                                    <ManropeTypography sx={{fontSize:'16px'}} color="#7C7C7C">Total Supply</ManropeTypography>
                                    <ManropeTypography sx={{fontSize:'16px'}} color="#404040" fontWeight={600}>100,000,000</ManropeTypography>
                                </Box>
                                <Box style={{justifyContent: "space-between", display: 'flex'}} marginTop={2}>
                                    <ManropeTypography sx={{fontSize:'16px'}} color="#7C7C7C">All time high</ManropeTypography>
                                    <ManropeTypography sx={{fontSize:'16px'}} color="#404040" fontWeight={600}>$0.20</ManropeTypography>
                                </Box>
                                <Box style={{justifyContent: "space-between", display: 'flex'}} marginTop={2} marginBottom={2}>
                                    <ManropeTypography sx={{fontSize:'16px'}} color="#7C7C7C">All time low</ManropeTypography>
                                    <ManropeTypography sx={{fontSize:'16px'}} color="#404040" fontWeight={600}>$0.06</ManropeTypography>
                                </Box>

                                <Divider />

                                <ManropeTypography marginTop={2} fontSize={16} color="#7C7C7C">Contract Address</ManropeTypography>
                                <ContractBox color="#404040" marginTop={1} sx={{display: 'flex'}}>
                                    <Button onClick={copyToClipboard}>
                                        <ContentCopyIcon />
                                    </Button>
                                    <img src="/assets/images/web3/ethereum.svg" width={30} />
                                    <ManropeTypography sx={{fontSize:'16px'}} color="#346DA1" paddingRight={1}>
                                        {formatShortWalletAddress(ContractAddress)}
                                    </ManropeTypography>
                                    <Button 
                                        ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={open ? 'composition-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleToggle}    
                                        className="ContractBoxMenu"
                                    >
                                        <MenuIcon fontSize="large" />
                                    </Button>
                                    {/* <Button
                                        ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={open ? 'composition-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                                        >
                                        <MenuIcon fontSize="large" />
                                    </Button> */}
                                </ContractBox>
                                <Popper
                                    open={open}
                                    anchorEl={anchorRef.current}
                                    role={undefined}
                                    placement="bottom-start"
                                    transition
                                    disablePortal
                                    sx={{zIndex:10}}
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                                            }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                <ContractAddressMenu
                                                    autoFocusItem={open}
                                                    id="composition-menu"
                                                    aria-labelledby="composition-button"
                                                    onKeyDown={handleListKeyDown}
                                                    
                                                >
                                                    <MenuItem 
                                                        onClick={handleClose}
                                                        sx={{display:'flex',justifyContent:'space-between',textAlign:'center',backgroundColor:'#DDDEE8',margin:'10px'}}
                                                    >
                                                        <img src='/assets/images/web3/ethereum.svg' width={40} />
                                                        Ethereum
                                                        <Button>
                                                            <ContentCopyIcon />
                                                        </Button>
                                                    </MenuItem>

                                                    <MenuItem 
                                                        onClick={handleClose}
                                                        sx={{display:'flex',justifyContent:'space-between',textAlign:'center',backgroundColor:'#DDDEE8'}}
                                                    >
                                                        <Box sx={{width:'40px',borderRadius:'50%',backgroundColor:'rgba(40, 160, 240, 0.10)'}}>
                                                            <img src='/assets/images/web3/arbiscan.png' width={'24'} height={'28'} />
                                                        </Box>
                                                        Arbitrum
                                                        <Button>
                                                            <ContentCopyIcon />
                                                        </Button>
                                                    </MenuItem>

                                                    <MenuItem 
                                                        onClick={handleClose}
                                                        sx={{display:'flex',justifyContent:'space-between',textAlign:'center',backgroundColor:'#DDDEE8'}}
                                                    >
                                                        <Box sx={{width:'40px',borderRadius:'50%',backgroundColor:'rgba(130, 71, 229, 0.10)'}}>
                                                            <img src='/assets/images/web3/polygon.svg' width={'24'} />
                                                        </Box>
                                                        Polygon
                                                        <Button>
                                                            <ContentCopyIcon />
                                                        </Button>
                                                    </MenuItem>

                                                    <MenuItem 
                                                        onClick={handleClose}
                                                        sx={{display:'flex',justifyContent:'space-between',textAlign:'center',backgroundColor:'#DDDEE8'}}
                                                    >
                                                        <Box sx={{width:'40px',borderRadius:'50%',backgroundColor:'rgba(243, 186, 47, 0.10)'}}>
                                                            <img src='/assets/images/web3/binance.svg' width={'24'} />
                                                        </Box>
                                                        Binance
                                                        <Button>
                                                            <ContentCopyIcon />
                                                        </Button>
                                                    </MenuItem>

                                                    <MenuItem 
                                                        onClick={handleClose}
                                                        sx={{display:'flex',justifyContent:'space-between',textAlign:'center',backgroundColor:'#DDDEE8'}}
                                                    >
                                                        <Box sx={{width:'40px',borderRadius:'50%',backgroundColor:'rgba(44, 125, 247, 0.10)'}}>
                                                            <img src='/assets/images/web3/tezos.svg' width={'21'} />
                                                        </Box>
                                                        Tezos
                                                        <Button>
                                                            <ContentCopyIcon />
                                                        </Button>
                                                    </MenuItem>
                                                </ContractAddressMenu>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>

                                <ManropeTypography marginTop={2} fontSize={16} color="#7C7C7C">Networks</ManropeTypography>
                                <NetworksBox display={'flex'} gap={1}>
                                    <Button>ETHEREUM</Button>
                                    {/* <Button>Polygon</Button>
                                    <Button>Optimism</Button> */}
                                </NetworksBox>

                                <Box marginTop={2} marginBottom={1} sx={{display: 'flex', justifyContent: 'space-between',alignItems:'center'}}>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between',alignItems:'center'}}>
                                        <img src="/assets/images/web3/mexc.png" width={40} height={30} className="tokenDetailSwapIcon" />
                                        <ManropeTypography sx={{fontSize:'14px'}} color="#404040" fontWeight={600} marginLeft={1}>
                                            MEXC
                                        </ManropeTypography>
                                    </Box>
                                    <ManropeTypography sx={{fontSize:'14px'}} color="#346DA1" fontWeight={600} marginLeft={1}>
                                        WHDT/ETH
                                    </ManropeTypography>
                                    <Button style={BuySellBtnStyle} sx={{fontSize:{xl:'14px',lg:'12px',xs:'10px'}}}>
                                        <span style={{color: '#059235'}}>Buy</span> &nbsp;
                                        <span style={{color: '#404040'}}>/</span> &nbsp;
                                        <span style={{color: '#CC2D8F'}}>Sell</span>
                                    </Button>
                                </Box>

                                <Divider />

                                <Box marginTop={1} marginBottom={1} sx={{display: 'flex', justifyContent: 'space-between',alignItems:'center'}}>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between',alignItems:'center'}}>
                                        <img src="/assets/images/web3/p2b.png" width={30} height={30} className="tokenDetailSwapIcon" />
                                        <ManropeTypography sx={{fontSize:'14px'}} color="#404040" fontWeight={600} marginLeft={1}>
                                            P2B
                                        </ManropeTypography>
                                    </Box>
                                    <ManropeTypography sx={{fontSize:'14px'}} color="#346DA1" fontWeight={600}>
                                        WHDT/WETH
                                    </ManropeTypography>
                                    <Button style={BuySellBtnStyle} sx={{fontSize:{xl:'14px',lg:'12px',xs:'10px'}}} >
                                        <span style={{color: '#059235'}}>Buy</span> &nbsp;
                                        <span style={{color: '#404040'}}>/</span> &nbsp;
                                        <span style={{color: '#CC2D8F'}}>Sell</span>
                                    </Button>
                                </Box>

                                <Divider />

                                <Box marginTop={1} sx={{display: 'flex', justifyContent: 'space-between',alignItems:'center'}}>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between',alignItems:'center'}}>
                                        <img src="/assets/images/web3/1inch.png" width={30} height={30} className="tokenDetailSwapIcon" />
                                        <ManropeTypography sx={{fontSize:'14px'}} color="#404040" fontWeight={600} marginLeft={1}>
                                            1inch
                                        </ManropeTypography>
                                    </Box>
                                    <Link to="https://app.1inch.io/#/1/simple/swap/ETH/WHDT" target='_blank' style={{textDecoration:'none'}}>
                                        <ManropeTypography sx={{fontSize:'14px'}} color="#346DA1" fontWeight={600}>
                                            WHDT/WETH
                                        </ManropeTypography>
                                    </Link>
                                    <Link to="https://app.1inch.io/#/1/simple/swap/ETH/WHDT" target='_blank' style={{textDecoration:'none'}}>
                                        <Button style={BuySellBtnStyle} sx={{fontSize:{xl:'14px',lg:'12px',xs:'10px'}}} >
                                            <span style={{color: '#059235'}}>Buy</span> &nbsp;
                                            <span style={{color: '#404040'}}>/</span> &nbsp;
                                            <span style={{color: '#CC2D8F'}}>Sell</span>
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </CardContent>
                    </WHDCard>
                    
                    <ToastContainer />
                </Grid>
            </Grid>

            <Search />

            {/* <Table /> */}
            <Topics />
            
            <Services />
            
            <Brand />

            <Blog />
            
        </Fragment>
    )
}
