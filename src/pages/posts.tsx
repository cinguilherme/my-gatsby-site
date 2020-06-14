import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form } from "antd"

const PostsPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Internal Posts" />
        <div>
          <h4>New Post</h4>
          <Form></Form>
        </div>
      </Layout>
    </>
  )
}

export default PostsPage
