import React from 'react'
import { Link } from 'react-router-dom'

const Work = () => (

  <div className="work box-shadow">
    <div className="container">
      <img src="work_code.jpg" alt="people at computer"></img>
      <div className="content">
        <h2 className="mobile-title">Work Experience</h2>

        <h3>Software Developer</h3>
        <p><b>Who? </b><a href="https://www.answerspace.com">Answerspace</a> - business-intel start-up</p>
        <p><b>What? </b>Enhancing the main user interface</p>
        <p><b>With? </b>Vanilla JS, <a href="https://www.d3js.org">d3.js</a> library and Java</p>

        <h3>Front End Developer</h3>
        <p><b>Who? </b><a href="https://www.britishgas.co.uk/home-services.html">
          British Gas</a> - large energy supplier</p>
        <p><b>What? </b>Rebuilding the online journey</p>
        <p><b>With? </b><a href="https://www.emberjs.com">EmberJS</a> framework</p>

        <p className="details-link">
          <Link to='/work-experience'>More details...</Link>
        </p>
        <h3 className="title">Work Experience</h3>

      </div>
    </div>
  </div>

)

export default Work
