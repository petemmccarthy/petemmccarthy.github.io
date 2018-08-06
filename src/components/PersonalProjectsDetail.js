import React from 'react'
import { Link } from 'react-router-dom'

const PersonalProjectsDetail = () => (

  <div className="example-projects">
    <p>Ppersonal projects are done in my spare time, will probably never be
      'finished' and are mostly used for me try out new things or enhance my knowledge.
    </p>

    <h3>React</h3>
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

    <h3>EmberJS</h3>
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

    <h5 className="home-page-link">
      <Link to='/'>Back to HomePage</Link>
    </h5>
  </div>

)

export default PersonalProjectsDetail
