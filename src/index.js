import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

import Badge from './components/Badge'

const container = document.getElementById('root')

ReactDOM.render(<Badge 
  firstName='Alberto' 
  lastName='Fragoso'
  avatarUrl='https://avatars0.githubusercontent.com/u/24305046?s=460&v=4'
  jobTitle='Full Stack Web Developer'
  website='albertofragoso.com'
/>, container)

