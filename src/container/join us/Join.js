import React from "react";
import { useState } from "react";

function Join() {
  const [formStatus, setFormStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Handle success
        setFormStatus("Message sent");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        form.reset();
      } else {
        // Handle error
        setFormStatus("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("Failed to send message");
    }
  };
  return (
    <section className="main" id="Join Us">
      <div className="input">
        <form
          method="POST"
          action="https://formspree.io/f/mknavyyb"
          onSubmit={handleSubmit}
          className="input">
          <h3>Send message</h3>
          <div className="float">
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                title="Enter name"
                required
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              title="Enter email"
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-control">
            <label htmlFor="message">Message</label>
            <textarea
              required
              type="text"
              name="message"
              id="message"
              title="Enter Message"
              rows="5"
              cols="70"
              placeholder="Enter your message"></textarea>
          </div>
          <div className="form-control" id="btngrp">
            <input
              type="submit"
              name="name"
              id="name"
              title="Send Email"
              value="send email"
              className="btn"
            />
            <input type="hidden" name="_replyto" value="abd911daly@gmail.com" />
          </div>
          {formStatus === "Message sent" && (
            <div className="sent">
              <p>Message sent successfully :)</p>
            </div>
          )}
        </form>
      </div>
      <div className="vertical-line"></div>
      <div className="suggest">
        <h3> Info</h3>
        <div className="form-control">
          <label htmlFor="email">Adress</label>
          <h4> 6th of October city, Egypt</h4>
        </div>
        <div className="form-control">
          <label htmlFor="email">Phone</label>
          <h4> +20 10 10 10 70 50</h4>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <h4> abdulrhman.eldaly@gmail.com</h4>
        </div>
      </div>
    </section>
  );
}

export default Join;
