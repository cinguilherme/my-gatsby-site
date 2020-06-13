import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Hi Folks</h1>
    <h3>presenting myself, I am a developer both professionally and casually</h3>
    <p>Welcome to my Gatsby site, this is meant to be my playground for several things I want to implement/try on a app build with react and Gatsby.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <Link to="/books">To the books page</Link> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>

  </Layout>
)

export default IndexPage
