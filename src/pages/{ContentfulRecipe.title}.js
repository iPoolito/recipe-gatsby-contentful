import React from "react"

const RecipeTemplate = props => {
  console.log(props)
  return <div>{props.params.title}</div>
}



export default RecipeTemplate
