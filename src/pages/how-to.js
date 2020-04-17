import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import HowToList from "../components/Blog/HowToList"
const blog = ({ data }) => {
  return (
    <Layout>
      <HowToList />
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
