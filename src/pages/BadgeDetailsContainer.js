import React, { Component } from 'react'

import api from '../api'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends Component {

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
       <BadgeDetails badge={data} /> 
    )
  }
}

export default BadgeDetailsContainer