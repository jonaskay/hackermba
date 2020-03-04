import React from "react"

import CoverImage from "./cover-image"

const Header = () => (
  <>
    <div className="bg-gray-8-gray-7 absolute top-0 w-full h-64 md:hidden"></div>
    <header className="mx-auto px-4 lg:px-0 w-full max-w-xs md:max-w-2xl lg:max-w-4xl">
      <div className="md:pr-8 lg:pr-0 w-full max-w-xs mx-auto mb-8 md:m-0 md:inline-block md:align-top">
        <CoverImage />
      </div>
      <div className="relative z-1 max-w-xs lg:max-w-lg md:inline-block md:align-bottom lg:ml-16 lg:mt-8">
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4 lg:mb-6">
          New podcast for people who want to broaden their skills in the world
          of software
        </h2>
        <p className="text-lg md:text-xl mb-2 lg:mb-12">
          These are the real-life lessons on building and managing software you
          won't learn at university.
        </p>
      </div>
    </header>
  </>
)

export default Header
