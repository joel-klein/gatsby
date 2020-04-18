import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BackgroundSection from "../components/Globals/BackgroundSection"

const Contact = () => (
  <Layout>
    <section className="contact py-5">
      <div className="row">
        <div className="col text-center mb-3">
          <h1 className="display-4 font-weight-bold">
            What can we do for you?
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-sm -8 col-md-6 mx-auto">
          <form action="https://formspree.io/sales@mycotown.com" method="POST">
            {/*name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="john smith"
              />
            </div>
            {/*email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="email@email.com"
              />
            </div>
            {/*description */}
            <div className="form-group">
              <label htmlFor="description">Message</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="your message here..."
              />
            </div>
            {/*submit */}
            <button type="submit" className="btn btn-green btn-block mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  </Layout>
)

export default Contact
