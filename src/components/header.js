import React from "react"

import CoverImage from "./cover-image"

const Header = () => (
  <>
    <div className="bg-gray-8-gray-7 absolute top-0 w-full h-64 lg:hidden"></div>
    <header className="mx-auto lg:-mb-12 px-4 md:px-0 w-full max-w-xs md:max-w-md lg:max-w-4xl">
      <div className="md:pr-8 lg:pr-0 w-full max-w-xs mx-auto mb-8 lg:m-0 lg:inline-block lg:align-top">
        <CoverImage />
      </div>
      <h2 className="relative z-1 max-w-xs md:max-w-md lg:max-w-lg lg:inline-block lg:align-top lg:ml-16 lg:mt-16 text-2xl md:text-3xl font-semibold leading-snug">
        New podcast for people who want to broaden their skills in the world of
        software
      </h2>
    </header>
  </>
)

export default Header
