import type { Project } from './types';
import gjeans from '../content/projects/01-gjeans.json';
import avenir from '../content/projects/02-avenir.json';
import botanica from '../content/projects/03-botanica.json';
import mare from '../content/projects/04-mare.json';
import objet from '../content/projects/05-objet.json';
import tildeo from '../content/projects/06-tildeo.json';

const all: Project[] = [
  gjeans as Project,
  avenir as Project,
  botanica as Project,
  mare as Project,
  objet as Project,
  tildeo as Project
];

export function getProjects(): Project[] {
  return all;
}

export function getProject(slug: string): Project | undefined {
  return all.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return all.map((p) => p.slug);
}
