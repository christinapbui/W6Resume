import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Resume() {
    return (
        <>
        <Container className="resume-main-container">
            <Row>
                <h1 className="resume-exp">Experience</h1>
            </Row>
            <Row className="resume-exp-jobdescript">
                <h3>Sales and Marketing Manager</h3>
                <h4><i>Real-Time Analytics (RTA)</i></h4>
                <h4>Nov 2019 - Apr 2020</h4>
                <ul>
                    <li>Devised and executed strategy and content to launch re-branding of RTA and rtSurvey (web software &amp; mobile app) websites.</li> 
                    <li>Led initiative to conduct market research to gain insights for rtSurvey software and rebranding.</li>
                    <li>Managed bilingual content marketing team to produce deliverables and promote RTA branding.</li>
                    <li>Managed production of technical documents to improve user experience with rtSurvey software.</li>
                    <li>Improved user experience by identifying areas for improvement in rtSurvey software.</li>
                </ul>
            </Row>
            <Row className="resume-exp-jobdescript">
                <h3>Project Consultant</h3>
                <h4><i>Pacific Links Foundation</i></h4>
                <h4>May 2017 - Nov 2019</h4>
                <ul>
                    <li>Devised and executed strategy and content to launch re-branding of RTA and rtSurvey (web software &amp; mobile app) websites.</li> 
                    <li>Led initiative to conduct market research to gain insights for rtSurvey software and rebranding.</li>
                    <li>Managed bilingual content marketing team to produce deliverables and promote RTA branding.</li>
                    <li>Managed production of technical documents to improve user experience with rtSurvey software.</li>
                    <li>Improved user experience by identifying areas for improvement in rtSurvey software.</li>
                </ul>
            </Row>
        </Container>
        </>
    )
}
