"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const strengths = [
    {
      title: "モダンなフロントエンド開発（React, TypeScript）",
      description: "モダンなフロントエンド開発に関する強みを説明します。",
      icon: "🚀",
    },
    {
      title: "パフォーマンス最適化",
      description: "パフォーマンス最適化に関する強みを説明します。",
      icon: "⚡",
    },
    {
      title: "UIコンポーネント設計",
      description: "UIコンポーネント設計に関する強みを説明します。",
      icon: "🎨",
    },
    {
      title: "アクセシビリティ対応",
      description: "アクセシビリティ対応に関する強みを説明します。",
      icon: "🦾",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#1E1B4B] to-[#2D1B69] text-gray-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/about-image.jpg"
                  alt="About me"
                  fill
                  className="object-cover"
                />
              </div>
              {/* 装飾的な背景要素 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg blur-3xl opacity-20 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="prose prose-lg prose-invert">
                <p className="text-gray-300 leading-relaxed">
                  フロントエンド開発を中心に、3年以上の実務経験があります。
                  React、TypeScript、Next.jsを使用した大規模なWebアプリケーション開発に携わってきました。
                </p>
                <p className="text-gray-300 leading-relaxed">
                  ユーザー体験を最重要視し、パフォーマンスとアクセシビリティの両立を追求しています。
                  また、チーム開発においては、コードレビューやペアプログラミングを通じて、
                  チームメンバーとの知識共有やスキル向上に積極的に取り組んでいます。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 hover:border-violet-400/60 transition-colors"
                  >
                    <div className="text-violet-300 mb-4">{strength.icon}</div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-50">
                      {strength.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {strength.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
