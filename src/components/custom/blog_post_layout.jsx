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
import { parseText } from "@/lib/parse_links";
import blogConfig from "/BLOG.json";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Eye,
} from "lucide-react";
import Prism from "prismjs";
import { useEffect } from "react";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";

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

function CodeBlock({ content, language = "javascript", title }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900 border border-white/10">
      {title && (
        <div className="px-4 py-2 bg-gray-800 border-b border-white/10">
          <span className="text-sm text-gray-300 font-medium">{title}</span>
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className={`language-${language}`}>{content}</code>
      </pre>
    </div>
  );
}

function ContentRenderer({ contentItem, index }) {
  switch (contentItem.type) {
    case "text":
      return (
        <motion.div
          key={index}
          variants={itemVariants}
          className="prose prose-lg prose-invert max-w-none mb-6"
        >
          <p className="c-cursor-text text-muted-foreground leading-relaxed text-lg">
            {parseText(contentItem.content)}
          </p>
        </motion.div>
      );

    case "image":
      return (
        <motion.div key={index} variants={itemVariants} className="my-8">
          <div className="relative w-full overflow-hidden rounded-lg border border-white/10">
            <Image
              src={contentItem.src}
              alt={contentItem.alt}
              width={1200} 
              height={800} 
              className="w-full h-auto object-cover"
            />
          </div>
          {contentItem.caption && (
            <p className="mt-2 text-center text-sm italic text-muted-foreground">
              {contentItem.caption}
            </p>
          )}
        </motion.div>
      );

    case "code":
      return (
        <motion.div key={index} variants={itemVariants} className="my-6">
          <CodeBlock
            content={contentItem.content}
            language={contentItem.language}
            title={contentItem.title}
          />
        </motion.div>
      );

    case "list":
      return (
        <motion.div key={index} variants={itemVariants} className="my-6">
          <ul className="space-y-3">
            {contentItem.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0"></span>
                <span className="c-cursor-text text-muted-foreground leading-relaxed">
                  {parseText(item)}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      );

    case "section":
      return (
        <motion.section key={index} variants={itemVariants} className="my-8">
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">
            {contentItem.title}
          </h2>
          <div className="space-y-4">
            {contentItem.content.map((subItem, subIndex) => (
              <ContentRenderer
                key={subIndex}
                contentItem={subItem}
                index={subIndex}
              />
            ))}
          </div>
        </motion.section>
      );

    default:
      return null;
  }
}

function RelatedPosts({ relatedPostsSlugs, currentSlug }) {
  const relatedPosts = relatedPostsSlugs
    ?.map((slug) => ({
      slug,
      ...blogConfig.posts[slug],
    }))
    .filter((post) => post.enabled && post.slug !== currentSlug)
    .slice(0, 100);

  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <motion.section
      variants={itemVariants}
      className="mt-16 pt-8 border-t border-white/10"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Related Posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <motion.article
            key={post.slug}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-white/8 to-white/4 border border-white/5 backdrop-blur-sm hover:from-white/12 hover:to-white/6 hover:border-white/20 transition-all duration-300"
          >
            <Link href={`/blog/${post.slug}`}>
              {post.featured_image && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.featured_image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-4">
                <h4 className="font-semibold text-white group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {parseText(post.description)}
                </p>
                <div className="flex items-center gap-2">
                  {(post.author?.avatar || blogConfig.blog.default_author.avatar) && 
                    <Image
                      src={
                        post.author?.avatar ||
                        blogConfig.blog.default_author.avatar
                      }
                      alt={
                        post.author?.name || blogConfig.blog.default_author.name
                      }
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                  }
                  <span className="text-xs text-muted-foreground">
                    {post.author?.name || blogConfig.blog.default_author.name}
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default function BlogPostLayout({ post, slug }) {
  const author = post.author || blogConfig.blog.default_author;

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen">
      <motion.article
        className="container mx-auto px-4 lg:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Back to Blog */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Featured Image */}
          {post.featured_image && (
            <motion.div
              variants={itemVariants}
              className="relative aspect-video rounded-xl overflow-hidden mb-8 border border-white/10"
            >
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          )}

          <motion.header variants={itemVariants} className="mb-8">

            {post.category && (
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-secondary/20 text-secondary mb-4">
                {post.category}
              </span>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                {(author?.avatar || blogConfig.blog.default_author.avatar) && (
                  <Image
                    src={
                      author?.avatar || blogConfig.blog.default_author.avatar
                    }
                    alt={author?.name || blogConfig.blog.default_author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span>
                  {author?.name || blogConfig.blog.default_author.name}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.published_date)}</span>
              </div>

              {post.reading_time && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.reading_time}</span>
                </div>
              )}

              {post.hidden && (
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>Hidden</span>
                </div>
              )}

              <button
                onClick={sharePost}
                className="flex items-center gap-1 hover:text-secondary transition-colors"
                title="Share post"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-md bg-white/5 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.header>



          <motion.div
            variants={containerVariants}
            className="prose prose-lg prose-invert max-w-none"
          >
            {post.content?.map((contentItem, index) => (
              <ContentRenderer
                key={index}
                contentItem={contentItem}
                index={index}
              />
            ))}
          </motion.div>

          <RelatedPosts
            relatedPostsSlugs={post.related_posts}
            currentSlug={slug}
          />
        </div>
      </motion.article>
    </div>
  );
}
