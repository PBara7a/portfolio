import { useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import axios from "axios";
import "./contact.css";

const defaultData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  _autoresponse: "Thank you for reaching out, I will be in touch.",
};

const Contact = () => {
  const [form, setForm] = useState(defaultData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://formsubmit.co/pbara7a@gmail.com";

    try {
      await axios.post(url, form);
      setForm(defaultData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h1>Get in touch!</h1>

      <form
        onSubmit={handleSubmit}
        className="contact-section__form"
        action="https://formsubmit.co/pbara7a@gmail.com"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name...*"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email...*"
          required
        />
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Subject..."
        />
        <textarea
          rows="4"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message...*"
          required
        />

        <button className="contact-section__btn">Send message</button>
      </form>

      <div className="contact-section__socials">
        <a href="https://github.com/pbara7a" target="_blank" rel="noreferrer">
          <div>
            GitHub <BsGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/paulo-barata/"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            LinkedIn <BsLinkedin />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
