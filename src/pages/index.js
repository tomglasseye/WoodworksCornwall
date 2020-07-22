import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ data }) => {

  return (
    <Layout>

      <SEO title="Welcome" />

      <h1>Coming Soon!</h1>

      <p>Mobile Saw Mill | Custom Timber Milling | Bespoke Carpentry and Fencing, Devon & Cornwall, UK</p>

      <p>Call: <a href="tel:07503569949" title="Call us">07503 569949</a></p>

      <p>Email: <a href="mailto:woodworkscornwall@gmail.com" title="Email us">woodworkscornwall@gmail.com</a></p>

      <p>Facebook: <a href="https://www.facebook.com/woodworkscornwall/" title="Facebook">@woodworkscornwall</a></p>

    </Layout>
  )
}

export default Home
