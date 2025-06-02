"use client";
import React from "react";
import { motion } from "framer-motion";
// import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { SiZenn } from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#4C1D95]">
      {/* 背景の装飾要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.3),rgba(0,0,0,0.6))]" />
        <Image
          src="/IMG_5093.jpeg"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-50 mb-6 leading-tight">
              K.M
              <span className="block text-2xl md:text-3xl font-normal text-violet-200 mt-2">
                React × TypeScriptが得意な
                <br />
                フロントエンドエンジニア
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl">
              モダンなWeb技術を活用して、フルスタックな開発を行っています。
              <br />
              ユーザーフレンドリーなアプリケーションを開発することを得意としています。
            </p>

            <div className="flex space-x-6 mb-12">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-50 hover:text-violet-300 transition-colors"
              >
                <FaGithub className="w-8 h-8" />
              </Link>
              <Link
                href="https://x.com/oezfvo1hxqtkkh1?s=21&t=hC_yO6zSASoUC0FgulVVww"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-50 hover:text-violet-300 transition-colors"
              >
                <FaTwitter className="w-8 h-8" />
              </Link>
              <Link
                href="https://zenn.dev/k_m_i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-50 hover:text-violet-300 transition-colors"
              >
                <SiZenn className="w-8 h-8" />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* <Link
                href="#contact"
                className="inline-block bg-violet-500 hover:bg-violet-600 text-gray-50 font-semibold py-3 px-8 rounded-full transition-colors"
              >
                お問い合わせ
              </Link> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
