import React, { Component } from 'react'

import './styles/BadgesList.css'

class BadgesList extends Component {

  render(){
    const { badges } = this.props

    return(
      <ul className="list-unstyled">
        {
          badges.map(badge => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <img className="BadgeListItem__avatar" src="https://avatars2.githubusercontent.com/u/3421560?s=400&v=4" alt="Profile badge"/>
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