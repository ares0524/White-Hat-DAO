// import * as React from "react";
import { Box, Autocomplete, TextField } from "@mui/material";
// import { StyledMenu } from "@/components/CustomStyledComponents";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import SearchIcon from '@mui/icons-material/Search';

// const DropDownBtnStyle = {
//     background: '#E6E7EE',
//     boxShadow: "-5px -5px 10px 0px #FFF, 5px 5px 10px 0px #C9CCDA",
//     padding: '10px 20px',
//     color: "#404040",
//     border: '1px solid #346EA1',
//     borderImageSlice: 1,
//     backgroundClip: 'padding-box',
//     width: '100%',
//     justifyContent: 'space-between'
// }

// const SearchBoxStyle = {
//     borderRadius: '7px',
//     border: "0.5px solid #346DA1",
//     background: '#E6E7EE',
//     boxShadow: "5px 5px 5px 0px #C9CCDA inset, -5px -5px 5px 0px #FFF inset",
// }

const tags = [
    'DAO',
    'Governance',
    'Web3',
    'Defi',
    'Proposal',
    'Partnership',
    'General',
    'Grants',
    'Educational',
]

export const Search = () => {
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //   setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };

    return (
        // <Grid container marginTop={3} spacing={2} sx={{marginTop:'50px!important'}}>
        //     <Grid lg={2} md={3} sm={4} className="searchCategory" item={true}>
        //         <Button
        //             id="demo-customized-button"
        //             aria-controls={open ? 'demo-customized-menu' : undefined}
        //             aria-haspopup="true"
        //             aria-expanded={open ? 'true' : undefined}
        //             variant="contained"
        //             disableElevation
        //             sx={DropDownBtnStyle}
        //             onClick={handleClick}
        //             endIcon={<KeyboardArrowDownIcon />}
        //         >
        //             Tags
        //         </Button>
        //         <StyledMenu
        //             id="demo-customized-menu"
        //             MenuListProps={{
        //             'aria-labelledby': 'demo-customized-button',
        //             }}
        //             anchorEl={anchorEl}
        //             open={open}
        //             onClose={handleClose}
        //         >
        //             <MenuItem>DAO</MenuItem>
        //             <MenuItem>Governance</MenuItem>
        //             <MenuItem>Web3</MenuItem>
        //             <MenuItem>Defi</MenuItem>
        //             <MenuItem>Proposal</MenuItem>
        //             <MenuItem>Partnership</MenuItem>
        //             <MenuItem>General</MenuItem>
        //             <MenuItem>Grants</MenuItem>
        //             <MenuItem>Educational</MenuItem>
        //         </StyledMenu>
        //     </Grid>

        //     <Grid lg={10} md={9} sm={8} className="searchInputBox" item={true}>
        //         <Paper
        //             component="form"
        //             sx={SearchBoxStyle}
        //             >
        //             <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        //                 <SearchIcon />
        //             </IconButton>
        //             <InputBase
        //                 sx={{ ml: 1, flex: 1 }}
        //                 placeholder="Search Projects"
        //                 inputProps={{ 'aria-label': 'search projects' }}
        //             />
        //         </Paper>
        //     </Grid>
        // </Grid>
        <Box marginTop={"70px"}>
            <Autocomplete
                multiple
                limitTags={5}
                id="multiple-limit-tags"
                options={tags}
                getOptionLabel={(tag) => tag}
                // defaultValue={tags[0]}
                renderInput={(params) => (
                    <TextField {...params} label="Topic Tags" placeholder="Tags" />
                )}
                sx={{ width: '100%',mt:2 }}
            />
        </Box>
    )
}