import { WHDCard, TokenNameTypography } from "@/components/CustomStyledComponents"
import { CardContent } from "@mui/material"

export const Process = () => {
    return (
        <WHDCard sx={{marginTop:'80px'}}>
            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                <TokenNameTypography textAlign="center" fontSize={30}>
                    Audit Process
                </TokenNameTypography>
            </CardContent>

            <CardContent sx={{padding:'20px'}}>
                
            </CardContent>
        </WHDCard>
    )
}