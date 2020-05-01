import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from '../components/About/Landing/Landing'
import Framework from '../components/About/Framework/Framework'
import Team from '../components/About/Team/Team'
import Handles from '../components/Home/Handles/Handles';


const SecondPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Landing />
    <Framework />
    <Team />
    <Handles />
  </Layout>
)

export default SecondPage
