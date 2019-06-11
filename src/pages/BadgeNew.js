import React, { Component } from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import Form from '../components/Form'

class BadgeNew extends Component {
  state = {
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

  render() {
    const { firstName, lastName, email, jobTitle, website } = this.state.form

    return (
      <>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={firstName}
                lastName={lastName}
                avatarUrl="https://avatars0.githubusercontent.com/u/24305046?s=460&v=4"
                email={email}
                jobTitle={jobTitle}
                website={website}
              />
            </div>
            <div className="col-6">
              <Form handleOnChange={this.handleOnChange} form={this.state.form}/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BadgeNew
