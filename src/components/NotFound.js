import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (

  <div className="not-found">
    <h2>
      Looks like this page doesn't exist.
    </h2>
    <h2>
      <i><Link to='/'> Let's go back!</Link></i>
    </h2>
  </div>

)

export default NotFound
