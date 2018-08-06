import React from 'react'
import { Link } from 'react-router-dom'

const Work = () => (

  <div className="work box-shadow">
    <div className="container">
      <div className="content">
        <h3>Software Developer - answerspace</h3>
        <p>Data visualisation start-up</p>
        <p><b>Main tech</b> - vanilla JS and <a href="https://www.d3js.org">d3JS</a> library </p>
        <h3>Front End Developer - British Gas</h3>
        <p>Rebuilding the British Gas digital journey</p>
        <p><b>Main tech</b> - <a href="https://www.emberjs.com">EmberJS</a> framework</p>

        <p className="details-link">
          <Link to='/work-experience'>More details...</Link>
        </p>
        <h3 className="title">Work Experience</h3>

      </div>
    </div>
  </div>

)

export default Work
