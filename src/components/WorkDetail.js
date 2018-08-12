import React from 'react'
import { Link } from 'react-router-dom'

const WorkDetail = () => (

  <div className="work-experience">

    <section>
      <h4>Software Developer - Answerspace Ltd (Dec 2016 – Jun 2018)</h4>
      <ul>
        <li>Software Developer for a data visualisation/business intelligence start-up using JavaScript, d3.js and jQuery libraries on the Front End, Java and a proprietary language FEL on the Back End</li>
        <li>My role was to enhance the main user interface which consisted of an SVG node graph and corresponding Master/Detail table</li>
        <li>Code was tested using Cucumber for Java, SourceTree and Git used for version control, workflow and defects were managed using JIRA</li>
        <li>Designing and documenting proposed solutions for user requirements covering development, testing, potential risks and mitigation and implementation</li>
        <li>Undertook some QA testing work which involved writing and executing User Acceptance Tests for User Stories and testing other developers bug fixes</li>
        <li>Analysing and enhancing customer data and performing demonstrations to ensure they could understand the benefits our software would provide them</li>
      </ul>
      <h4>Front-End Developer (contract) - British Gas Plc (May 2015 – Aug 2016)</h4>
      <ul>
        <li>Worked as part of a Scrum team rebuilding the British Gas Home Services digital journey in two week sprints</li>
        <li>My role was to bring UX designs to life using the EmberJS framework following the British Gas Style Guide</li>
        <li>As well as JavaScript and the EmberJS framework I used the jQuery library, Bootstrap 3, HTML and CSS</li>
        <li>Code was tested using Qunit - unit tests for functions/methods, integration tests for components and acceptance tests for overall user journeys</li>
        <li>GitHub was used for version control. All code was subject to peer reviewed/merged Pull Requests</li>
      </ul>
    </section>

    <h4>
      Over 10 years experience in Investment Banking at JP Morgan, Citigroup, Nomura and Barclays
    </h4>
    <p>
      Experience and achievements include building out operational functions for Fixed Income
      Algorithmic trading, Alternative Asset Fund Management and Re-insurance trading businesses,
      and as FX and Derivatives Product Manager driving sales for a circa £200m p.a. profit product set.
    </p>

    <h5 className="home-page-link">
      <Link to='/'>Back to HomePage</Link>
    </h5>
  </div>

)

export default WorkDetail
