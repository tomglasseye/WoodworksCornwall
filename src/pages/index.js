import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ data }) => {

  return (
    <Layout>

      <SEO title="Home Page" />

      <h1>{data.wpPage.title}</h1> Boom

      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />

    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    wpPage(uri: {eq: "/"}) {
        id
        databaseId
        title
        content
    }
  }
`