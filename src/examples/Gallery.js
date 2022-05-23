import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  console.log(nodes)
  return (
    <div>
      {nodes.map((image, idx) => {
        const pathToImage = getImage(image)
        return (
          <article key={idx}>
            <GatsbyImage image={pathToImage} alt={image.name} />
            <p>{image.name}</p>
          </article>
        )
      })}
    </div>
  )
}

export default Gallery
