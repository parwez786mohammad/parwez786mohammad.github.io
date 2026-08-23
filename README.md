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

## Adding a testimonial

1. Duplicate any `.json` file in `src/content/testimonials/` and rename it.
2. Fill in `name`, `role`, `organization` (optional), `category` (one of `Colleague`, `Customer`, `Manager`,
   `Team Member`, `Student`, `Mentor`, `Toastmaster` — shown as a badge on the card), `quote`, `avatar` (optional
   image path), and `dateAdded`.
3. It appears automatically in the "What People Are Saying" section on the homepage — testimonials don't have
   a separate page.

## Adding a Toastmasters speech / video

1. Duplicate any `.json` file in `src/content/speeches/` (create the folder if it's empty) and rename it.
2. Fill in the fields:

   ```jsonc
   {
     "pathwayLevel": 1,              // 1-5, which Pathways level this belongs to
     "projectNumber": 2,             // number within that level (optional)
     "projectName": "Evaluation and Feedback",
     "speechTitle": "Your speech title",   // omit until the speech is actually delivered
     "status": "Completed",          // "Completed" or "Upcoming"
     "date": "2026-09-01",           // omit if not yet delivered
     "eventClub": "DSO Toastmasters Club",
     "videoUrl": "https://youtu.be/XXXXXXXXXXX", // or a path like /videos/my-speech.mp4 — omit if no video yet
     "role": "Speaker"
   }
   ```
3. It slots automatically into the Level 1-5 timeline (matched by `pathwayLevel` + `projectNumber`) and into
   the Speech Library cards on the Toastmasters page — no page code needs to change. `videoUrl` can be a
   YouTube link (embeds automatically) or a direct video file path (renders with a native player); leave it
   out and the card shows a "video coming soon" placeholder. For Level 2-5 project names that aren't public
   yet, add entries once you know them — until then those levels show as "Future Projects" placeholders.

## Adding a resource / downloadable template

1. Drop the file into `public/resources/`.
2. Add a matching `.json` entry to `src/content/resources/`.

## Analytics

Google Analytics is live in `src/layouts/BaseLayout.astro`. Microsoft Clarity is not set up yet — create a
project at [clarity.microsoft.com](https://clarity.microsoft.com), then add its tracking snippet back into
`BaseLayout.astro`'s `<head>` with your real project ID.

## Custom domain

The `public/CNAME` file is already set to `themohammadparwez.com`. Point your domain's DNS to GitHub Pages
per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
