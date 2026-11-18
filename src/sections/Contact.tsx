
import { motion } from "motion/react";
import { ArrowUpRight, Code2, Network } from "lucide-react";
import "./Contact.css";

const email = "adijain1106@gmail.com";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Section introduction */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-eyebrow">
            <span />
            HAVE A PROJECT IN MIND?
          </div>

          <h2>
            Let's make
            <br />
            <span>something meaningful.</span>
          </h2>

          <p>
            Have an interesting idea, an opportunity, or simply want to
            connect? My inbox is always open.
          </p>
        </motion.div>

        {/* Contact details and form */}
        <div className="contact-layout">
          {/* Direct contact information */}
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="contact-label">GET IN TOUCH</span>

            <a className="contact-email" href={`mailto:${email}`}>
              {email}
              <ArrowUpRight size={20} />
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/AdityaJain1106"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <Code2 size={19} />
                GitHub
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://www.linkedin.com/in/adddijain/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <Network size={19} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="contact-note">
              <span className="contact-status-dot" />
              Open to interesting opportunities and collaborations.
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="contact-form-heading">
              <span>01 / SEND A MESSAGE</span>
              <span>Usually happy to hear from you.</span>
            </div>

            <form
              action={`https://formsubmit.co/${email}`}
              method="POST"
              className="contact-form"
            >
              {/* FormSubmit configuration */}
              <input
                type="hidden"
                name="_subject"
                value="New portfolio contact message"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="hidden"
                name="_captcha"
                value="true"
              />

              {/* Name and email */}
              <div className="contact-field-row">
                <label>
                  YOUR NAME
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  EMAIL ADDRESS
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              {/* Subject */}
              <label>
                SUBJECT
                <input
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  required
                />
              </label>

              {/* Message */}
              <label>
                YOUR MESSAGE
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me a little about your idea..."
                  required
                />
              </label>

              {/* Submit */}
              <button type="submit" className="contact-submit">
                Send message
                <ArrowUpRight size={17} />
              </button>

              <p className="contact-form-footnote">
                Your message will be delivered through FormSubmit.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
