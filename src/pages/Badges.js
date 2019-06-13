import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'
import logo from '../images/platziconf-logo.svg'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import api from '../api'

class Badges extends Component {

  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ data: [], loading: true, error: null })

    try {
      const data = await api.badges.list()
      this.setState({ data, loading: false })
    } catch(error) {
      this.setState({ loading: false, error })
    }
  }

  render(){
    const { loading, data, error }  = this.state

    if(loading) return(<PageLoading />)

    if(error) return(<PageError error={error} />)

    return (
      <>
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