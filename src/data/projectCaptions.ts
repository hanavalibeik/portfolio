export type ProjectCaption = {
  paragraphs: string[];
};

/**
 * Only exact, verified Instagram captions belong here.
 * Do not paraphrase, rewrite, summarize, or add portfolio copy.
 */
export const projectCaptions: Record<string, ProjectCaption> = {};

export function getProjectCaption(slug: string): ProjectCaption | undefined {
  return projectCaptions[slug];
}
