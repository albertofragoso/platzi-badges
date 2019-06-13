import React from 'react'

import './styles/Error.css'

function PageError({error}) {
  return(
    <div className="PageError">
      <h3>{error}. ❌</h3>
    </div>
  )
}

export default PageError