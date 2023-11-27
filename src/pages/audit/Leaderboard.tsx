import * as React from "react";
import { Paper, IconButton, Box, Button, InputBase, MenuItem, Grid } from "@mui/material";
import { AuditServiceTitle, StyledMenu, TdCell, ThCell } from "@/components/CustomStyledComponents";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
// import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
import { ManropeTypography } from '@/components/CustomStyledComponents';
import CircularProgress from '@mui/material/CircularProgress';
// import GppGoodIcon from '@mui/icons-material/GppGood';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Link } from "react-router-dom";

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

// interface TablePaginationActionsProps {
//     count: number;
//     page: number;
//     rowsPerPage: number;
//     onPageChange: (
//       event: React.MouseEvent<HTMLButtonElement>,
//       newPage: number,
//     ) => void;
// }

const TableStyle = {
  marginTop: "40px", 
  backgroundColor: '#E6E7EE',
  borderRadius: '10px',
  boxShadow: "-15px -15px 20px 0px #FFF, 15px 15px 20px 0px #C9CCDA",
}

const SearchBoxStyle = {
  borderRadius: '7px',
  border: "0.5px solid #346DA1",
  background: '#E6E7EE',
  boxShadow: "5px 5px 5px 0px #C9CCDA inset, -5px -5px 5px 0px #FFF inset",
}
  
// function TablePaginationActions(props: TablePaginationActionsProps) {
//   const theme = useTheme();
//   const { count, page, rowsPerPage, onPageChange } = props;

//   const handleFirstPageButtonClick = (
//     event: React.MouseEvent<HTMLButtonElement>,
//   ) => {
//     onPageChange(event, 0);
//   };

//   const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     onPageChange(event, page - 1);
//   };

//   const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     onPageChange(event, page + 1);
//   };

//   const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
//   };

//   return (
//     <Box sx={{ flexShrink: 0, ml: 2.5 }}>
//       <IconButton
//         onClick={handleFirstPageButtonClick}
//         disabled={page === 0}
//         aria-label="first page"
//       >
//         {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
//       </IconButton>
//       <IconButton
//         onClick={handleBackButtonClick}
//         disabled={page === 0}
//         aria-label="previous page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//       </IconButton>
//       <IconButton
//         onClick={handleNextButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="next page"
//       >
//         {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//       </IconButton>
//       <IconButton
//         onClick={handleLastPageButtonClick}
//         disabled={page >= Math.ceil(count / rowsPerPage) - 1}
//         aria-label="last page"
//       >
//         {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
//       </IconButton>
//     </Box>
//   );
// }

function createData(name: string, report:string, score: number, website: string, onboard_date: string) {
  return { name, report, score, website, onboard_date };
}

const rows = [
  createData('Hundred Finance', 'https://github.com/WhiteHatDAO/Smart-Contract-Security-Audits-by-White-Hat-DAO/blob/main/Audit_Report_Hundred_Finance%20(2).pdf', 88, "hundred.finance", "26-04-2022"),
  createData('CCNFT', "https://github.com/WhiteHatDAO/Smart-Contract-Security-Audits-by-White-Hat-DAO/blob/main/CCNFT%20Audit%20Report.pdf", 90, "N/A", "12-04-2022"),
  createData('Frangments NFT', "https://github.com/WhiteHatDAO/Smart-Contract-Security-Audits-by-White-Hat-DAO/blob/main/Frangments%20NFT%20Audit%20Report.pdf", 88, "frangmentsnft.xyz", "26-04-2022"),
];  

export const Leaderboard = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [page] = React.useState(0);
    const [rowsPerPage] = React.useState(5);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    // const handleChangePage = (
    //     event: React.MouseEvent<HTMLButtonElement> | null,
    //     newPage: number,
    //     ) => {
    //         setPage(newPage);
    //     };

    // const handleChangeRowsPerPage = (
    //     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    //     ) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0);
    //     };
        

    return (
        <React.Fragment>
            <AuditServiceTitle mt={5} sx={{fontSize:{xl:'30px',lg:'25px',md:'23px',xs:'20px'}}}>
                Audit Leaderboard
            </AuditServiceTitle>

            <Box sx={{display:'flex',justifyContent:'space-between'}} marginTop={5}>

                <Grid container spacing={2}>
                  <Grid lg={2} md={3} sm={6} xs={6} className="auditLeaderboardCategory" item={true}>
                      <Button
                          id="demo-customized-button"
                          aria-controls={open ? 'demo-customized-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          variant="contained"
                          disableElevation
                          sx={DropDownBtnStyle}
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDownIcon />}
                      >
                          Blockchain
                      </Button>
                      <StyledMenu
                          id="demo-customized-menu"
                          MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                      >
                          <MenuItem>Menu 1</MenuItem>
                          <MenuItem>Menu 2</MenuItem>
                          <MenuItem>Menu 3</MenuItem>
                      </StyledMenu>
                  </Grid>

                  <Grid lg={2} md={3} sm={6} xs={6} className="auditLeaderboardCategory" item={true}>
                      <Button
                          id="demo-customized-button"
                          aria-controls={open ? 'demo-customized-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          variant="contained"
                          disableElevation
                          sx={DropDownBtnStyle}
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDownIcon />}
                      >
                          Category
                      </Button>
                      <StyledMenu
                          id="demo-customized-menu"
                          MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                      >
                          <MenuItem>Menu 1</MenuItem>
                          <MenuItem>Menu 2</MenuItem>
                          <MenuItem>Menu 3</MenuItem>
                      </StyledMenu>
                  </Grid>

                  <Grid lg={8} md={6} sm={12} xs={12} className="auditLeaderboardInputBox" item={true}>
                      <Paper
                          component="form"
                          sx={SearchBoxStyle}
                          >
                          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                              <SearchIcon />
                          </IconButton>
                          <InputBase
                              sx={{ ml: 1, flex: 1 }}
                              placeholder="Search Projects"
                              inputProps={{ 'aria-label': 'search projects' }}
                          />
                      </Paper>
                  </Grid>
              </Grid>
            </Box>

            <TableContainer component={Paper} sx={TableStyle}>
                <Table sx={{ minWidth: 350 }} aria-label="custom pagination table">
                <TableHead sx={{backgroundColor: '#DDDEE8'}}>
                    <TableRow>
                    <ThCell sx={{fontSize:{lg:'20px',md:'16px',xs:'14px'}}}>Name</ThCell>
                    <ThCell sx={{fontSize:{lg:'20px',md:'16px',xs:'14px'},display:{md:'revert',xs:'none'}}}>Audit Reports</ThCell>
                    <ThCell sx={{fontSize:{lg:'20px',md:'16px',xs:'14px'}}}>Safety Score</ThCell>
                    <ThCell sx={{fontSize:{lg:'20px',md:'16px',xs:'14px'}}}>Website</ThCell>
                    <ThCell sx={{fontSize:{lg:'20px',md:'16px',xs:'14px'},display:{md:'revert',xs:'none'}}}>Onboard date</ThCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(rowsPerPage > 0
                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rows
                    ).map((row, index) => (
                    <TableRow key={index}>
                        <TdCell sx={{padding:{lg:'16px',md:'8px',xs:'0'},fontSize:'16px'}}>
                            {row.name}
                        </TdCell>
                        <TdCell sx={{padding:{lg:'16px',md:'8px',xs:'0'},fontSize:'16px',display:{md:'revert',xs:'none'}}}>
                            {/* {row.report == 2
                                ?<Box sx={{display:'flex', justifyContent: 'center'}}>
                                    <Box sx={{margin: "0 10px"}}>
                                        <FileCopyIcon fontSize="large" sx={{ color: '#059235'}} /> 
                                        <ManropeTypography fontSize={10} color="#059235">
                                            WHD
                                        </ManropeTypography>
                                    </Box>
                                    <Box sx={{margin: "0 10px"}} color='#346DA1'>
                                    <FileCopyIcon fontSize="large" sx={{ color: '#059235'}} /> 
                                        <ManropeTypography fontSize={10} color="#059235">
                                            EXTERNAL
                                        </ManropeTypography>
                                    </Box>
                                </Box>
                                : */}
                                <Box sx={{margin: "0 10px"}} color="#346DA1">
                                    <Link to={row.report} target="_blank">
                                        <FileCopyIcon fontSize="large" sx={{ color: '#059235'}} /> 
                                        <ManropeTypography fontSize={10} color="#059235">
                                            WHD
                                        </ManropeTypography>
                                    </Link>
                                </Box>
                            {/* } */}
                        </TdCell>
                        <TdCell sx={{padding:{lg:'16px',md:'8px',xs:'0'},fontSize:'16px'}}>
                            <Box>
                                <CircularProgress sx={{color: '#059235'}} variant="determinate" value={row.score}  />
                                <Box
                                sx={{
                                    top: -35,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                >
                                <ManropeTypography
                                    variant="caption"
                                    color="#404040"
                                >{row.score}%</ManropeTypography>
                                </Box>
                            </Box>
                        </TdCell>
                        <TdCell sx={{padding:{lg:'16px',md:'8px',xs:'0'},fontSize:'16px'}}>
                            {
                                row.website != 'N/A' ? (
                                    <a href={`https://${row.website}`} style={{color:"#151515"}} target="_blank">
                                        {row.website}
                                    </a>
                                ) :( row.website )
                            }
                        </TdCell>
                        <TdCell sx={{padding:{lg:'16px',md:'8px',xs:'0'},fontSize:{lg:'20px',xs:'16px'},display:{md:'revert',xs:'none'}}}>
                            {row.onboard_date}
                        </TdCell>
                    </TableRow>
                    ))}
                    {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                    </TableRow>
                    )}
                </TableBody>
                {/* <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                              inputProps: {
                                'aria-label': 'rows per page',
                              },
                              native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter> */}
                </Table>
            </TableContainer>
            
            {/* <Box sx={{marginTop:"40px"}}>
                <Pagination 
                    sx={{margin: 'auto'}} 
                    rowsperpage={5}
                    count={rows.length} 
                    page={page}
                    onChange={handleChangePage}
                    variant="outlined" 
                    shape="rounded" 
                />
            </Box> */}
        </React.Fragment>
    )
}