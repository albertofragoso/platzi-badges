import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import logo from '../images/platziconf-logo.svg'
import BadgesList from '../components/BadgesList'

class Badges extends Component {

  state= {
    data: [
      {
        id: '1',
        firstName: 'Oswaldo',
        lastName: '',
        email: '',
        jobTitle: '',
        website: '',
      },
      {
        id: '2',
        firstName: 'Karla',
        lastName: '',
        email: '',
        jobTitle: '',
        website: '',
      },
      {
        id: '3',
        firstName: 'Ana',
        lastName: '',
        email: '',
        jobTitle: '',
        website: '',
      },
      {
        id: '4',
        firstName: 'Nicky',
        lastName: '',
        email: '',
        jobTitle: '',
        website: '',
      }
    ]

  }

  render(){
    const { data } = this.state
    return (
      <>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={logo} alt="Conf logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New badge
            </Link>
          </div>

          <BadgesList badges={data}/>

        </div>
      </>
    )
  }
}

export default Badges