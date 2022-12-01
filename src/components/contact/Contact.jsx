import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsChatRightText } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  /*Variables to change*/

  const phoneNumber = "1+ (810) 620-9271";

  /*Snippet to use EmailJS*/

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pwcs4po",
        "template_irmcgod",
        form.current,
        "2ww_yCiN-d0Mh90vX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert(`Your message has sent`);
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Joseph.Huntley@outlook.com</h5>
            <a href="mailto:joseph.huntley@outlook.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsChatRightText className="contact__option-icon" />
            <h4>Phone Number</h4>
            <h5>
              <a href="tel:+18106209271" id="phone__number">
                {phoneNumber}{" "}
              </a>
            </h5>
            <button
              className="phone__number-btn"
              onClick={() => {
                navigator.clipboard.writeText({ phoneNumber });
                alert(`You have copied ${phoneNumber}`);
              }}>
              Copy
            </button>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
