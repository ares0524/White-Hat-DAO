import { WHDCard, TokenNameTypography, SummaryBox, AuditTermsContent } from "@/components/CustomStyledComponents"
import { CardContent, Box } from "@mui/material"

const termsAndConditions = [
    "Audit may take 3 weeks in total or longer to complete.",
    "White Hat DAO may take 2 weeks or longer to complete a preliminary audit report for clients to review recommended feedback / suggestions.",
    "1 week for clients to review or acknowledge any issues may be found and resubmit the code for final review. ",
    "White Hat DAO doesn't apply any extra charges on reviewing the audited files.",
    "The smart contract still may contain unfound severity and security issues even after the audit is completed. ",
    "White Hat DAO may take 1 week or longer to finalize the review on resubmitted source code and deliver final security audit assessments.",
]

const ListIconStyle = {
    width: "15px",
    height: "15px",
    borderRadius: '50%',
    marginRight: '20px',
    minWidth: '15px',
    minHeight: '15px',
    maxWidth: '15px',
    maxHeight: '15px',
    backgroundColor: '#346DA1',
    marginTop: '10px'
}
export const TermsAndCondition = () => {
    return (
        <WHDCard sx={{marginTop:'80px'}}>
            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                <TokenNameTypography textAlign="center" sx={{fontSize:{lg:'30px',md:'25px',xs:'18px'}}}>
                    Terms & Conditions
                </TokenNameTypography>
            </CardContent>

            <CardContent sx={{padding:'20px'}}>
                <SummaryBox sx={{color:"#346DA1",display:'block'}}>
                    {termsAndConditions.map((item, key) => {
                        return (
                            <Box key={key} display='flex' alignItems='top' marginTop={3}>
                                <Box sx={ListIconStyle}></Box>
                                <AuditTermsContent sx={{fontSize:'16px',lineHeight:{lg:'35px',xs:'25px'}}}>
                                    {item}
                                </AuditTermsContent>
                            </Box>
                        )
                    })}
                </SummaryBox>
            </CardContent>
        </WHDCard>
    )
}