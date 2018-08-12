import React from 'react'
import { Link } from 'react-router-dom'

const PersonalProjects = () => (

  <div className="personal-projects box-shadow">
    <div className="container">
      <img src="personal_code.jpg" alt="computer code"></img>
      <div className="content">

        <h2 className="mobile-title">Personal Projects</h2>

        <h3>Built with React</h3>
        <li>The classic 'To Do' list</li>
        <li>Basic Calculator</li>
        <li><i>and this site!</i></li>
        <h3>Built with EmberJS</h3>
        <li>Far Flung Feasts, food from your travels</li>
        <li>Pet Shop</li>

        <p className="details-link">
          <Link to='/personal-projects'>More details...</Link>
        </p>

        <h3 className="title">Personal Projects</h3>

      </div>
    </div>
  </div>

)

export default PersonalProjects
