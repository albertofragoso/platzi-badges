import React, { Component } from 'react'

import api from '../api'
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends Component {

  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
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

  handleOpen = e => this.setState({ modalIsOpen: true })

  handleClose = e => this.setState({ modalIsOpen: false })

  handleDeleteBadge = async e => {
    const { badgeId } = this.props.match.params
    this.setState({ loading: true, error: null })

    try {
      await api.badges.remove(badgeId)
      this.setState({ laoding: false })
      this.props.history.push('/badges')
    } catch(error) {
      this.setState({ loading: false, error })
    }
  }
  
  render() {
    const { loading, error, data, modalIsOpen } = this.state

    if(loading) return <PageLoading />

    if(error) return <PageError error={error} />

    return(
       <BadgeDetails badge={data} modalIsOpen={modalIsOpen} onOpen={this.handleOpen} onClose={this.handleClose} onDeleteBadge={this.handleDeleteBadge} /> 
    )
  }
}

export default BadgeDetailsContainer