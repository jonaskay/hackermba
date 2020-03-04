import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Form from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="py-8 md:py-16 lg:py-8">
      <Header />
      <div className="hidden lg:inline-block lg:w-full lg:max-w-xs"></div>
      <div className="lg:inline-block lg:align-top max-w-xs md:max-w-md lg:max-w-lg mx-auto lg:ml-16 lg:mr-0 mt-6 md:mt-12 lg:-mt-6 px-4 md:px-0">
        <ul className="text-lg md:text-xl list-disc mb-8">
          <li className="ml-6 my-2">
            Interviews with authors, professionals, and entrepreneurs
          </li>
          <li className="ml-6 my-2">
            Insights into the development, design, and business aspects of
            working with digital products
          </li>
        </ul>
        <div className="text-center lg:text-left">
          <p className="text-lg italic leading-relaxed mb-4">
            HackerMBA is work-in-progress. You can get notified when the first
            episode is out by subscribing to our pre-launch email list below.
          </p>
          <Form />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
