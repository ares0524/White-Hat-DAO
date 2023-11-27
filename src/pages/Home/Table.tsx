import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { ManropeTypography } from '@/components/CustomStyledComponents';
import CircularProgress from '@mui/material/CircularProgress';
import { Pagination } from '@mui/material';

// interface TablePaginationActionsProps {
//   count: number;
//   page: number;
//   rowsPerPage: number;
//   onPageChange: (
//     event: React.MouseEvent<HTMLButtonElement>,
//     newPage: number,
//   ) => void;
// }

const TableStyle = {
  marginTop: "40px", 
  backgroundColor: '#E6E7EE',
  borderRadius: '10px',
  boxShadow: "-15px -15px 20px 0px #FFF, 15px 15px 20px 0px #C9CCDA",
}

const ThStyle = {
  fontSize: '20px',
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  textAlign: 'center',
  color: '#346DA1'
}

const TdStyle = {
  fontSize: '20px',
  fontFamily: "Manrope",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  textAlign: 'center',
  color: '#404040',
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

function createData(name: string, score: number, price: string, market_cap: string, onboard_date: string) {
  return { name, score, price, market_cap, onboard_date };
}

const rows = [
  createData('The Idols NFT', 88, "N/A", "N/A", "26-04-2022"),
  createData('Hundred Finance', 90, "$0.2158", "31.87B", "12-04-2022"),
  createData('The Idols NFT', 88, "N/A", "N/A", "26-04-2022"),
  createData('Hundred Finance', 90, "$0.2158", "31.87B", "12-04-2022"),
  createData('The Idols NFT', 88, "N/A", "N/A", "26-04-2022"),
  
].sort((a, b) => (a.name < b.name ? -1 : 1));

export default function CustomPaginationActionsTable() {
  const [page] = React.useState(0);
  const [rowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <React.Fragment>
      <TableContainer component={Paper} sx={TableStyle}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead sx={{backgroundColor: '#DDDEE8'}}>
            <TableRow>
              <TableCell sx={ThStyle}>Name</TableCell>
              <TableCell sx={ThStyle}>Audit Reports</TableCell>
              <TableCell sx={ThStyle}>Safety Score</TableCell>
              <TableCell sx={ThStyle}>Price</TableCell>
              <TableCell sx={ThStyle}>Market Cap</TableCell>
              <TableCell sx={ThStyle}>Onboard date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow key={index}>
                <TableCell  sx={TdStyle}>
                  {row.name}
                </TableCell>
                <TableCell sx={TdStyle}>
                  <Box sx={{display:'flex', justifyContent: 'center'}}>
                    <Box sx={{margin: "0 10px"}}>
                      <FileCopyIcon sx={{ color: '#059235'}} /> 
                      <ManropeTypography fontSize={10} color="#059235">
                        WHD
                      </ManropeTypography>
                    </Box>
                    <Box sx={{margin: "0 10px"}}>
                      <FileCopyIcon sx={{ color: '#059235'}} />
                      <ManropeTypography fontSize={10} color="#346DA1">
                        EXTERNAL
                      </ManropeTypography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={TdStyle}>
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
                </TableCell>
                <TableCell sx={TdStyle}>
                  {row.price}
                </TableCell>
                <TableCell sx={TdStyle}>
                  {row.market_cap}
                </TableCell>
                <TableCell sx={TdStyle}>
                  {row.onboard_date}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Box sx={{marginTop:"40px"}}>
        <Pagination sx={{margin: 'auto'}} count={500} variant="outlined" shape="rounded" />
      </Box>
    </React.Fragment>
  );
}
