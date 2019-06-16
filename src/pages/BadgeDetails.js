import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Badge from '../components/Badge'
import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import api from '../api'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class BadgeDetails extends Component {

  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const { badgeId } = this.props.match.params
    this.setState({ loading: true })
    try {
      const data = await api.badges.read(badgeId)
      this.setState({ loading: false, data })
    } catch(error) {
      this.setState({ loading: false, error })
    }
  }
  
  render() {
    const { loading, error, data } = this.state

    if(loading) return <PageLoading />

    if(error) return <PageError error={error} />

    return(
      <>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={confLogo} alt="Logo de la conferencia"/>
              </div>
              <div className="col BadgeDetails__hero-attendant-name">
                <h3>{data.firstName} {data.lastName} </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge badge={data} />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <Link className="btn btn-primary mb-3" to={`/badges/646465/edit`} >
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
}

export default BadgeDetails