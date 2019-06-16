import React, { Component } from 'react'

class Form extends Component {

  render(){
    const { handleOnChange, handleOnSubmit, form, error } = this.props
    const { firstName, lastName, email, jobTitle, website } = form

    return(
    <>
      <form onSubmit={handleOnSubmit}>
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
      {error && <p className="text-danger">{error.message}</p>}
    </>
    )
  }
}

export default Form