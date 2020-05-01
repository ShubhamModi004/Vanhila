import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// Home components
import Landing from '../components/Home/Landing/Landing';
import Whoweare from '../components/Home/Whoweare/Whoweare';
import Work from '../components/Home/Work/Work';
import Reviews from '../components/Home/Reviews/Reviews';
import Blog from '../components/Home/Blog/Blog';
import Handles from '../components/Home/Handles/Handles';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Whoweare />
    <Work />
    <Reviews />
    <Blog />
    <Handles />
  </Layout>
)

export default IndexPage
