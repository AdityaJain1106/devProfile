
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Command } from "lucide-react";
import { skillCategories } from "../data/skills";
import "./Skills.css";
import {
  siOpenjdk,
  siPython,
  siJavascript,
  siTypescript,
  siHtml5,
  siCss,
  siReact,
  siTailwindcss,
  siNodedotjs,
  siExpress,
  siSpringboot,
  siVite,
  siThreedotjs,
  siMysql,
  siMongodb,
  siFirebase,
  siMongoose,
  siGithubcopilot,
  siClaude,
  siGooglegemini,
  siGooglecloud,
  siElevenlabs,
  siGit,
  siGithub,
  siFigma,
  siPostman,
  siPandas,
  siScikitlearn,
} from "simple-icons";

interface SimpleIconData {
  path: string;
  hex: string;
}

const skillIconMap: Record<string, SimpleIconData> = {
  java: siOpenjdk,
  python: siPython,
  javascript: siJavascript,
  typescript: siTypescript,
  html5: siHtml5,
  css: siCss,
  react: siReact,
  tailwindcss: siTailwindcss,
  nodedotjs: siNodedotjs,
  express: siExpress,
  springboot: siSpringboot,
  vite: siVite,
  threedotjs: siThreedotjs,

  mysql: siMysql,
  mongodb: siMongodb,
  firebase: siFirebase,
  mongoose: siMongoose,

  githubcopilot: siGithubcopilot,
  claude: siClaude,
  googlegemini: siGooglegemini,
  googlecloud: siGooglecloud,
  elevenlabs: siElevenlabs,

  git: siGit,
  github: siGithub,
  figma: siFigma,
  postman: siPostman,
  pandas: siPandas,
  scikitlearn: siScikitlearn,
};

function getSkillIcon(iconName?: string): SimpleIconData | null {
  if (!iconName) return null;

  return skillIconMap[iconName] ?? null;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(
    skillCategories[0].id
  );

  const shouldReduceMotion = useReducedMotion();

  const active = skillCategories.find(
    (category) => category.id === activeCategory
  )!;

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <div className="skills-eyebrow">
            <span className="skills-eyebrow-line" />
            TECHNICAL EXPERTISE
          </div>

          <div className="skills-heading-row">
            <h2>
              THE TOOLS
              <br />
              <span>BEHIND THE BUILD.</span>
            </h2>

            <p>
              A growing engineering toolkit — from computer science
              fundamentals to modern full-stack and AI-powered development.
            </p>
          </div>
        </div>

        <div className="skills-interface">
          <aside className="skills-sidebar">
            <div className="skills-sidebar-label">
              <Command size={14} />
              <span>EXPLORER</span>
            </div>

            <div className="skills-category-list">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`skills-category ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={activeCategory === category.id}
                >
                  <span className="skills-category-number">
                    {category.number}
                  </span>

                  <span className="skills-category-title">
                    {category.title}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="skills-category-arrow"
                  />
                </button>
              ))}
            </div>

            <div className="skills-sidebar-footer">
              <span className="skills-status-dot" />
              CONTINUOUSLY LEARNING
            </div>
          </aside>

          <div className="skills-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="skills-content"
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 12 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: -8 }
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.25,
                  ease: "easeOut",
                }}
              >
                <div className="skills-display-top">
                  <span>MODULE / {active.number}</span>
                  <span>{active.skills.length} TECHNOLOGIES</span>
                </div>

                <h3>{active.title}</h3>

                <p className="skills-description">
                  {active.description}
                </p>

                <div className="skills-divider" />

                <div className="skills-list">
                  {active.skills.map((skill, index) => {
                    const skillIcon = getSkillIcon(skill.icon);

                    return (
                      <motion.div
                        key={skill.name}
                        className="skill-item"
                        initial={
                          shouldReduceMotion
                            ? false
                            : { opacity: 0, y: 8 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.2,
                          delay: shouldReduceMotion
                            ? 0
                            : index * 0.035,
                        }}
                      >
                        <span className="skill-item-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="skill-logo">
                          {skillIcon ? (
                            <svg
                              viewBox="0 0 24 24"
                              role="img"
                              aria-label={`${skill.name} logo`}
                              fill="currentColor"
                            >
                              <path d={skillIcon.path} />
                            </svg>
                          ) : (
                            <span
                              className="skill-logo-fallback"
                              aria-hidden="true"
                            >
                              ✳
                            </span>
                          )}
                        </span>

                        <span className="skill-item-name">
                          {skill.name}
                        </span>

                        <span className="skill-item-indicator" />
                      </motion.div>
                    );
                  })}
                </div>

                <div className="skills-display-bottom">
                  <span>ADITYA JAIN / ENGINEERING TOOLKIT</span>
                  <span>MODULE {active.number} OF 07</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
