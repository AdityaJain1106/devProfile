
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Award,
  Code2,
  Trophy,
  Users,
  Sparkles,
} from "lucide-react";
import {
  certifications,
  hackathons,
} from "../data/achievements";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-container">
        <div className="journey-eyebrow">
          <span />
          RECOGNITION & MILESTONES
        </div>

        <div className="achievements-heading">
          <h2>
            PROGRESS
            <br />
            <span>IN PRACTICE.</span>
          </h2>

          <p>
            A collection of milestones, technical learning,
            competitive experiences and the work I've put
            into becoming a better engineer.
          </p>
        </div>

        <div className="achievement-feature-grid">
          <motion.article
            className="achievement-problem-solving"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="achievement-card-top">
              <span>01 / PROBLEM SOLVING</span>
              <Code2 size={19} />
            </div>

            <div className="achievement-number">
              250<span>+</span>
            </div>

            <h3>Problems Solved.</h3>

            <p>
              Data Structures & Algorithms across
              Codeforces and LeetCode.
            </p>

            <div className="achievement-platforms">
              <a
                href="https://codeforces.com/profile/adityajain1106"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my Codeforces profile"
              >
                CODEFORCES <ArrowUpRight size={12} />
              </a>

              <a
                href="https://leetcode.com/u/adddijain/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LeetCode profile"
              >
                LEETCODE <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.article>

          <motion.article
            className="achievement-hackathons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="achievement-card-top">
              <span>02 / COMPETITIVE BUILDING</span>
              <Trophy size={19} />
            </div>

            <div className="hackathon-title">
              <h3>Built under pressure.</h3>
              <p>
                Led cross-functional teams through
                competitive hackathons.
              </p>
            </div>

            <div className="hackathon-list">
              {hackathons.map((event, index) => (
                <div className="hackathon-item" key={event}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{event}</strong>
                  <ArrowUpRight size={14} />
                </div>
              ))}
            </div>
          </motion.article>
        </div>

        <div className="certifications-heading">
          <div>
            <div className="journey-eyebrow">
              <span />
              CONTINUOUS LEARNING
            </div>

            <h3>Credentials & Certifications.</h3>
          </div>

          <span className="certification-count">
            {String(certifications.length).padStart(2, "0")} CREDENTIALS
          </span>
        </div>

        <div className="certifications-list">
          {certifications.map((certificate, index) => (
            <motion.article
              className="certification-item"
              key={certificate.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.35,
                delay: index * 0.06,
              }}
            >
              <span className="certification-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <a
                className="certification-icon"
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${certificate.name} certificate`}
                title="View certificate"
              >
                <Award size={19} />
              </a>

              <div className="certification-info">
                <h4>{certificate.name}</h4>
                <p>{certificate.issuer}</p>
              </div>

              <span className="certification-mark">
                <Sparkles size={16} />
              </span>
            </motion.article>
          ))}
        </div>

        <div className="achievement-bottomline">
          <span>
            <Users size={14} />
            LEARNING · BUILDING · COLLABORATING
          </span>
          <span>ALWAYS IN PROGRESS.</span>
        </div>
      </div>
    </section>
  );
}
