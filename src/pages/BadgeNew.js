import React, { Component } from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import Navbar from '../components/Navbar'

class BadgeNew extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <Badge 
          firstName="Alberto"
          lastName="Fragoso"
          avatarUrl="https://avatars0.githubusercontent.com/u/24305046?s=460&v=4"
          jobTitle="Full Stack Web Developer"
          website="albertofragoso.com"
        />
      </>
    )
  }
}

export default BadgeNew
