import React from 'react'
import { Link } from 'react-router-dom'

const PersonalProjectsDetail = () => (

  <div className="example-projects">
    <p>Personal projects are done in my spare time and are mostly used for me to try new
      things or enhance my knowledge and will, therefore, probably never be "finished".
    </p>
    <p>Click 'Octocat' for more detail in the 'Readme' of each project.</p>

    <div className="projects-list">
      <img src="favicon.ico" className="icons" alt="react logo"></img>
      <h2 className="framework-library">React</h2>
      <ul class="fa-ul">
        <li>
          <a className="" href="https://github.com/petemmccarthy/to-do-app">
            <i className="fa-li fa fa-github fa-lg"></i>
          </a>To do list
        </li>

        <li>
          <a className="" href="https://github.com/petemmccarthy/simple_calc">
            <i className="fa-li fa fa-github fa-lg"></i>
          </a>Basic Calculator
        </li>

        <li>
          <a className="" href="https://github.com/petemmccarthy/petemmccarthy.github.io">
            <i className="fa-li fa fa-github fa-lg"></i>
          </a>This site!
        </li>
      </ul>

      <div>
      <img src="emberjs.jpg" className="icons" alt="ember logo"></img>
      <h2 className="framework-library">EmberJS</h2>
      </div>
      <ul class="fa-ul">
        <li>
          <a className="" href="https://github.com/petemmccarthy/far-flung-feasts">
            <i className="fa-li fa fa-github fa-lg"></i>
          </a>Far Flung Feasts
        </li>

        <li>
          <a className="" href="https://github.com/petemmccarthy/web_shop">
            <i className="fa-li fa fa-github fa-lg"></i>
          </a>Pet shop
        </li>
      </ul>
    </div>

    <h5 className="home-page-link">
      <Link to='/'>Back to HomePage</Link>
    </h5>
  </div>

)

export default PersonalProjectsDetail
