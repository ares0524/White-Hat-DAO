import { WHDCard, EditGrid, TokenNameTypography, TitleTypography, ManropeTypography, SummaryBox, SummaryTypography, SummaryButton, ThCell, TdCell } from "@/components/CustomStyledComponents"
import { CardContent, Typography, Box } from "@mui/material"
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAccount } from "wagmi";

const TableStyle = {
    marginTop: "40px", 
    backgroundColor: '#E6E7EE',
    borderRadius: '10px',
    boxShadow: "-5px -5px 5px 0px #FFF, 5px 5px 5px 0px #C9CCDA",
}

const rows = [
    createData('White Hat DAO Treasury', "Gnosis Safe"),
    createData('Governance', "Governance"),
    createData('Governance Token', "White Hat DAO token"),
    createData('Gnosis Safe Owner', "Multi-sig"),
];

function createData(
    component: string,
    design: string,
) {
    return { component, design };
}

export const GovernanceFramework = () => {
    const AdminMetaMaskAddress = import.meta.env.VITE_METAMASK_ADDRESS;
    const AdminCoinBaseAddress = import.meta.env.VITE_COINBASE_ADDRESS;
    const { address } = useAccount();

    return(
        <WHDCard sx={{marginTop:'30px'}}>
            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                {address == AdminMetaMaskAddress || address == AdminCoinBaseAddress ? (
                    <EditGrid container sx={{display:{md:'flex',xs:"none"}}}>
                        <img src="/assets/icons/edit.svg" style={{marginRight: '7px'}} />
                        <Typography marginTop="3px">Edit</Typography>
                    </EditGrid>
                ): (null)}
                <TokenNameTypography textAlign="center" sx={{fontSize:{lg:'28px',md:'23px',xs:'18px'},lineHeight:{md:'normal',xs:'30px'}}}>
                    White Hat DAO Governance Framework
                </TokenNameTypography>
            </CardContent>

            <CardContent sx={{padding:'20px',px:{md:'16px',xs:'10px'}}}>
                <SummaryButton sx={{width:'235px',height:'45px'}}>
                    <SummaryTypography sx={{fontSize:{md:'24px',xs:'18px'}}}>Summary</SummaryTypography>
                </SummaryButton>

                <SummaryBox sx={{alignItems:{lg:'center',xs:'flex-start'},px:{lg:'30px',xs:'10px'}}}>
                    <InfoSharpIcon /> &nbsp;&nbsp;
                    <ManropeTypography color="#346DA1">
                        White Hat DAO controlled by Governance token holders. It does not have any employees and will utilize the industry standard setup of Gnosis Safe, Snapshot, off-chain governance and multi-sig administrators in accordance with WHD members and the vision of Genesis team members.
                    </ManropeTypography>
                </SummaryBox>

                <TitleTypography marginTop={3} sx={{color:"#CC2D8F", textTransform:"capitalize",fontSize:{lg:'28px',md:'23px',xs:'20px'}}} fontWeight={700}>
                    key Governance Design Choices
                </TitleTypography>
                <Box>
                    <TableContainer sx={TableStyle}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow sx={{backgroundColor:'#DDDEE8'}}>
                                <ThCell sx={{fontSize:{lg:'20px',md:'16px',xs:'14px'}}}>Component or Feature</ThCell>
                                <ThCell sx={{fontSize:{lg:'20px',md:'16px',xs:'14px'}}}>Phase 1 Design</ThCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.component}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TdCell component="td" scope="row" sx={{fontSize:'16px'}}>
                                        {row.component}
                                    </TdCell>
                                    <TdCell component='td' sx={{fontSize:'16px'}}>
                                        {row.design}
                                    </TdCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                
                <Box textAlign={'center'}>
                    <SummaryButton sx={{fontSize:{md:'22px',xs:'18px'},width:{md:'60%',xs:'100%'},mt:3}}>
                        <a href="https://snapshot.org/#/whitehatdao.eth" target="_blank">
                            Join our Snapshot Space
                        </a>
                    </SummaryButton>
                </Box>
            </CardContent>
        </WHDCard>
    )
}