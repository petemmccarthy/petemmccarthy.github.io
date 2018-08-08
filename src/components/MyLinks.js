import React from 'react'

const MyLinks = () => (

  <section className="float-right">
    <h3 className="name">Pete M. McCarthy</h3>
    <h3 className="">Front End Developer</h3>

    <div className="contact-links-container">
      <a className="link gmail" href="mailto: pete.m.mccarthy@gmail.com">
        <i className="fa fa-envelope fa-lg"></i>
        <p>Gmail</p>
      </a>
      <a className="link linkedin" href="https://uk.linkedin.com/in/pete-m-mccarthy-527b3093">
        <i className="fa fa-linkedin fa-lg"></i>
        <p>LinkedIn</p>
      </a>
      <a className="link github" href="https://github.com/petemmccarthy">
        <i className="fa fa-github fa-lg"></i>
        <p>GitHub</p>
      </a>
      <a className="cv" href="cv/Pete_M_McCarthy_CV.pdf">
        <i className="fa fa-file"></i>
        <p>CV</p>
      </a>
    </div>
  </section>

)

export default MyLinks
