import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BadgeListItem from './components/BadgeListItem'

import './styles/BadgesList.css'

class BadgesList extends Component {

  render(){
    const { badges } = this.props

    if(badges.length === 0) return(
      <div>
        <h3>No badges were found.</h3>
        <Link to="/badges/new" className="btn btn-primary">Create a badge</Link>
      </div>
    )

    return(
      <ul className="list-unstyled">
        {
          badges.map(badge => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <Link className="text-reset text-decoration-none"  to={`/badges/${badges.id}`}>
                  <BadgeListItem badge={badge} />
                </Link>
              </li>
            )
          })
        }
      </ul> 
    )
  }
}

export default BadgesList