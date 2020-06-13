import React from "react"

import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BooksPage = () => {
  return (
    <Layout>
      <SEO title="books"></SEO>
      <h3>
        the books page, none of the content of this page is static or hosted in
        this site. All comes from a external API
      </h3>
    </Layout>
  )
}

export default BooksPage
