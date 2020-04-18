const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      posts: allContentfulBlogPost {
        edges {
          node {
            slug
            id: contentful_id
          }
        }
      }
      posts: allContentfulHowToPost {
        edges {
          node {
            slug
            id: contentful_id
          }
        }
      }
    }
  `)

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `how-to/${node.slug}`,
      component: path.resolve("./src/templates/howto-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
