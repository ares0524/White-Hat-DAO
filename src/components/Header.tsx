import * as React from 'react';
import { useRoot } from "./RootContext";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { HeaderAppBar, HeaderContainer, HeaderBox, PageButton, HeaderMobileMenu, HeaderMobileMenuItem, ConnectButton } from './CustomStyledComponents';
import SVG from "./SVG";
import { useConnect, useAccount } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { formatShortWalletAddress } from "../utility/formatter";

const pages = ['Home', 'DAO', 'Audit', 'Gift Cards'];
const links = ['/home', '/dao', '/audit', '/gift-cards'];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [pageLink, setPageLink] = React.useState('');
  const [headerUnderlineCenter, setHeaderUnderlineCenter] = React.useState(1057);

  const {
    toggleWalletDialog,
    handleConnectWalletAnchor
  } = useRoot();
  const { address, isConnecting, isConnected } = useAccount();

  const { connect: _metamaskConnect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  React.useEffect(() => {
    setPageLink(window.location.pathname);    
    if (window.innerWidth < 1720) {
      setHeaderUnderlineCenter(1057 - ((1720 - window.innerWidth)/5)*4);      
    }
    window.addEventListener('resize', resize);
  }, [])

  const resize = () => {
    if (window.innerWidth < 1720) {
      setHeaderUnderlineCenter(1057 - ((1720 - window.innerWidth)/5)*4);      
    }
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HeaderAppBar position="static">
      <HeaderContainer maxWidth="xl">
        <Toolbar disableGutters >

          {/* logo */}
          <a href='/home'>
            <img 
              src='/assets/images/logo.png'
              alt='logo'
              className='headerLogo'
              width={56}
            />
          </a>

          {/* Page Buttons in Desktop Design */}
          <HeaderBox sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            {pages.map((page, key) => (
              // <PageButton
              //   key={key}
              //   onClick={handleCloseNavMenu}
              //   disableRipple
              //   sx={{ my: 2, color: '#404040', display: 'block' }}
              // >
              //   {(links[key] == pageLink)
              //   ?<a href={links[key]} style={{textDecoration:'none',color:'#CC2D8F'}}>{page}</a>
              //   :<a href={links[key]} style={{textDecoration:'none'}}>{page}</a>}
              // </PageButton>
              <a key={key} href={links[key]} style={{textDecoration:'none'}}>
                <PageButton
                  onClick={handleCloseNavMenu}
                  disableRipple
                  sx={{ my: 2, color: '#404040', display: 'block' }}
                >
                  {(links[key] == pageLink)
                  ?<span style={{textDecoration:'none',color:'#CC2D8F'}}>{page}</span>
                  :<span style={{textDecoration:'none'}}>{page}</span>}
                </PageButton>
              </a>
            ))}
          </HeaderBox>
            {
              isConnected ? (
                <ConnectButton 
                  onClick={handleConnectWalletAnchor}
                  startIcon={<SVG id="wallet" width={24} height={24} />}
                  endIcon={<KeyboardArrowDown />}
                  sx={{padding:{xl:'10px 20px',xs:'10px 15px'},display:{lg:'flex',xs:'none'},fontSize:'14px'}}
                >
                  {address && formatShortWalletAddress(address)}
                </ConnectButton>
              ) : (
                <ConnectButton onClick={toggleWalletDialog} sx={{padding:{xl:'10px 48px',lg:'10px 35px',xs:'10px 30px'},fontSize:'14px',display:{lg:'flex',xs:'none'}}}>
                  {isConnecting ? "Connecting..." : "Connect"}
                </ConnectButton>
              )
            }
          
          {/* Page Buttons in Mobile Design */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' },justifyContent:'end'}}>
            {
              isConnected ? (
                <ConnectButton 
                  onClick={handleConnectWalletAnchor}
                  startIcon={<SVG id="wallet" width={24} height={24} />}
                  endIcon={<KeyboardArrowDown />}
                  sx={{padding:{xl:'10px 20px',xs:'10px 15px'},fontSize:'14px',height:'50px'}}
                >
                  {address && formatShortWalletAddress(address)}
                </ConnectButton>
              ) : (
                <ConnectButton onClick={toggleWalletDialog} sx={{padding:{xl:'10px 48px',lg:'10px 35px',xs:'10px 30px'},fontSize:'14px',height:'50px'}}>
                  {isConnecting ? "Connecting..." : "Connect"}
                </ConnectButton>
              )
            }
            
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize='large' sx={{color:'black'}}/>
            </IconButton>
            <HeaderMobileMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px'}}>
                <a href='/home'>
                  <img 
                    src='/assets/images/logo.png'
                    alt='logo'
                    className='headerLogo'
                    width={56}
                  />
                </a>
                <HighlightOffIcon onClick={handleCloseNavMenu} fontSize='large' />
              </Box>
              {pages.map((page, key) => (
                <HeaderMobileMenuItem sx={{fontSize:{md:'30px',sm:'25px'}}} key={key}>
                  {(links[key] == pageLink)
                  ?<a href={links[key]} style={{textDecoration:'none',color:'#CC2D8F'}}>{page}</a>
                  :<a href={links[key]} style={{textDecoration:'none'}}>{page}</a>}
                </HeaderMobileMenuItem>
              ))}
            </HeaderMobileMenu>
          </Box>
        </Toolbar>

        <Box sx={{display:{lg:'flex',xs:'none'}}} justifyContent={'flex-end'}>
          <img src='/assets/images/header/line-1.png' />
          <img src='/assets/images/header/line-2.png' width={headerUnderlineCenter} />
          <img src='/assets/images/header/line-3.png' />
        </Box>
      </HeaderContainer>
    </HeaderAppBar>
  );
}
