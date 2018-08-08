import React from 'react'

import PersonalProjects from './PersonalProjects'
import Work from './Work'
import About from './About'

const Home = () => (

  <div>
    <About />
    <div className="projects-work">
      <PersonalProjects />
      <Work />
    </div>
  </div>

)

export default Home
