import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const HowTo = ({ data }) => {
  const {
    title,
    text: { json },
  } = data.posts

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        console.log(node)
        return (
          <div className="rich">
            <img width="400" src={node.data.target.fields.file["en-US"].url} />
            <p>images provided by Mycotown</p>
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/how-to" className="btn btn-green m-3">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    posts: contentfulHowToPost(slug: { eq: $slug }) {
      title
      text {
        json
      }
    }
  }
`

export default HowTo
