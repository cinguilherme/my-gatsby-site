import React from "react"
import { Link } from "gatsby"

const SubHeader = () => {
  const divStyle = {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0 1.0875rem 1.45rem`,
  }
  const ulStyle = {
    display: "flex",
  }
  const linksStyle = {
    margin: "10px",
  }

  return (
    <>
      <div className="container" style={divStyle}>
        <div className="row" style={ulStyle}>
          <Link to="/" style={linksStyle}>
            <h3>Home</h3>
          </Link>

          <Link to="/books" style={linksStyle}>
            <h3>Books</h3>
          </Link>

          <Link to="/posts" style={linksStyle}>
            <h3>Internal Posts</h3>
          </Link>

          <Link to="/extResources" style={linksStyle}>
            <h3>External Resources</h3>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SubHeader
