import type { CollectionEntry } from 'astro:content';

// The Dynamic Leadership Path curriculum. Level 1's projects are known; levels 2-5
// will get real project names added here as they're reached. Individual speech
// records (title, date, video) live in src/content/speeches/ and are matched in
// by pathwayLevel + projectNumber, so new speeches never require a page edit.
export const pathwayLevels = [
  {
    level: 1,
    projects: [
      { number: 1, name: 'Ice Breaker' },
      { number: 2, name: 'Writing a Speech with Purpose' },
      { number: 3, name: 'Introduction to Vocal Variety and Body Language' },
      { number: 4, name: 'Evaluation and Feedback' },
    ],
  },
  { level: 2, projects: [] as { number: number; name: string }[] },
  { level: 3, projects: [] as { number: number; name: string }[] },
  { level: 4, projects: [] as { number: number; name: string }[] },
  { level: 5, projects: [] as { number: number; name: string }[] },
];

type Speech = CollectionEntry<'speeches'>;

/** Newest first; undated speeches last. */
export function sortSpeeches(speeches: Speech[]) {
  return [...speeches].sort((a, b) => {
    if (a.data.date && b.data.date) return b.data.date.valueOf() - a.data.date.valueOf();
    if (a.data.date) return -1;
    if (b.data.date) return 1;
    return 0;
  });
}

/** Progress through the current (highest known) level, plus the latest speech and any awards. */
export function pathwayProgress(speeches: Speech[]) {
  const level = [...pathwayLevels].reverse().find((l) => l.projects.length > 0) ?? pathwayLevels[0];
  const completed = level.projects.filter((p) =>
    speeches.some((s) => s.data.pathwayLevel === level.level && s.data.projectNumber === p.number && s.data.status === 'Completed'),
  ).length;
  const sorted = sortSpeeches(speeches);
  return {
    level: level.level,
    completed,
    total: level.projects.length,
    latest: sorted[0],
    awarded: sorted.filter((s) => s.data.award),
  };
}

export function formatDate(date: Date, month: 'short' | 'long' = 'short') {
  return date.toLocaleDateString('en-US', { month, day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

export function getYouTubeId(url?: string) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}
