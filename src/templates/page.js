import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Page = ({ data }) => {

  return (
    <Layout>

      <SEO title={data.wpPage.title} />

      <h1>{data.wpPage.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />

    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
        id
        databaseId
        title
        content
    }
  }
`