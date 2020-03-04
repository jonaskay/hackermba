import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Form from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="pb-16 pt-8 md:pt-16 lg:pt-8">
      <Header />
      <div className="max-w-4xl mx-auto">
        <div className="hidden lg:inline-block lg:w-full lg:max-w-xs"></div>
        <div className="lg:inline-block lg:align-top max-w-xs md:max-w-md lg:max-w-lg mx-auto lg:ml-16 lg:mr-0 mt-4 lg:-mt-16 px-4 md:px-0">
          <div className="text-right lg:text-left">
            <p className="text-left text-lg md:text-xl mb-4 lg:mb-6">
              The real-life lessons on building and managing software they don't
              teach you at university. Interviews with authors, professionals,
              and entrepreneurs. Insights into the development, design, and
              business aspects of working with digital products
            </p>
            <p className="text-left text-lg md:text-xl mb-4 md:mb-12 lg:mb-6">
              HackerMBA is still work-in-progress. You can get a notification
              when the first episode is out by subscribing to our pre-launch
              email list below.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
