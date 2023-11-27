// import { Box } from "@mui/material"
// import { Fragment } from "react"

// const firstDividerStyle = {
//     position: 'relative',
// 	marginTop: '90px',
// 	height: '1px',
//     zIndex: 10,

//     '&:before': {
//         content: "",
//         position: "absolute",
//         top: "0",
//         left: "5%",
//         right: "5%",
//         width: "50%",
//         height: "1px",
//         backgroundImage: "linear-gradient(to right, rgb(48,49,51), rgb(48,49,51))"
//     },

//     "&:after": {
//         content: "",
//         position: "absolute",
//         zIndex: 11,
//         top: "-7px",
//         left: "55%",
//         width: "14px",
//         height: "14px",
//         transform: "rotate(45deg)",
//         borderBottom: "1px solid rgb(48,49,51)",
//     }
// }

// const secondDividerStyle = {
//     content: "",
//     position: "absolute",
//     top: "10px",
//     left: "55.2%",
//     right: "5%",
//     width: "30%",
//     height: "1px",
//     backgroundImage: "linear-gradient(to right, rgb(48,49,51), rgb(48,49,51))"
// }

// export const Divider = () => {

//     return(
//         <Fragment>
//             {/* <Box sx={firstDividerStyle}></Box>
//             <Box sx={secondDividerStyle}></Box> */}
//             <div style={firstDividerStyle}></div>
//             <div style={secondDividerStyle}></div>
//         </Fragment>
//     )
// }