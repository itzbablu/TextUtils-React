import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div style={props.style}>
      <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid" style={props.style} >
      <a className="navbar-brand " style={props.style} href="/">{props.title}</a>
      <button className="navbar-toggler" style={props.style} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={props.style}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"style={props.style}>
         
        </ul>
        <div className="form-check form-switch" style={props.style}>
        <input className="form-check-input" onClick={props.handler} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" onClick={props.handler} htmlFor="flexSwitchCheckDefault">{props.mode}</label>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  home : PropTypes.string.isRequired,
  abouttitle: PropTypes.string.isRequired,
  searchtitle: PropTypes.string.isRequired
}