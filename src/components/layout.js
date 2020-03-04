import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="md:container md:mx-auto">
      <main className="relative max-w-4xl mx-auto">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
