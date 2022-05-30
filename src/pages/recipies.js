import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

const Recipies = () => {
  return (
    <Layout>
      <SEO title={"Recipies"} />
      <h1>Recipies Page</h1>
      <AllRecipes />
    </Layout>
  )
}

export default Recipies
