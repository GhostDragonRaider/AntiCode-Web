import React from "react";
import TypeWriter from "../components/Typewriter";

export default function Contact() {
  const contactMessage =
    "Feel free to contact me or send me an e-mail or just leave feedback.";

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-message">
        <TypeWriter text={contactMessage} speed={50} />{" "}
      </p>
      <form
        className="contact-form"
        action="https://formspree.io/f/meorzzwl"
        method="POST"
      >
        <label className="contact-label" htmlFor="name">
          Name
        </label>
        <input
          className="contact-input"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />

        <label className="contact-label" htmlFor="email">
          Email
        </label>
        <input
          className="contact-input"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label className="contact-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="contact-textarea"
          id="message"
          name="message"
          placeholder="Enter your message"
          required
        />

        <button className="contact-button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
