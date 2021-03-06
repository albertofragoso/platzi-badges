import React, { Component } from 'react'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import Form from '../components/Form'
import api from '../api'
import PageLoading from '../components/PageLoading';

class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      website: ''
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
    const { form } = this.state
    this.setState({ loading: true, err: null })
    try {
      await api.badges.create(form)
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
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-image" src={header} alt="Logo" />
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
              <h1> New Attendant </h1>
              <Form handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit} form={this.state.form} error={error} />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BadgeNew
