import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"

const RecipeTemplate = ({ data }) => {
  const { title, cookTime, content, prepTime, servings, image, description } =
    data.contentfulRecipe
  const { tags, instructions, ingredients, tools } = content
  const pathToImage = getImage(image)
  return (
    <Layout>
      <main className="page">
        <div className="recipe-page">
          <h2>{title}</h2>
          {/* HERO */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* Icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>prep Time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cookl time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings} </p>
                </article>
              </div>
              <p className="recipe-tags">
                Tags:
                {tags.map((tag, idx) => {
                  return (
                    <Link to={`/${tag}`} key={idx}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          {/* Rest of content */}
          <section className="recipe-content">
            <article>
              <h4>instructions</h4>
              {instructions.map((item, idx) => {
                return (
                  <div key={idx} className="single-instruction">
                    <header>
                      <p>step {idx + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, idx) => {
                  return (
                    <p key={idx} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, idx) => {
                  return (
                    <p key={idx} className="single-tool">
                      {item}
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipeTemplate
