import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import md5 from 'md5'

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
                <img className="BadgeListItem__avatar" src={`https://www.gravatar.com/avatar/${md5(badge.email)}?d=identicon`}  alt="Profile badge"/>
                <div>
                  <strong>{badge.firstName} {badge.lastName}</strong>
                  <br />{badge.jobTitle}
                  <br />{badge.website}
                </div>
              </li>
            )
          })
        }
      </ul> 
    )
  }
}

export default BadgesList