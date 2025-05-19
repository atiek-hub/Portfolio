"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  name: string;
  experienceYears: number;
  category: "frontend" | "backend" | "other";
}

const calculateLevel = (years: number): number => {
  if (years >= 3) return 5;
  if (years >= 2) return 4;
  if (years >= 1) return 3;
  if (years >= 0.5) return 2;
  return 1;
};

const skills: Skill[] = [
  // Frontend
  { name: "React", experienceYears: 2, category: "frontend" },
  { name: "TypeScript", experienceYears: 2, category: "frontend" },
  { name: "Next.js", experienceYears: 0.4, category: "frontend" },
  { name: "HTML/CSS", experienceYears: 2, category: "frontend" },
  { name: "Vue", experienceYears: 0.2, category: "frontend" },

  // Backend
  { name: "Node.js", experienceYears: 2, category: "backend" },
  { name: "NestJS", experienceYears: 0.2, category: "backend" },
  { name: "Hono", experienceYears: 0.2, category: "backend" },
  { name: "PHP(Laravel)", experienceYears: 0.3, category: "backend" },
  { name: "Python", experienceYears: 0.1, category: "backend" },
  { name: "Prisma", experienceYears: 0.2, category: "backend" },
  { name: "Supabase", experienceYears: 0.2, category: "backend" },

  // Other
  { name: "Git", experienceYears: 2, category: "other" },
  { name: "Windows", experienceYears: 2, category: "other" },
  { name: "Test", experienceYears: 0.6, category: "other" },
];

const categories = {
  frontend: { name: "フロントエンド", icon: "💻" },
  backend: { name: "バックエンド", icon: "⚙️" },
  other: { name: "その他", icon: "🛠" },
};

const SkillBar = ({
  name,
  experienceYears,
}: {
  name: string;
  experienceYears: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const level = calculateLevel(experienceYears);
  const levelColors = {
    5: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    4: "bg-gradient-to-r from-violet-400 to-fuchsia-400",
    3: "bg-gradient-to-r from-violet-300 to-fuchsia-300",
    2: "bg-gradient-to-r from-violet-200 to-fuchsia-200",
    1: "bg-gradient-to-r from-violet-100 to-fuchsia-100",
  };
  const yearsText = (year: number) => {
    if (year >= 1) {
      return `${year.toFixed(1)}年`;
    } else {
      const month = year * 10;
      return `${month}ヶ月`;
    }
  };
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-50 font-medium">{name}</span>
        <div className="flex items-center space-x-3">
          <span className="text-gray-300 text-sm">
            {yearsText(experienceYears)}
          </span>
          <span className="text-yellow-400">
            {"★".repeat(level)}
            <span className="text-gray-600">{"☆".repeat(5 - level)}</span>
          </span>
        </div>
      </div>
      <motion.div
        className="h-2 bg-white/5 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={`h-full ${
            levelColors[level as keyof typeof levelColors]
          } rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level * 20}%` } : { width: 0 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#2D1B69] to-[#1E1B4B]"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-50 mb-12">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {(Object.keys(categories) as Array<keyof typeof categories>).map(
              (category) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-violet-400/60 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-4xl">{categories[category].icon}</div>
                    <h3 className="text-xl font-semibold text-gray-50">
                      {categories[category].name}
                    </h3>
                  </div>
                  {skills
                    .filter((skill) => skill.category === category)
                    .sort((a, b) => b.experienceYears - a.experienceYears)
                    .map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        experienceYears={skill.experienceYears}
                      />
                    ))}
                </motion.div>
              )
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center text-gray-400 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/10 max-w-2xl mx-auto"
          >
            <h4 className="text-gray-50 font-semibold mb-4">
              スキルレベルの基準
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
              <div>
                <span className="text-yellow-400">★★★★★</span>
                <br />
                3年以上
                <br />
                （熟練）
              </div>
              <div>
                <span className="text-yellow-400">★★★★</span>☆
                <br />
                2-3年
                <br />
                （上級）
              </div>
              <div>
                <span className="text-yellow-400">★★★</span>☆☆
                <br />
                1-2年
                <br />
                （中級）
              </div>
              <div>
                <span className="text-yellow-400">★★</span>☆☆☆
                <br />
                6ヶ月-1年
                <br />
                （初級）
              </div>
              <div>
                <span className="text-yellow-400">★</span>☆☆☆☆
                <br />
                6ヶ月未満
                <br />
                （入門）
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
