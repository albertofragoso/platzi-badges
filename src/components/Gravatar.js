import React from 'react'
import md5 from 'md5'

function Gravatar({ email }) {
  const hash = md5(email)
  return(
    <img className="Badge__avatar" src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="Usuario de la conferencia" />
  ) 
}

export default Gravatar