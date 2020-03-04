import React from "react"

const Form = () => (
  <div className="inline-block text-left lg:ml-6">
    <label className="inline-block mb-1">Email</label>
    <br />
    <input
      className="border border-teal-8 rounded px-2 py-1 mr-2 mb-2 md:mb-0 w-full md:w-auto"
      type="email"
    />
    <div className="inline-block text-center md:text-left w-full md:w-auto">
      <button className="shadow-xs border border-teal-7 bg-teal-7 text-gray-0 px-2 py-1 rounded">
        Notify me!
      </button>
    </div>
  </div>
)

export default Form
