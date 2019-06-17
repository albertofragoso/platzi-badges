import React from 'react'
import { Link } from 'react-router-dom'
import BadgeListItem from './BadgeListItem'

import './styles/BadgesList.css'

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('')
  const [filteredBadges, setFilteredBadges] = React.useState(badges)

  React.useMemo(() => {
    const result = badges.filter(badge => `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase()))
    setFilteredBadges(result) 
    },[badges, query]
  )

  return { query, setQuery, filteredBadges }
}

function BadgesList({ badges }) {

  const { query, setQuery, filteredBadges } = useSearchBadges(badges)

  if(filteredBadges.length === 0) return(
    <>
      <div className="form-group">
        <label>Filter Badges</label>
        <input 
          type="text" 
          className="form-control" 
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <h3>No badges were found.</h3>
      <Link to="/badges/new" className="btn btn-primary">Create a badge</Link>
    </>
  )

  return(
    <>
      <div className="form-group">
        <label>Filter Badges</label>
        <input 
          type="text" 
          className="form-control" 
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <ul className="list-unstyled">
        {
          filteredBadges.map(badge => {
            return (
              <li key={badge.id} className="BadgesListItem">
                <Link className="text-reset text-decoration-none" to={`/badges/${badges.id}`}>
                  <BadgeListItem badge={badge} />
                </Link>
              </li>
            )
          })
        }
      </ul>
    </> 
  )
}

export default BadgesList