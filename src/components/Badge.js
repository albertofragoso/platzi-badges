import React, { Component } from 'react'
import './styles/Badge.css'

import confLogo from '../images/badge-header.svg'

class Badge extends Component {
  render() {
    return <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>
      <div className="Badge__section-name">
        <img className="Badge__avatar" src="https://avatars0.githubusercontent.com/u/24305046?s=460&v=4" alt="Usuario de la conferencia" />
        <h1>Alberto <br /> Fragoso</h1>
      </div>
      <div className="Badge__section-info">
        <p>Full Stack Web Developer</p>
        <div>albertofragoso.com</div>
      </div>
      <div className="Badge__footer">
        #platziconf
      </div>
    </div>
  }  
}

export default Badge