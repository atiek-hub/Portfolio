"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  platform: "Zenn" | "Qiita" | "note";
  url: string;
  thumbnail?: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Next.jsとTailwind CSSでモダンなポートフォリオサイトを作る",
    excerpt:
      "Next.jsとTailwind CSSを使用して、アニメーションやダークモード対応のポートフォリオサイトを作成する方法を解説します。",
    date: "2024-03-01",
    platform: "Zenn",
    url: "https://zenn.dev/yourusername/articles/portfolio-site",
    thumbnail: "/blog1.jpg",
  },
  // 他の記事を追加
];

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-b from-[#2D1B69] to-[#1E1B4B] text-gray-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-violet-400/60 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {post.thumbnail && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-300">{post.date}</span>
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-200 rounded-full text-sm">
                      {post.platform}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-50 group-hover:text-violet-200 transition-colors mb-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4">{post.excerpt}</p>

                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-violet-300 hover:text-violet-200 transition-colors"
                  >
                    記事を読む
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
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

export default Blog;
