import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import DisplayPosts from "../components/displayPost"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />

      <div className="row">

        <div className="col-md-8">
          <h1>Hi Folks</h1>
          <h3>presenting myself, I am a developer both professionally and casually</h3>
          <p>Welcome to my Gatsby site, this is meant to be my playground for several things I want to implement/try on a app build with react and Gatsby.</p>
        </div>

        <div className="col-md-4" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>

      </div>

      <div>
        list of posts will be here.. paginated and stuff
        <DisplayPosts />
      </div>
    </Layout>
  )

}


export default IndexPage
