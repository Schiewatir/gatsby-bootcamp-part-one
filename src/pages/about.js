import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>About us.</p>
      <p>Contact us on <Link to="/contact">Contact</Link></p>
    </Layout>
  )
}
export default AboutPage
