import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Home.css'
import logo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

function Home() {
  return(
    <div className="Home">
      <div className="Home__info">
        <img src={logo} alt="Logo Conf" />
        <h3>PRINT YOUR BADGES</h3>
        <p>... and something else</p>
        <Link to="/badges" className="btn btn-primary">Entrar</Link>
      </div>
      <img className="Home__info-image" src={astronauts} alt="Astronautas Conf" />
    </div>
  )
}

export default Home