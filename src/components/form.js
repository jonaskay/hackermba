import React from "react"

const Form = () => (
  <div id="mc_embed_signup" className="inline-block text-left">
    <form
      action="https://hackermba.us19.list-manage.com/subscribe/post?u=b38920bd69f42a9816e14ddce&amp;id=0e55a064bd"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate inline-block"
      target="_blank"
      noValidate
    >
      <div id="mc_embed_signup_scroll" className="inline-block">
        <div className="mc-field-group inline-block w-full md:w-auto">
          <label htmlFor="mce-EMAIL" className="inline-block mb-1">
            Email
          </label>
          <br />
          <input
            type="email"
            name="EMAIL"
            className="required email border border-teal-8 rounded px-2 py-1 mr-2 mb-2 md:mb-0 w-full md:w-auto"
            id="mce-EMAIL"
          />
        </div>
        <div id="mce-responses" className="clear inline-block">
          <div
            className="response inline-block"
            id="mce-error-response"
            style={{ display: "none" }}
          ></div>
          <div
            className="response inline-block"
            id="mce-success-response"
            style={{ display: "none" }}
          ></div>
        </div>
        <div style={{ left: -5000, position: "absolute" }} aria-hidden="true">
          <input
            type="text"
            name="b_b38920bd69f42a9816e14ddce_0e55a064bd"
            tabIndex="-1"
            value=""
            readOnly
          />
        </div>
        <div className="clear inline-block text-center md:text-left w-full md:w-auto">
          <input
            type="submit"
            value="Notify me!"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button cursor-pointer shadow-xs border border-teal-7 bg-teal-7 text-gray-0 px-2 py-1 rounded md:mr-4 lg:mr-0"
          />
        </div>
      </div>
    </form>
  </div>
)

export default Form
