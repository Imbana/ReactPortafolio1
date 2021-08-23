import React, { useState } from 'react'
import './contact.scss'
const Contact = () => {
  const [message, setMessage] = useState(false)

  const handleSubmit = (ev)=>{
    ev.preventDefault();
    setMessage(true)
  }

    return (
      <div className="contact" id="contact">
        <div className="img">
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
            alt=""
          />
        </div>
        <div className="form">
          <h2 className="title">Contact.</h2>
          <form onSubmit={handleSubmit} className="container_form">
            <input
              className="email"
              type="Email"
              name=""
              id=""
              placeholder="Email"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button type="submit">Send</button>
            {message &&
              <span>Thanks, I'll reply ASAP </span>}
          </form>
        </div>
        
      </div>
    );
}

export default Contact
