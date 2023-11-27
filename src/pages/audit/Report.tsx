import { WHDCard, TokenNameTypography, AuditReportContent } from "@/components/CustomStyledComponents"
import { CardContent } from "@mui/material"

export const Report = () => {
    return (
        <WHDCard sx={{marginTop:'80px'}}>
            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                <TokenNameTypography textAlign="center" sx={{fontSize:{lg:'30px',md:'25px',xs:'18px'}}}>
                    What is In The Audit Report?
                </TokenNameTypography>
            </CardContent>

            <CardContent sx={{padding:'30px'}}>
                <AuditReportContent sx={{fontSize:'16px',lineHeight:{lg:'35px',xs:'25px'}}}>
                    Our audit reports are custom, thorough, and transparent. The report will contain the details of any identified vulnerabilities and classify them by severity (Critical, Major, Medium, Low, and Informational), along with suggested remediations.
                </AuditReportContent>
                <AuditReportContent sx={{fontSize:'16px',lineHeight:{lg:'35px',xs:'25px'}}} marginTop={2}>
                    With every successful audit, we'll provide you with a listing on the W-HAT Safety rating leaderboard that is shared publicly with the entire crypto community. The Leaderboard contains the details of projects alongside their audit reports, as well as the community’s security sentiment of the project.
                </AuditReportContent>
            </CardContent>
        </WHDCard>
    )
}