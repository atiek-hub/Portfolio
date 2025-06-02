"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaLightbulb,
} from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
  role?: string;
  challenges?: string;
}

const projects: Project[] = [
  {
    title: "Recipe Manager",
    description:
      "レシピ管理アプリ。ユーザーはレシピを追加、編集、削除できる。楽天APIを使い、レシピの検索も可能。",
    technologies: [
      "React",
      "TypeScript",
      "shadcn/ui",
      "Bun",
      "Hono",
      "Prisma",
      "Supabase",
    ],
    image: "/recipe-mgr.png",
    githubUrl: "https://github.com/atiek-hub/recipe-mgr",
    demoUrl: "https://zenn.dev/k_m_i/articles/6d91fd85aa47f2",
    role: "フロントエンド、バックエンド",
    challenges: "DB設計、HonoでのAPI設計",
  },
  {
    title: "Util Func",
    description:
      "タイマー、ストップウォッチ、カレンダー機能を持つユーティリティアプリ。",
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "shadcn/ui",
      "NestJS",
      "Prisma",
      "Supabase",
    ],
    image: "/utilfunc.png",
    githubUrl: "https://github.com/atiek-hub/util-function",
    demoUrl: "https://zenn.dev/k_m_i/articles/158e513f8e2cb6",
    role: "フロントエンド、バックエンド",
    challenges: "コンポーネントの再利用性向上、UI/UXの改善",
  },
  // 他のプロジェクトを追加
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-[#1E1B4B] to-[#2D1B69] text-gray-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                className="group relative bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-violet-400/60 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold mb-2 text-gray-50 group-hover:text-violet-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-violet-500/20 text-violet-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.role && (
                    <div className="flex items-center text-gray-300 mb-2">
                      <FaCode className="w-4 h-4 mr-2 text-violet-300" />
                      <span>
                        <strong className="text-gray-50">役割:</strong>{" "}
                        {project.role}
                      </span>
                    </div>
                  )}

                  {project.challenges && (
                    <div className="flex items-start text-gray-300 mb-4">
                      <FaLightbulb className="w-4 h-4 mr-2 mt-1 text-violet-300" />
                      <span>
                        <strong className="text-gray-50">課題と解決:</strong>{" "}
                        {project.challenges}
                      </span>
                    </div>
                  )}

                  <div className="flex space-x-4 mt-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-50 hover:text-violet-200 transition-colors"
                    >
                      <FaGithub className="w-5 h-5 mr-2" />
                      GitHub
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-50 hover:text-violet-200 transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* 装飾的な背景要素 */}
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity -z-10" />
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
