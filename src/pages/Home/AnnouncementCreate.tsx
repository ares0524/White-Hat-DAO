import { Fragment } from "react"
import * as React from 'react';
import { ManropeTypography, SummaryButton } from "@/components/CustomStyledComponents"
import { Box, Breadcrumbs, Grid, Typography, Link, Divider, Paper, InputBase, Button, Autocomplete, TextField } from "@mui/material"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WHDInfoCard } from "../blog/WHDInfoCard";

const BoxStyle = {
    borderRadius: '10px',
    border: '0.5px solid #346DA1',
    background: '#E6E7EE',
    boxShadow: '-15px -15px 20px 0px #FFF, 15px 15px 20px 0px #C9CCDA',
    padding: '30px 20px',
}

const SearchBoxStyle = {
    borderRadius: '7px',
    border: "0.5px solid #346DA1",
    background: '#E6E7EE',
    boxShadow: "5px 5px 5px 0px #C9CCDA inset, -5px -5px 5px 0px #FFF inset",
    height: '100%'
}

const EditorStyle = {
    color: '#404040',
}

const tags = [
    'Gov',
    'Token',
    'Partnership',
    'Defi',
    'Proposal',
    'Vote',
    'Cex',
    'Dex',
    'Updates',
    'Admin',
    'Site',
    'WHD',
    'News',
    'Contents',
    'New Updates',
]

export const AnnouncementCreate = () => {
    const [value, setValue] = React.useState('');

    const createTopic = () => {        
        toast.info('Coming soon', {
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

    return (
        <Fragment>
            <Grid container spacing={{lg:7,xs:3}} sx={{paddingTop:'30px!important'}}>
                <Grid md={8} item={true} width={"100%"}>
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
                                    Create a new announcement
                                </Typography>
                            </Breadcrumbs>
                        </div>

                        <Divider sx={{backgroundColor:'#346DA1',margin:'10px 0',opacity:.5}} />

                        {/* User Info */}
                        <Box display='flex' marginTop={2} color={"#404040"} alignItems={'center'}>
                            <img src="/assets/images/logo.png" width={50} style={{borderRadius:'50%'}} alt="user" />
                            <ManropeTypography sx={{fontSize:{lg:'18px',xs:'16px'}}} fontWeight={700} marginLeft={1}>
                                0xcF5b...Ce7EA43
                            </ManropeTypography>
                            <ManropeTypography sx={{fontSize:{lg:'18px',xs:'16px'}}} fontWeight={400} marginLeft={2}>
                                June 3, 2022
                            </ManropeTypography>
                        </Box>

                        {/* <Box display={'flex'} sx={{color:"#346DA1"}} alignItems={'center'} gap={1} marginTop={2}>
                            <Button sx={AddBtnStyle}>
                                <AddOutlinedIcon />
                            </Button>
                            <Typography>
                                Add Tags on your Article
                            </Typography>
                        </Box> */}

                        <Autocomplete
                            multiple
                            limitTags={5}
                            id="multiple-limit-tags"
                            options={tags}
                            getOptionLabel={(tag) => tag}
                            // defaultValue={tags[0]}
                            renderInput={(params) => (
                                <TextField {...params} label="Announcement Tags" placeholder="Tags" />
                            )}
                            sx={{ width: '100%',mt:2 }}
                        />

                        <Box marginTop={2} height={50}>
                            <Paper
                                component="form"
                                sx={SearchBoxStyle}
                                >
                                <InputBase
                                    sx={{ ml: 1, flex: 1,height: '100%' }}
                                    placeholder="Announcement title"
                                    inputProps={{ 'aria-label': 'announcement title' }}
                                    fullWidth={true}
                                    size="medium"
                                />
                            </Paper>
                        </Box>

                        <ReactQuill
                            theme="snow"
                            value={value}
                            onChange={setValue}
                            style={EditorStyle}
                        />

                        {/* Action Buttons */}
                        <Box marginTop={3} display={'flex'} gap={2}>
                            <SummaryButton onClick={createTopic} sx={{fontWeight:600,fontSize:{md:'20px',xs:'16px'}}}>
                                <AddOutlinedIcon />
                                Create Announcement
                            </SummaryButton>
                            <Button sx={{color:'#CC2D8F',textTransform:'capitalize',fontSize:{md:'20px',xs:'16px'},fontWeight:'600'}}>Cancel</Button>
                        </Box>
                    </Box>
                </Grid>

                <WHDInfoCard />
            </Grid>

            <ToastContainer />
        </Fragment>
    )
}