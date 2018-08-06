import React from 'react'
import { Link } from 'react-router-dom'

const PersonalProjects = () => (

  <div className="projects box-shadow">
    <div className="container">
      <div className="content">
        <h3>React</h3>
        <li>The classic 'To Do' list</li>
        <li>Basic Calculator</li>
        <li><i>and this site!</i></li>
        <h3>EmberJS</h3>
        <li>Far Flung Feasts global recipes</li>
        <li>Pet shop</li>

        <p className="details-link">
          <Link to='/personal-projects'>More details...</Link>
        </p>
        <h3 className="title">Personal Projects</h3>

      </div>
    </div>
  </div>
  
)

export default PersonalProjects
