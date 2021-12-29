import React from 'react'
import Card from '../shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>
        <a href='https://github.com/kristjanhollo/React'>Github</a>
        <p>
          <Link  to='/'>Back To Home</Link>
        </p>
      </div>
      About
    </Card>
  )
}

export default AboutPage
