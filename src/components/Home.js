import React from 'react'

import PersonalProjects from './PersonalProjects'
import Work from './Work'
import Profile from './Profile'

const Home = () => (

  <div>
    <Profile />
    <div className="projects-work">
      <PersonalProjects />
      <Work />
    </div>
  </div>
  
)

export default Home
