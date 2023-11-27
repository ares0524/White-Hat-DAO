import { WHDCard, EditGrid, TokenNameTypography, ManropeTypography, SummaryBox, SummaryButton } from "@/components/CustomStyledComponents"
import { CardContent, Typography, Box } from "@mui/material"
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import { useAccount } from "wagmi";

export const GovernanceStrategy = () => {
    const AdminMetaMaskAddress = import.meta.env.VITE_METAMASK_ADDRESS;
    const AdminCoinBaseAddress = import.meta.env.VITE_COINBASE_ADDRESS;
    const { address } = useAccount();

    return(
        <WHDCard sx={{marginTop: '50px'}}>
            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                {address == AdminMetaMaskAddress || address == AdminCoinBaseAddress ? (
                    <EditGrid container sx={{display:{md:'flex',xs:"none"}}}>
                        <img src="/assets/icons/edit.svg" style={{marginRight: '7px'}} />
                        <Typography marginTop="3px">Edit</Typography>
                    </EditGrid>
                ): (null)}
                <TokenNameTypography textAlign="center" sx={{fontSize:{lg:'28px',md:'23px',xs:'18px'},lineHeight:{md:'normal',xs:'30px'}}}>
                    Governance Strategies
                </TokenNameTypography>
            </CardContent>

            <CardContent sx={{px:{md:'16px',xs:'10px'}}}>

                <SummaryButton sx={{mt:'20px',p:{md:'16px 48px',xs:'10px 20px'},fontSize:{md:'18px',xs:'16px'},fontFamily:'Pilat Extended',fontWeight:700}}>
                    Snapshot Strategy
                </SummaryButton>

                <ManropeTypography sx={{fontSize:'16px'}} fontWeight={500} color="#404040" marginTop={3}>
                    Our initial settings for voting weight of each token would be ( 1 WHD gov token = 1 vote ) weight of voting power. Future strategies may include: allocating vote weight to LP tokens to enable gov token holders who have staked, wrapped, or provided liquidity to retain voting power.
                </ManropeTypography>

                <SummaryButton sx={{mt:'20px',p:{md:'16px 48px',xs:'10px 20px'},fontSize:{md:'18px',xs:'16px'},fontFamily:'Pilat Extended',fontWeight:700}}>
                    Proposal Threshold
                </SummaryButton>

                <ManropeTypography sx={{fontSize:'16px'}} fontWeight={500} color="#404040" marginTop={3}>
                    "Proposal Threshold" is typically defined as the number of votes required to create a proposal. In White Hat DAO Snapshot Space this is done through a visual filter, to only display proposals from users who have at least the threshold number of gov tokens in their address. 
                </ManropeTypography>

                <Box marginTop={2}>
                    <Box sx={{display:'flex'}}>
                        <ManropeTypography marginTop={1} sx={{fontSize:'16px'}} fontWeight={600}>Snapshot Strategy</ManropeTypography>
                        <ManropeTypography marginTop={1} sx={{fontSize:'16px'}} fontWeight={500}> = 1 Gov Token = 1 Vote Weight</ManropeTypography>
                    </Box>

                    <Box sx={{display:'flex'}}>
                        <ManropeTypography marginTop={1} sx={{fontSize:'16px'}} fontWeight={600}>Proposal Threshold</ManropeTypography>
                        <ManropeTypography marginTop={1} sx={{fontSize:'16px'}} fontWeight={500}> = 5% of White Hat DAO Gov Tokens</ManropeTypography>
                    </Box>

                    <Box sx={{display:'flex'}}>
                        <ManropeTypography marginTop={1} sx={{fontSize:'16px'}} fontWeight={600}>Vote Duration</ManropeTypography>
                        <ManropeTypography marginTop={1} sx={{fontSize:'16px'}} fontWeight={500}> = Minimum 7 days</ManropeTypography>
                    </Box>

                    <Box sx={{display:'flex'}}>
                        <ManropeTypography marginTop={1} sx={{fontSize:'16px'}} fontWeight={600}>Minimum Vote Weight Threshold</ManropeTypography>
                        <ManropeTypography marginTop={1} sx={{fontSize:'16px'}} fontWeight={500}> = (30% of total token supply) to pass any proposal.</ManropeTypography>
                    </Box>
                </Box>

                <SummaryBox  sx={{alignItems:{lg:'center',xs:'flex-start'},px:{lg:'30px',xs:'10px'}}}>
                    <InfoSharpIcon /> &nbsp;&nbsp;
                    <ManropeTypography color="#346DA1" >
                        If this minimum vote weight is not met on a proposal, the vote will be unsuccessful even if the majority of voters voted yes.
                    </ManropeTypography>
                </SummaryBox>

                <SummaryBox  sx={{alignItems:{lg:'center',xs:'flex-start'},px:{lg:'30px',xs:'10px'}}}>
                    <InfoSharpIcon /> &nbsp;&nbsp;
                    <ManropeTypography color="#346DA1" >
                        In Snapshot, the above parameters are policies and not enforced by code. White Hat DAO will not recognize any proposals that do not comply with the above settings.
                    </ManropeTypography>
                </SummaryBox>

                <ManropeTypography sx={{fontSize:'16px'}} fontWeight={500} color="#404040" marginTop={3}>
                    The above settings can be changed via community discussion and snapshot voting in accordance with the already existing rules and regulation.
                </ManropeTypography>
            </CardContent>
        </WHDCard>
    )
}