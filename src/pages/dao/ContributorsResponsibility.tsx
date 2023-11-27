import { WHDCard, TokenNameTypography, ManropeTypography, SummaryButton } from "@/components/CustomStyledComponents"
import { CardContent, Box, Grid, List, ListItem, Divider } from "@mui/material"

const ListIconStyle = {
    width: "15px",
    height: "15px",
    border: '1px solid #346DA1',
    borderRadius: '50%',
    boxShadow: "-4px -4px 5px 0px #FFF, 4px 4px 5px 0px #C9CCDA",
    marginRight: '10px',
    minWidth: '15px',
    minHeight: '15px',
    maxWidth: '15px',
    maxHeight: '15px',
}

const adminDuties = [
    'Facilitate weekly meetings Facilitate work sessions',
    'Facilitate work sessions',
    'Take and facilitate meeting notes',
    'Ensure that members are up to speed with important project info',
    'Assist in the formulation of key deliverables',
    'Track and remind team of action items',
    'Organize and direct people to the right information',
    'Liaison with others to ensure that objectives are aligned',
    'Facilitate fair compensation to DAO members for their contribution',
    'Project management',
    'Team management',
    'Technical Development',
    'Payroll, Quotation & Bookkeeping  ( manage - A/C payable - A/C receivable )',
    'Client management',
    'Advertising / Marketing',
    'Treasury management',
    'Community management',
    "Promote WHD and it's values",
    'Maintain and moderating Community to create safe environment'
]

const devDuties = [
    'Research, design, develop, and test blockchain technologies',
    'Brainstorm and help evaluate applications for new tools and technologies as they continually evolve',
    'Maintain and extend current client- and server-side applications responsible for integration and business logic',
    'Payroll, Quotation & Bookkeeping  ( manage - A/C payable - A/C receivable )',
    'Be involved in the global blockchain community—work on implementing and integrating the latest improvement proposals',
    'Demonstrate and provide information about project products/services',
    'Document new solutions as well as maintaining that of existing ones '
]

const ambassadorDuties = [
    "Promote WHD and it's values",
    "Oversee development of social media plan/strategy",
    "Liaison with content promoter and coordinator to direct talents/influencers to projects",
    "Create a positive image for the project and encourage people to join",
    "Mention and direct to the DAO on social media platforms",
    "Retweet and promote DAO products/services/initiatives",
    "Formulate strategies for growing users/followers",
    "Maintain and moderating Community to create safe environment",
    "On-boarding newcomers into the DAO"
]

export const ContributorsResponsibility = () => {
    return (
        <WHDCard sx={{marginTop: '50px'}}>
            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                <TokenNameTypography textAlign="center" sx={{fontSize:{lg:'30px',md:'25px',xs:'18px'},lineHeight:{md:'normal',xs:'30px'}}}>
                    Contributors Responsibilities
                </TokenNameTypography>
            </CardContent>

            <CardContent sx={{px:{md:'16px',xs:'10px'}}}>
                <SummaryButton sx={{mt:'20px',p:{md:'16px 48px',xs:'10px 20px'},fontSize:{md:'18px',xs:'16px'},fontFamily:'Pilat Extended',fontWeight:700}}>
                    Overview
                </SummaryButton>

                <ManropeTypography sx={{fontSize:'16px'}} fontWeight={500} color="#404040" marginTop={3}>
                    The nature and scope of this project is enormous. It will require a team of dedicated and highly committed individuals to keep things running. For the purposes of promoting accountability and enhancing commitments, the following roles are created. Dedicated project champions willing to stake time and put in the sweat to get the project running on a daily basis.
                </ManropeTypography>

                <Grid container spacing={5}>
                    <Grid md={6} item={true} marginTop={3}>
                        <WHDCard>
                            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                                <TokenNameTypography textAlign="center" sx={{fontSize:{md:'22px',xs:'20px'},lineHeight:{md:'30px',xs:'25px'},mt:{md:'20px',xs:'5px'}}} marginTop={2}>
                                    Administration's Responsibilities
                                </TokenNameTypography>
                            </CardContent>

                            <CardContent sx={{px:{md:'16px',xs:'10px'}}}>
                                <List>
                                    {adminDuties.map((duty, key) => {
                                        return(
                                            <Box key={key}>
                                                <ListItem>
                                                    <Box sx={ListIconStyle}></Box>
                                                    <ManropeTypography sx={{fontSize:'16px'}} fontWeight={500} color="#404040">
                                                        {duty}
                                                    </ManropeTypography>
                                                </ListItem>
                                                {key != adminDuties.length-1?<Divider sx={{backgroundColor:'#346DA1',margin:'5px 15px',opacity:.5}} component="li" />:null}
                                            </Box>
                                        )
                                    })}
                                </List>
                            </CardContent>
                        </WHDCard>

                        <WHDCard sx={{marginTop:'60px'}}>
                            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                                <TokenNameTypography textAlign="center" sx={{fontSize:{md:'22px',xs:'20px'},lineHeight:{md:'30px',xs:'25px'},mt:{md:'20px',xs:'5px'}}} marginTop={2}>
                                    Who can apply for the ambassador role ?
                                </TokenNameTypography>
                            </CardContent>

                            <CardContent sx={{px:{md:'16px',xs:'10px'}}}>
                                <Box padding={2} sx={{backgroundColor:'#DDDEE8'}}>
                                    <ManropeTypography sx={{fontSize:'16px'}} fontWeight={500} color="#404040">
                                        The nature and scope of this project is enormous. It will require a team of dedicated and highly committed individuals to keep things running. For the purposes of promoting accountability and enhancing commitments, the following roles are created. Dedicated project champions willing to stake time and put in the sweat to get the project running on a daily basis.
                                    </ManropeTypography>
                                </Box>
                            </CardContent>
                        </WHDCard>
                    </Grid>

                    <Grid md={6} item={true} marginTop={3}>
                        <WHDCard>
                            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                                <TokenNameTypography textAlign="center" sx={{fontSize:{md:'22px',xs:'20px'},lineHeight:{md:'30px',xs:'25px'},mt:{md:'20px',xs:'5px'}}} marginTop={2}>
                                Developers Responsibilities
                                </TokenNameTypography>
                            </CardContent>

                            <CardContent sx={{px:{md:'16px',xs:'10px'}}}>
                                <Box padding={2} sx={{backgroundColor:'#DDDEE8'}}>
                                    <ManropeTypography sx={{fontSize:'16px'}} fontWeight={500} color="#404040">
                                        Devs will be responsible for designing, implementing, and creating smart contracts and integration them in the platform. And maintain the protocol with up to date blockchain technology in the market. 
                                    </ManropeTypography>
                                </Box>
                                <List>
                                    {devDuties.map((duty, key) => {
                                        return(
                                            <Box key={key}>
                                                <ListItem>
                                                    <Box sx={ListIconStyle}></Box>
                                                    <ManropeTypography sx={{fontSize:'16px'}} fontWeight={500} color="#404040">
                                                        {duty}
                                                    </ManropeTypography>
                                                </ListItem>
                                                {key != adminDuties.length-1?<Divider sx={{backgroundColor:'#346DA1',margin:'5px 15px',opacity:.5}} component="li" />:null}
                                            </Box>
                                        )
                                    })}
                                </List>
                            </CardContent>
                        </WHDCard>

                        <WHDCard sx={{marginTop:'60px'}}>
                            <CardContent sx={{backgroundColor: '#DDDEE8'}}>
                                <TokenNameTypography textAlign="center" sx={{fontSize:{md:'22px',xs:'20px'},lineHeight:{md:'30px',xs:'25px'},mt:{md:'20px',xs:'5px'}}} marginTop={2}>
                                Community Ambassadors
                                </TokenNameTypography>
                            </CardContent>

                            <CardContent sx={{px:{md:'16px',xs:'10px'}}}>
                                <List>
                                    {ambassadorDuties.map((duty, key) => {
                                        return(
                                            <Box key={key}>
                                                <ListItem>
                                                    <Box sx={ListIconStyle}></Box>
                                                    <ManropeTypography sx={{fontSize:'16px'}} fontWeight={500} color="#404040">
                                                        {duty}
                                                    </ManropeTypography>
                                                </ListItem>
                                                {key != adminDuties.length-1?<Divider sx={{backgroundColor:'#346DA1',margin:'5px 15px',opacity:.5}} component="li" />:null}
                                            </Box>
                                        )
                                    })}
                                </List>
                            </CardContent>
                        </WHDCard>
                    </Grid>
                </Grid>
            </CardContent>
        </WHDCard>
    )
}