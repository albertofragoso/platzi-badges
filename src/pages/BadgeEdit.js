import React, { Component } from 'react'

import './styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import Form from '../components/Form'
import api from '../api'
import PageLoading from '../components/PageLoading';

class BadgeEdit extends Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      website: ''
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const { badgeId } = this.props.match.params
      this.setState({ loading: true })
      const data = await api.badges.read(badgeId)
      this.setState({ loading: false, form: data })
    } catch(error) {
      this.setState({ loading: false, error })
    }
  }

  handleOnChange = e => {
    const { name, value } = e.target
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  handleOnSubmit = async e => {
    e.preventDefault()
    const { badgeId } = this.props.match.params
    const { form } = this.state
    this.setState({ loading: true, err: null })
    try {
      await api.badges.update(badgeId, form)
      this.setState({ loading: false })

      this.props.history.push('/badges')
    } catch(error) {
      this.setState({ loading: false, error })
    }
  }

  render() {
    const { loading, error } = this.state
    const { firstName, lastName, email, jobTitle, website } = this.state.form

    if(loading) return <PageLoading />

    return (
      <>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={firstName || 'First_Name'}
                lastName={lastName || 'Last_Name'}
                email={email || 'Email'}
                jobTitle={jobTitle || 'Job title'}
                website={website || 'website'}
              />
            </div>
            <div className="col-6">
              <h1> Edit Attendant </h1>
              <Form handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} form={this.state.form} error={error} />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BadgeEdit
