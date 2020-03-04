import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="py-8">
      <div className="shadow-md w-full max-w-xs inline-block align-top">
        <Image />
      </div>
      <div className="max-w-lg ml-16 mt-12 inline-block align-top">
        <h2 className="text-3xl font-semibold leading-snug mb-6">
          New podcast for people who want to broaden their skills in the world
          of software
        </h2>
        <p className="text-xl mb-4">
          These are the real-life lessons about building and managing software
          you won't learn at university:
        </p>
        <ul className="text-xl list-disc mb-8">
          <li className="ml-6 my-2">
            Interviews with authors, professionals, and entrepreneurs
          </li>
          <li className="ml-6 my-2">
            Insights into the development, design, and business aspects of
            working with digital products
          </li>
        </ul>
        <p className="text-lg italic leading-relaxed mb-4">
          HackerMBA is work-in-progress. You can get notified when the first
          episode is out by subscribing to our pre-launch email list below.
        </p>
        <div className="ml-6">
          <label className="inline-block mb-1">Email</label>
          <br />
          <input
            className="border border-teal-8 rounded px-2 py-1 mr-2"
            type="email"
          />
          <button className="shadow-xs border border-teal-7 bg-teal-7 text-gray-0 px-2 py-1 rounded">
            Notify me!
          </button>
        </div>
      </div>
    </header>
  </Layout>
)

export default IndexPage
