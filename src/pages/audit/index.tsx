import { Fragment } from "react"
import { DueDiligenceAuditing } from "./DueDiligenceAuditing"
import { Services } from "./Services"
// import { Process } from "./Process"
import { TermsAndCondition } from "./TermsAndCondition"
import { Report } from "./Report"
import { Leaderboard } from "./Leaderboard"

export const Audit = () => {
    return(
        <Fragment>
            {/* Due-Diligence / Auditing */}
            <DueDiligenceAuditing />

            {/* Services */}
            <Services />

            {/* Audit Process */}
            {/* <Process /> */}

            {/* Terms & Conditions */}
            <TermsAndCondition />

            {/* Audit report */}
            <Report />

            {/* Leaderboard */}
            <Leaderboard />
        </Fragment>
    )
}