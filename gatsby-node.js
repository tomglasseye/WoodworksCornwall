const path = require("path")
const slash = require("slash")
const { createRemoteFileNode } = require("gatsby-source-filesystem")
const moment = require("moment")
exports.createPages = async ({ graphql, actions }) => {
const { createPage } = actions

const homeTemplate = path.resolve("./src/pages/index.js")
const pageTemplate = path.resolve("./src/templates/page.js")

  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
          status
        }
      }
    }
  `)

  // Check for errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  const {
    allWpPage,
  } = result.data

  //Create home page
  allWpPage.nodes.forEach(node => {
    if (node.status === "publish" && node.uri === "/") {
      createPage({
        path: `${node.uri}`,
        component: slash(homeTemplate),
        context: {
          id: node.id,
        },
      })
    }
  })

  //Create pages
  allWpPage.nodes.forEach(node => {
    if (node.status === "publish" && node.uri !== "/") {
      createPage({
        path: `${node.uri}`,
        component: slash(pageTemplate),
        context: {
          id: node.id,
        },
      })
    }
  })

}