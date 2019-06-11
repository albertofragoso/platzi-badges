import React, { Component } from 'react'

class Form extends Component {

  handleClick = e => {
    console.log('Button was clicked.')
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('Form submit')
    console.log(this.state)
  }

  render(){
    const { handleOnChange, form } = this.props
    const { firstName, lastName, email, jobTitle, website } = form

    return(
    <>
      <h1> New Attendant </h1>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input 
            className="form-control" 
            type="text" 
            name="firstName" 
            onChange={handleOnChange} 
            value={firstName}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input 
            className="form-control" 
            type="text" 
            name="lastName" 
            onChange={handleOnChange} 
            value={lastName}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            className="form-control" 
            type="email" 
            name="email" 
            onChange={handleOnChange} 
            value={email}
          />
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <input 
            className="form-control" 
            type="text" 
            name="jobTitle" 
            onChange={handleOnChange} 
            value={jobTitle}
          />
        </div>

        <div className="form-group">
          <label>Website</label>
          <input 
            className="form-control" 
            type="text" 
            name="website" 
            onChange={handleOnChange} 
            value={website}
          />
        </div>

        <button className="btn btn-primary" onClick={this.handleClick}>Save</button>
      </form>
    </>
    )
  }
}

export default Form