/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import blogConfig from "/BLOG.json";
import { parseText } from "@/lib/parse_links";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogCard({ post, slug }) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/8 to-white/4 border border-white/5 backdrop-blur-sm hover:from-white/12 hover:to-white/6 hover:border-white/20 transition-all duration-300"
    >
      <Link href={`/blog/${slug}`} className="block">
        {post.featured_image && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {post.category && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/90 text-white backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(post.published_date)}</span>
            </div>
            {post.reading_time && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{post.reading_time}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {post.title}
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {parseText(post.description)}
          </p>

          {/* Author & Tags */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {(post.author?.avatar ||
                blogConfig.blog.default_author.avatar) && (
                <Image
                  src={
                    post.author?.avatar || blogConfig.blog.default_author.avatar
                  }
                  alt={post.author?.name || blogConfig.blog.default_author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              <span className="text-xs text-muted-foreground">
                {post.author?.name || blogConfig.blog.default_author.name}
              </span>
            </div>

            <ArrowRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}

export default function BlogPage() {
  if (!blogConfig.blog.enabled) {
    return (
      <div className="container mx-auto px-4 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          Blog Not Available
        </h1>
        <p className="text-muted-foreground">The blog is currently disabled.</p>
      </div>
    );
  }

  const enabledPosts = Object.entries(blogConfig.posts || {})
    .filter(([_, post]) => post.enabled && !post.hidden)
    .sort(
      ([_, a], [__, b]) =>
        new Date(b.published_date) - new Date(a.published_date),
    );

  return (
    <div className="min-h-screen">
      <motion.div
        className="container mx-auto px-4 lg:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <TextAnimate
              animation="blurInUp"
              by="character"
              duration={1}
              className="text-4xl font-bold text-center uppercase mb-6"
            >
              {blogConfig.blog.title}
            </TextAnimate>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {parseText(blogConfig.blog.description)}
            </p>
          </motion.div>

          {/* Posts */}
          <motion.div variants={containerVariants} className="space-y-8">
            {enabledPosts.length === 0 ? (
              <motion.div variants={itemVariants} className="text-center py-16">
                <h2 className="text-2xl font-bold text-white mb-4">
                  No Posts Yet
                </h2>
                <p className="text-muted-foreground">
                  Check back soon for new content!
                </p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enabledPosts.map(([slug, post]) => (
                  <BlogCard key={slug} post={post} slug={slug} />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
