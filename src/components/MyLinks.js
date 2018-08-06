import React from 'react'

const MyLinks = (props) => (

  <section className="float-right">
    <h3 className="name mobile-font">Pete M. McCarthy</h3>
    <h3 className="mobile-font">Front End Developer</h3>

    <div className="contact-links-container mobile-padding">
      <a className="link gmail" href="mailto: pete.m.mccarthy@gmail.com">
        <i className="fa fa-envelope fa-lg"></i>
        <div>Gmail</div>
      </a>
      <a className="link linkedin" href="https://uk.linkedin.com/in/pete-m-mccarthy-527b3093">
        <i className="fa fa-linkedin fa-lg"></i>
        <div>LinkedIn</div>
      </a>
      <a className="link github" href="https://github.com/petemmccarthy">
        <i className="fa fa-github fa-lg"></i>
        <div>GitHub</div>
      </a>
      <a className="cv" href="cv/Pete_M_McCarthy_CV.pdf">
        <i className="fa fa-file"></i>
        <div>CV</div>
      </a>
    </div>
  </section>

)

export default MyLinks
