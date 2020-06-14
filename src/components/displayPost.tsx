import React from "react"

import { useStaticQuery, graphql } from "gatsby"

function DisplayPosts() {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            timeToRead
          }
        }
      }
    }
  `)

  const files = posts.allMarkdownRemark.edges

  const buildOl = () => {
    return (
      <ol>
        {files.map(el => (
          <li key={el.node.frontmatter.title}>{el.node.excerpt}</li>
        ))}
      </ol>
    )
  }

  return (
    <div>
      <p>posts to be displayed</p>
      {buildOl()}
    </div>
  )
}

export default DisplayPosts
