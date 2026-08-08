# themohammadparwez.com

Personal brand site for Mohammad Parwez, built with [Astro](https://astro.build) + Tailwind CSS, deployed to
GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # preview the production build locally
```

## Publishing a new blog post — no coding required

1. Go to `src/content/blog/`.
2. Duplicate any existing `.md` file, rename it to your new post's slug, e.g. `my-new-post.md`.
3. Edit the frontmatter at the top:

```yaml
---
title: "Your Post Title"
description: "One or two sentences for SEO and the blog listing."
pubDate: 2026-08-08
heroImage: "/images/blog/your-image.jpg"
category: "AI"   # one of: Leadership, Project Management, Warehouse Automation,
                  # Digital Transformation, AI, Toastmasters, Personal Growth
tags: ["AI", "Automation"]
readingTime: "6 min read"
---
```

4. Write the post body in Markdown below the frontmatter.
5. Drop any images into `public/images/blog/`.
6. Commit and push to `main` — GitHub Actions builds and deploys automatically. The post page, URL,
   blog listing, category page, and RSS feed entry are all generated automatically. No further action needed.

## Adding a project / case study

Add a new `.md` file to `src/content/projects/` following the frontmatter shape of the existing files.

## Adding a testimonial or Toastmasters speech

See the `README.md` files inside `src/content/testimonials/` and `src/content/speeches/`.

## Adding a resource / downloadable template

1. Drop the file into `public/resources/`.
2. Add a matching `.json` entry to `src/content/resources/`.

## Analytics

Google Analytics and Microsoft Clarity snippets live in `src/layouts/BaseLayout.astro`. Replace the
`CLARITY_ID` placeholder with your real Microsoft Clarity project ID.

## Custom domain

The `public/CNAME` file is already set to `themohammadparwez.com`. Point your domain's DNS to GitHub Pages
per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
