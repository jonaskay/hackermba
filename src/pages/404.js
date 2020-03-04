import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="text-center p-8">
      <h1 className="text-3xl font-semibold mb-2">404</h1>
      <p className="text-xl">Not Found</p>
    </div>
  </Layout>
)

export default NotFoundPage
