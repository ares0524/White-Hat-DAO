import { styled, Toolbar, Button, Container, AppBar, Typography, Card, Grid, Slider, Box, Pagination, Menu, MenuProps, alpha, IconButton, TableCell, MenuList } from "@mui/material"

// Header
export const HeaderBox = styled(Toolbar)(({}) => ({
    justifyContent: 'space-around',
    color: 'black'
}))

export const GradientButton = styled(Button)(({ theme }) => ({
    fontFamily: 'Pilat Extended',
    fontSize: '18px',
    fontWeight: '600',
    color: '#151515',
    padding: theme.spacing(2, 6),
    position: 'relative',
    border: '1px solid',
    borderImageSlice: 1,
    backgroundClip: 'padding-box',
    borderImageSource: "linear-gradient(to right, #CC2D8F, #346DA1)",
    // borderRadius: '10px',
    boxShadow: "-5px -5px 10px 0px #FFF, 5px 5px 10px 0px #C9CCDA",

    '&:hover': {
      borderImageSlice: 1,
      borderImageSource: "linear-gradient(to right, #CC2D8F, #346DA1)",
    //   borderRadius: '10px',
    }
}))

export const HeaderContainer = styled(Container)(({} ) => ({
    margin: 0,
    padding: "0px!important",
}))

export const HeaderAppBar = styled(AppBar)(({}) => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    marginTop:'10px'
}))

export const PageButton = styled(Button)(({}) => ({
    fontFamily: 'Pilat Extended',
    fontSize: '16px',
    fontWeight: '600',

    "&:hover": {
      backgroundColor:'transparent',
    },
    "& a": {
      color:'#151515'
    },
    "& a:hover": {
      color:'#CC2D8F'
    },
}))

export const HeaderMobileMenuItem = styled(Button)(({}) => ({
  fontFamily: 'Pilat Extended',
  fontSize: '16px',
  fontWeight: '600',
  display: 'grid',
  margin: 'auto',
  marginTop: '20px',

  "&:hover": {
    backgroundColor:'#E6E7EE',
  },
  "& a": {
    color:'#151515'
  },
  "& a:hover": {
    color:'#CC2D8F'
  },
}))


// Home Page
export const WHDTypography = styled(Typography)(({}) => ({
    fontFamily: "Pilat Extended",
    fontSize: "60px",
    fontStyle: "normal",
    fontWeight: "950",
    lineHeight: "normal",
    textTransform: 'uppercase',
    background: "linear-gradient(to right, #CC2D8F, #346DA1)",
    WebkitBackgroundClip: 'text',
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign:'center',
}))

export const TokenNameTypography = styled(Typography)(({}) => ({
    color: "#346DA1",
    fontFamily: "Pilat Extended",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "40px;" 
}))

export const WHDCard = styled(Card)(({}) => ({
    borderRadius: "10px",
    background: "#E6E7EE",
    boxShadow: "-15px -15px 20px 0px #FFF, 15px 15px 20px 0px #C9CCDA",
}))

export const ManropeTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Manrope",
    fontStyle: "normal",
    // fontWeight: "500",
    lineHeight: "normal",

    [theme.breakpoints.down('xs')]: {
      fontSize: '14px'
    }
}))

export const EditGrid = styled(Grid)(({}) => ({
    color: "#346DA1",
    fontFamily: "Manrope",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    textAlign: 'end',
    marginRight: '20px',
    justifyContent: 'end',

    "&:hover": {
      cursor: 'pointer'
    }
}))

export const TokenPriceRangeSlider = styled(Slider)(({}) => ({
    "& .MuiSlider-thumb": {
        display: 'none',
        pointerEvents: "none",
    },
    "& .MuiSlider-track": {
        height: "4px",
        borderRadius: "2px",
        background: "rgb(57 233 127)"
      }
}))

export const ContractBox = styled(Box)(({}) => ({
    paddingLeft: "15px",
    boxShadow: "-5px -5px 10px 0px #FFF, 5px 5px 10px 0px #C9CCDA",
    borderRadius: "10px",
    alignItems: 'center',
    width: 'fit-content',
    "& img": {
        padding: "0px 10px",
    },
    "& button": {
        width: '26px',
        minWidth: "30px"
    },
    "& .ContractBoxMenu": {
        borderRadius: "0 10px 10px 0",
        backgroundColor: "#346DA1",
        color: "white",
        minWidth: "50px",
        width: '45px'
    },
    "& .ContractBoxMenu:hover": {
        color: "#346DA1",
        backgroundColor: "white"
    }
}))

export const NetworksBox = styled(Box)(({}) => ({
    "& button": {
        color: "#346DA1",
        fontSize: '12px',
        borderRadius: '28px',
        background: '#E6E7EE',
        boxShadow: "2px 2px 5px 0px #C9CCDA inset, -2px -2px 5px 0px #FFF inset",
        padding: '5px 10px',
    }
}))

export const CustomPagination = styled(Pagination)(({}) => ({
    "& .MuiPaginationItem-root": {
        borderRadius: "10px",
        width: "30px",
        height: "10px",
    },
    "& .Mui-selected": {
        backgroundColor: "#346EA1"
    }
}))

export const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

export const TitleTypography = styled(Typography)(({}) => ({
    color: "#151515",
    textAlign: "center",
    fontFamily: "Pilat Extended",
    fontSize: "30px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 'normal',
    textTransform: 'uppercase'
}))

export const BlogButton = styled(Typography)(({}) => ({
  padding: '12px 20px',
  border: "1px solid #346DA1",
  borderRadius: '10px',
  boxShadow: "-4px -4px 5px 0px #FFF, 4px 4px 5px 0px #C9CCDA"
}))

export const FooterIconButton = styled(IconButton)(({}) => ({
  width: '66px',
  height: "66px",
  color: '#346DA1',
  boxShadow: "-4px -4px 5px 0px #FFF, 4px 4px 5px 0px #C9CCDA",
  marginRight: '15px'
}))

export const SummaryBox = styled(Box)(({}) => ({
  borderRadius: "5px",
  background: "#E6E7EE",
  boxShadow: "-7px -7px 7px 0px #FFF inset, 7px 7px 7px 0px #C9CCDA inset",
  color: '#346EA1',
  display:'flex',
  alignItems: 'center',
  padding: '20px 30px',
  margin: '20px 0'
}))

export const JoinDiscussionButton = styled(GradientButton)(({}) => ({
  color: "#346DA1",
  fontFamily: "Manrope",
  fontSize: "20px",
  fontWeight: "600",
  padding: "11px 20px",
  width: '100%',
  marginTop: '15px',
  textTransform: "capitalize"
}))

export const TagTypography = styled(Typography)(({}) => ({
  padding: '3px 10px',
  gap: '10px',
  borderRadius: '50px',
  boxShadow: "2px 2px 5px 0px #C9CCDA, -2px -2px 5px 0px #FFF",
}))

export const CreateTopicButton = styled(GradientButton)(({}) => ({
  fontSize: '16px'
}))

export const ServiceSubTitle = styled(TokenNameTypography)(({}) => ({
  textAlign: 'center',
  fontSize: '22px',
  fontWeight: 700,
  textTransform: 'uppercase',
  lineHeight: "normal",
  height: '58px'
}))

export const SummaryTypography = styled(TitleTypography)(({}) => ({
  fontFamily: 'Pilat Extended', 
  fontWeight: "700", 
  color: "#CC2D8F",
  textTransform: 'capitalize',
}))

export const SummaryButton = styled(Button)(({}) => ({
  borderRadius: "10px",
  background: "#E6E7EE",
  boxShadow: "-5px -5px 10px 0px #FFF, 5px 5px 10px 0px #C9CCDA",
  textTransform: "none",

  "& a": {
    textDecoration: 'none',
    color: '#CC2D8F'
  }
}))

export const ThCell = styled(TableCell)(({}) => ({
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  textAlign: 'center',
  color: '#346DA1'
}))

export const TdCell = styled(TableCell)(({}) => ({
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  textAlign: 'center',
  color: '#404040',
}))

export const JoinSnapshotButton = styled(GradientButton)(({}) => ({
  color: "#346DA1",
  fontFamily: "Manrope",
  fontWeight: "600",
  padding: "11px 20px",
  marginTop: '30px',
  textTransform: "capitalize",
  justifyContent: 'center'
}))

export const GovernanceButton = styled(GradientButton)(({}) => ({
  padding: '16px 48px',
  fontSize: '24px',
  textTransform: 'capitalize',
  color:'#346DA1'
}))

export const CoreValueTitle = styled(Button)(({}) => ({
  fontWeight:'700',
  textTransform:'capitalize',
  color:'#404040!important',
}))

export const AuditApplyButton = styled(Button)(({}) => ({
  display: "inline-flex",
  padding: "10px 20px",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  borderRadius: "5px",
  border: "0.3px solid #346DA1",
  background: "#E6E7EE",
  boxShadow: "-4px -4px 5px 0px #FFF, 4px 4px 5px 0px #C9CCDA",
  textTransform: 'none',
  color: "#CC2D8F",
  textAlign: "center",
  fontFamily: "Manrope",
  fontStyle: "normal ",
  fontWeight: "700",
}))

export const AuditServiceTitle = styled(Typography)(({}) => ({
  color: "#404040",
  textAlign: "center",
  fontFamily: "Pilat Extended",
  fontSize: "30px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
}))

export const AuditServiceBox = styled(Box)(({}) => ({
  borderRadius: "10px",
  border: "0.3px solid #346DA1",
  background: "#E6E7EE",
  boxShadow: "-15px -15px 20px 0px #FFF, 15px 15px 20px 0px #C9CCDA",
  textAlign: 'center',
  padding: '20px',
  lineHeight: '24px'
}))

export const AuditTermsContent = styled(ManropeTypography)(({}) => ({
  fontWeight:"500", 
  color:"#404040",
}))

export const AuditReportContent = styled(ManropeTypography)(({}) => ({
  fontWeight: "500",
  color: "#404040",
}))

export const CustomBox = styled(Box)(({}) => ({
  borderRadius: '10px',
  border: '0.5px solid #346DA1',
  background: '#E6E7EE',
  boxShadow: '-15px -15px 20px 0px #FFF, 15px 15px 20px 0px #C9CCDA',
  padding: '30px 20px',
      
  "& .MuiListItem-padding": {
      padding: '12px 15px',
      borderRadius: '5px'
  },

  "& img": {
      marginRight: '10px'
  }
}))

export const HeaderMobileMenu = styled(Menu)(({}) => ({
  "& .MuiPaper-root": {
    borderRadius: "10px",
    background: "#E6E7EE",
    boxShadow: "-15px -15px 20px 0px #FFF, 15px 15px 20px 0px #C9CCDA",
    width: '90%',
    height: '100%',
    marginLeft: '5%',
    marginTop: '20px',
    top: '0px!important',
    left: '0px!important'
  }
}))

export const ConnectButton = styled(SummaryButton)(({}) => ({
  fontSize: '18px',
  color: '#151515',
  fontWeight: 600,
  lineHeight: '30px',
  fontFamily: 'Pilat Extended',
  textTransform: 'uppercase'
}))

export const ContractAddressMenu = styled(MenuList)(({}) => ({
  backgroundColor:'#E6E7EE',
  borderRadius: '5px',
  boxShadow: '-15px -15px 20px 0px #FFF, 15px 15px 20px 0px #C9CCDA',

  "& .MuiMenuItem-root":{
    borderRadius:'5px',
    margin:'10px'
  }
}))

export const AnnouncementTitle = styled(ManropeTypography)(({}) => ({
  "&:hover":{
    cursor: 'pointer'
  }
}))
