import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products"

const ShopPage = ({ data }) => (
  <Layout>
    <SEO title="Shop" />
    <BackgroundSection title="Shop." styleClass="shop" />
    <Menu products={data.menu} />
    {/*<Products products={data.products} />*/}
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "backgroundHome.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulMycotownProduct {
      edges {
        node {
          id
          title
          slug
          description {
            description
          }
          price
          category
          images {
            fluid(maxHeight: 200) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ShopPage
