import { WHDCard, TokenNameTypography, ManropeTypography } from "@/components/CustomStyledComponents"
import { CardContent } from "@mui/material"

export const PolicyAndConstitution = () => {
    return(
        <WHDCard sx={{marginTop: '50px'}}>
            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                <TokenNameTypography textAlign="center" sx={{fontSize:{lg:'28px',md:'23px',xs:'18px'},lineHeight:{md:'normal',xs:'30px'}}}>
                    Governance Policy & Constitution
                </TokenNameTypography>
            </CardContent>

            <CardContent sx={{px:{md:'16px',xs:'10px'}}}>
                <ManropeTypography sx={{fontSize:'16px'}} fontWeight={500} color="#404040" marginTop={3}>
                    White Hat DAO is a decentralized autonomous organization. Governed by a clear set of rules and executes actions automatically. Thus, effectively disregarding intermediaries. White Hat DAO controlled by Governance token holders. It does not have any employees.  Any individuals, DAO members or development teams can propose any proposals draft via discord or community forum. Once submitted in Snapshot, the token holders will vote on whether to approve or reject these proposal.
                </ManropeTypography>
                <img style={{marginTop:'20px'}} className="DAODiagram" src="/assets/images/dao/diagram.png" width="100%" />
            </CardContent>
        </WHDCard>
    )
}