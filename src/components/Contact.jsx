import React from 'react'

const Contact = () => {
  return (
     <div className="contact-page">
      <form className="contact-form">
        <h2>Contact Me</h2>

        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your email" />
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
