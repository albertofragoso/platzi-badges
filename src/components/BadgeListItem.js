import React from 'react'
import md5 from 'md5'

function BadgeListItem({badge}) {
  return(
    <>
      <img className="BadgeListItem__avatar" src={`https://www.gravatar.com/avatar/${md5(badge.email)}?d=identicon`}  alt="Profile badge"/>
      <div>
        <strong>{badge.firstName} {badge.lastName}</strong>
        <br />{badge.jobTitle}
        <br />{badge.website}
      </div>
    </>
  )
}

export default BadgeListItem