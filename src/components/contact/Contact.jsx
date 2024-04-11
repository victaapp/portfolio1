import { Component, createRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

class Contact extends Component {
  constructor() {
    super();
    this.form = createRef();
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {
    e.preventDefault();

    const { name, email, message } = e.target; // Access form fields by name

    const formData = {
      name: name.value,
      email: email.value,
      message: message.value,
      from_name: name.value // Set from_name to the name value
    };

    emailjs
      .sendForm(
        "service_cqgufzq",
        "template_hnp2gpv",
        formData, // Pass formData instead of this.form.current
        "_TdMwjuwArZ0FLOdb"
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
  }

  render() {
    return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <div className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>anand.renjre.dev@gmail.com</h5>
              <a href="mailto:anand.renjre.dev@gmail.com">Send a message</a>
            </div>
            
            <div className="contact__option">
              <RiWhatsappLine className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+91 8839026319</h5>
              <a href="https://api.whatsapp.com/send?phone=8839026319">
                Send a message
              </a>
            </div>
          </div>
          <form ref={this.form} onSubmit={this.sendEmail} action="">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
