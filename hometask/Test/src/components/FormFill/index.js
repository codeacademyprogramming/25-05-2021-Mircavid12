import React from 'react'

export default function FormFill() {
    return (
        <section
        id="fill-form"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="head text-center">
                <h2>Fill out the form and we will call you</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center content">
              <form action="">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Phone number" />
                <button type="submit">Call back --</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}
