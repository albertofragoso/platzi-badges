import React from 'react'

import { Link } from 'react-router-dom'
import Badge from '../components/Badge'
import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'

function BadgeDetails(props) {
  const badge = this.props
  return(
    <>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className="col BadgeDetails__hero-attendant-name">
              <h3>{badge.firstName} {badge.lastName}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge badge={badge} />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <Link className="btn btn-primary mb-3" to={`/badges/${badge.id}/edit`} >
                Edit
              </Link>
            </div>
            <div>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgeDetails