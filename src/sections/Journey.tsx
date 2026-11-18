
import { motion } from "motion/react";
import {
  ArrowUpRight,
  GraduationCap,
  MapPin,
  CalendarDays,
} from "lucide-react";
import { education, academicRecords } from "../data/journey";
import "./Journey.css";

export default function Journey() {
  return (
    <section className="journey-section" id="journey">
      <div className="journey-container">
        <div className="journey-eyebrow">
          <span />
          THE JOURNEY SO FAR
        </div>

        <div className="journey-heading">
          <h2>
            LEARNING.
            <br />
            <span>EVOLVING.</span>
          </h2>

          <p>
            Every step, every challenge, and every experience
            contributes to the engineer I'm becoming.
          </p>
        </div>

        <div className="education-layout">
          <motion.div
            className="education-main"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="education-topline">
              <span>01 / ACADEMIC FOUNDATION</span>
              <GraduationCap size={19} />
            </div>

            <div className="education-content">
              <div className="education-monogram">VIT</div>

              <div className="education-details">
                <span className="education-label">CURRENTLY PURSUING</span>

                <h3>{education.qualification}</h3>

                <h4>{education.specialization}</h4>

                <p className="education-institution">
                  {education.institution}
                </p>

                <div className="education-meta">
                  <span>
                    <CalendarDays size={14} />
                    {education.period}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {education.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="education-score">
              <div>
                <span className="education-label">ACADEMIC PERFORMANCE</span>
                <div className="education-score-value">
                  {education.score}
                  <span>/10</span>
                </div>
                <span className="education-score-caption">
                  {education.scoreLabel}
                </span>
              </div>

              <div className="education-score-mark">
                <span>CGPA</span>
                <ArrowUpRight size={22} />
              </div>
            </div>

            <div className="education-bottomline">
              <span>COMPUTER SCIENCE ENGINEERING</span>
              <span>2024 — 2028</span>
            </div>
          </motion.div>

          <motion.aside
            className="academic-history"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="academic-history-heading">
              <span>02 / EARLIER EDUCATION</span>
              <span className="academic-history-count">02 RECORDS</span>
            </div>

            {academicRecords.map((record, index) => (
              <div className="academic-record" key={record.id}>
                <span className="academic-record-number">
                  0{index + 1}
                </span>

                <div className="academic-record-content">
                  <span className="academic-record-qualification">
                    {record.qualification}
                  </span>

                  <h4>{record.institution}</h4>

                  <p>{record.location}</p>
                </div>

                <span className="academic-record-score">
                  {record.score}
                </span>
              </div>
            ))}

            <div className="academic-history-note">
              <span className="academic-note-dot" />
              THE FOUNDATION THAT STARTED IT ALL.
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
