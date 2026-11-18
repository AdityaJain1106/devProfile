
import { ArrowUpRight, ArrowUp, Code2, Network } from "lucide-react";
import { motion } from "motion/react";
import "./Footer.css";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <motion.div
          className="footer-main"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="footer-intro">
            <span className="footer-eyebrow">
              ADITYA JAIN · DEVELOPER & CREATOR
            </span>

            <h2>
              Building things
              <br />
              <span>that matter.</span>
            </h2>

            <p>One idea at a time. Always curious, always building.</p>
          </div>

          <div className="footer-links">
            <div className="footer-link-group">
              <h3>EXPLORE</h3>

              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

            <div className="footer-link-group">
              <h3>ELSEWHERE</h3>

              <a
                href="https://github.com/AdityaJain1106"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={15} />
                GitHub
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://www.linkedin.com/in/adddijain/"
                target="_blank"
                rel="noreferrer"
              >
                <Network size={15} />
                LinkedIn
                <ArrowUpRight size={13} />
              </a>

              <a href="mailto:adijain1106@gmail.com">
                Email
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="footer-bottom">
          <p>© {currentYear} Aditya Jain. All rights reserved.</p>

          <p className="footer-credit">
            Designed & built with curiosity <span>✳</span>
          </p>

          <a className="footer-top-link" href="#home">
            BACK TO TOP
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
