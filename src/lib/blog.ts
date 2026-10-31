import type { CollectionEntry } from 'astro:content';

const WORDS_PER_MINUTE = 230;

/** Reading time from the post's own text, so it can't drift from the content. */
export function readingTime(post: CollectionEntry<'blog'>): string {
  const text = post.body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');
  const words = text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
}

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-');
}

export function formatPostDate(date: Date, month: 'short' | 'long' = 'short'): string {
  return date.toLocaleDateString('en-US', { month, day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}
