import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form, Input, Button, Checkbox } from "antd"
import ManagementOfPosts from "../components/managementposts"

const layout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 10, span: 16 },
}

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = { management: false }
  }

  unlockManagementOfPosts = () => {
    this.setState({ management: true })
  }

  managementPosts() {
    if (this.state.management == true) {
      return <ManagementOfPosts></ManagementOfPosts>
    } else {
      return <></>
    }
  }

  onFinish = values => {
    console.log("Success:", values)

    if (
      process.env.admin === values.username &&
      process.env.pass == values.password
    ) {
      console.log("logged in")
      this.unlockManagementOfPosts()
    } else {
      console.log("not")
    }
  }

  onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo)
  }

  render() {
    return (
      <>
        <Layout>
          <SEO title="admin"></SEO>
          login to unlock posts management
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <hr />
          {this.managementPosts()}
        </Layout>
      </>
    )
  }
}

export default Admin
