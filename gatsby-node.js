/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const sectionTemplate = path.resolve("./src/templates/section.tsx")
  // this graphql is only to retrieve the slug data for creating the page
  const result = await graphql(`
    {
      allContentfulCourse {
        edges {
          node {
            title
            description
            sections {
              slug
            }
          }
        }
      }
    }
  `)

  const sections = result.data.allContentfulCourse.edges[0].node.sections
  sections.forEach(section => {
    createPage({
      path: `/${section.slug}`,
      component: sectionTemplate,
      context: { // items you want as a prop to your component
        slug: section.slug,
      },
    })
  })
}
