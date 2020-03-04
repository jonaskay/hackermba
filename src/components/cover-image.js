import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const CoverImage = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hackermba-cover.png" }) {
        childImageSharp {
          fluid(maxWidth: 640) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Image
      className="overflow-hidden lg:rounded shadow-md"
      fluid={data.image.childImageSharp.fluid}
    />
  )
}

export default CoverImage
