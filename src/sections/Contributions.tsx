
import { motion } from "motion/react";
import { ArrowUpRight, Code2, Users } from "lucide-react";
import { contributions } from "../data/journey";
import "./Contributions.css";

export default function Contributions() {
  return (
    <section className="contributions-section" id="contributions">
      <div className="contributions-container">
        <div className="contributions-header">
          <div>
            <div className="journey-eyebrow">
              <span />
              BEYOND THE CLASSROOM
            </div>

            <h2>
              BUILDING
              <br />
              <span>IN THE OPEN.</span>
            </h2>
          </div>

          <p>
            Learning doesn't stop at academics. I've explored
            open-source development and community leadership
            by contributing, collaborating and helping others
            get involved.
          </p>
        </div>

        <div className="contributions-timeline">
          {contributions.map((item, index) => (
            <motion.article
              className="contribution-item"
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="contribution-index">
                0{index + 1}
              </div>

              <div className="contribution-marker">
                <span />
              </div>

              <div className="contribution-content">
                <div className="contribution-topline">
                  <span className="contribution-type">
                    {item.type === "Leadership" ? (
                      <Users size={13} />
                    ) : (
                      <Code2 size={13} />
                    )}
                    {item.type}
                  </span>

                  <span className="contribution-period">
                    {item.period}
                  </span>
                </div>

                <h3>{item.role}</h3>

                <h4>{item.organization}</h4>

                <p>{item.description}</p>
              </div>

              <div className="contribution-arrow">
                <ArrowUpRight size={20} />
              </div>
            </motion.article>
          ))}
        </div>

        <div className="contributions-footer">
          <span>COMMUNITY · COLLABORATION · OPEN SOURCE</span>
          <span>MORE TO COME <ArrowUpRight size={13} /></span>
        </div>
      </div>
    </section>
  );
}
