import { WHDCard, TitleTypography, ManropeTypography } from "@/components/CustomStyledComponents"
import { CardContent } from "@mui/material"
import { Fragment } from "react" 
import { GovernanceFramework } from "./GovernanceFramework";
import { PolicyAndConstitution } from "./PolicyAndConstitution";
import { GovernanceStrategy } from "./GovernanceStrategy";
import { CoreValue } from "./CoreValue";
import { ContributorsResponsibility } from "./ContributorsResponsibility";

export const DAO = () => {
    return (
        <Fragment>
            {/* DAO Governance Framework */}
            <GovernanceFramework />

            {/* Governance Policy & Constitution */}
            <PolicyAndConstitution />

            {/* Governace Strategies */}
            <GovernanceStrategy />

            {/* Core Value */}
            <CoreValue />

            {/* Comtibutors Responsibilities */}
            <ContributorsResponsibility />

            {/* White Hat DAO */}
            <WHDCard sx={{marginTop:'60px'}}>
                <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                    <TitleTypography sx={{fontSize:{lg:'30px',md:'25px',xs:'18px'},lineHeight:{md:'normal',xs:'30px'},color:"#CC2D8F", textTransform:"none"}} fontWeight={700}>
                        A message from White Hat DAO
                    </TitleTypography>
                </CardContent>

                <CardContent>
                    <ManropeTypography sx={{fontSize:'16px'}} color="#404040">
                        Please don't limit yourself, the great thing about our project is, it is relevant to all people in web3 space. We welcome anyone to get involved in our project. We also don't expect you to have a huge following (although it's always nice!) We prefer quality over quantity and commitment. Do contact us via email or Discord, if this sounds interesting to you. Thanks.
                    </ManropeTypography>
                </CardContent>
            </WHDCard>
        </Fragment>
    )
}