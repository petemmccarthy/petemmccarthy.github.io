import React from 'react'
import { Link } from 'react-router-dom'

const WorkDetail = () => (

  <div className="work-experience">

    <section>
      <b>Software Developer - answerspace Ltd (Dec 2016 – present)</b>
      <ul>
        <li>Focus on Front-End Development of cloud-based data visualisation platform using the D3.JS library and vanilla JavaScript</li>
      </ul>
      <b>Front-End Developer (contract) - British Gas Plc (May 2015 – Aug 2016)</b>
      <ul>
        <li>Utilising Agile methodologies working as part of a Scrum team rebuilding the British Gas digital journey using the EmberJS framework</li>
        <li>JavaScript was the main programming language, handlebars for templating, layout and styling implemented using Bootstrap, HTML, CSS and LESS for pre-processing</li>
      </ul>
    </section>

    <b>
      Over 10 years experience in Investment Banking at JP Morgan, Citigroup, Nomura and Barclays
    </b>
    <p>
      Experience and achievements include building out operational functions for Fixed Income
      Algorithmic trading, Alternative Asset Fund Management and Re-insurance trading businesses,
      and as FX and Derivatives Product Manager driving sales for a circa £200m p.a. profit product set.
    </p>

    <p>My full CV is available above.</p>

    <h5 className="home-page-link">
      <Link to='/'>Back to HomePage</Link>
    </h5>
  </div>

)

export default WorkDetail
