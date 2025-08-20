/**
 * Portfolio
 * Copyright (C) 2025 Maxim (https://github.com/maximjsx/portfolio)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation.
 */

import { notFound } from "next/navigation";
import blogConfig from "/BLOG.json";
import config from "/CONFIG.json";
import BlogPostLayout from "@/components/custom/blog_post_layout";

export async function generateStaticParams() {
  const posts = blogConfig.posts || {};
  return Object.entries(posts)
    .filter(([_, post]) => post.enabled)
    .map(([slug]) => ({
      slug,
    }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogConfig.posts?.[slug];

  if (!post || !post.enabled) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - ${config.siteMetadata.title}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.featured_image ? [post.featured_image] : [],
      type: "article",
      authors: [post.author?.name || blogConfig.blog.default_author.name],
      publishedTime: post.published_date,
      modifiedTime: post.updated_date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.featured_image ? [post.featured_image] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = blogConfig.posts?.[slug];

  if (!post || !post.enabled || !blogConfig.blog.enabled) {
    notFound();
  }

  return <BlogPostLayout post={post} slug={slug} />;
}
