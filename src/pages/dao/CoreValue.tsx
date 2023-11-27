import { WHDCard, EditGrid, TokenNameTypography, ManropeTypography, NetworksBox, CoreValueTitle } from "@/components/CustomStyledComponents"
import { CardContent, Typography } from "@mui/material"
import { useAccount } from "wagmi";

export const CoreValue = () => {
    const AdminMetaMaskAddress = import.meta.env.VITE_METAMASK_ADDRESS;
    const AdminCoinBaseAddress = import.meta.env.VITE_COINBASE_ADDRESS;
    const { address } = useAccount();

    return (
        <WHDCard sx={{marginTop: '50px'}}>
            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                {address == AdminMetaMaskAddress || address == AdminCoinBaseAddress ? (
                    <EditGrid container sx={{display:{md:'flex',xs:"none"}}}>
                        <img src="/assets/icons/edit.svg" style={{marginRight: '7px'}} />
                        <Typography marginTop="3px">Edit</Typography>
                    </EditGrid>
                ): (null)}
                <TokenNameTypography textAlign="center" sx={{fontSize:{lg:'30px',md:'25px',xs:'18px'},lineHeight:{md:'normal',xs:'30px'}}}>
                    Core value
                </TokenNameTypography>
            </CardContent>

            <CardContent sx={{px:{md:'16px',xs:'10px'}}}>
                <NetworksBox sx={{display:{lg:'flex',xs:'block'}}} marginTop={2}>
                    <CoreValueTitle sx={{fontSize:{xl:'16px!important',lg:'14px!important'}}}>Promoting Safety & Security</CoreValueTitle>
                    <ManropeTypography sx={{xl:'22px',lg:'16px'}} fontWeight={500} display="flex" alignItems='center' color="#404040">
                        -Our mission is to promote safety, security & best practices throughout the web3 communities.
                    </ManropeTypography>
                </NetworksBox>

                <NetworksBox sx={{display:{lg:'flex',xs:'block'}}} marginTop={2}>
                    <CoreValueTitle sx={{fontSize:{xl:'16px!important',lg:'14px!important'}}}>Transparency</CoreValueTitle>
                    <ManropeTypography sx={{xl:'22px',lg:'16px'}} fontWeight={500} display="flex" alignItems='center' color="#404040">
                        -Everything we do is decentralized including governance and payroll
                    </ManropeTypography>
                </NetworksBox>

                <NetworksBox sx={{display:{lg:'flex',xs:'block'}}} marginTop={2}>
                    <CoreValueTitle sx={{fontSize:{xl:'16px!important',lg:'14px!important'}}}>Self-Sovereignty</CoreValueTitle>
                    <ManropeTypography sx={{xl:'22px',lg:'16px'}} fontWeight={500} display="flex" alignItems='center' color="#404040">
                        -We enable individuals to decide what they work on
                    </ManropeTypography>
                </NetworksBox>

                <NetworksBox sx={{display:{lg:'flex',xs:'block'}}} marginTop={2}>
                    <CoreValueTitle sx={{fontSize:{xl:'16px!important',lg:'14px!important'}}}>Fair Compensation</CoreValueTitle>
                    <ManropeTypography sx={{xl:'22px',lg:'16px'}} fontWeight={500} display="flex" alignItems='center' color="#404040">
                        -We create sustainable revenue streams that flow to contributors
                    </ManropeTypography>
                </NetworksBox>

                <NetworksBox sx={{display:{lg:'flex',xs:'block'}}} marginTop={2}>
                    <CoreValueTitle sx={{fontSize:{xl:'16px!important',lg:'14px!important'}}}>Integrity</CoreValueTitle>
                    <ManropeTypography sx={{xl:'22px',lg:'16px'}} fontWeight={500} display="flex" alignItems='center' color="#404040">
                        -We protect each other, our brand identity, and our clients above all else
                    </ManropeTypography>
                </NetworksBox>

                <NetworksBox sx={{display:{lg:'flex',xs:'block'}}} marginTop={2}>
                    <CoreValueTitle sx={{fontSize:{xl:'16px!important',lg:'14px!important'}}}>Honesty</CoreValueTitle>
                    <ManropeTypography sx={{xl:'22px',lg:'16px'}} fontWeight={500} display="flex" alignItems='center' color="#404040">
                        -We admit failure. We work through challenges. We hold each other accountable.
                    </ManropeTypography>
                </NetworksBox>

                <NetworksBox sx={{display:{lg:'flex',xs:'block'}}} marginTop={2}>
                    <CoreValueTitle sx={{fontSize:{xl:'16px!important',lg:'14px!important'}}}>Curiosity</CoreValueTitle>
                    <ManropeTypography sx={{xl:'22px',lg:'16px'}} fontWeight={500} display="flex" alignItems='center' color="#404040">
                        -We facilitate contributors' and clients' interests in how Web3 technology will change business forever
                    </ManropeTypography>
                </NetworksBox>
            </CardContent>
        </WHDCard>
    )
}