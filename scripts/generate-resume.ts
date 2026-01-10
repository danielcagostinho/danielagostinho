import { generateFullResume } from '../lib/markdown';
import { experience, education, hackathons, skillCategories } from '../lib/data';
import * as fs from 'fs';
import * as path from 'path';

const resumeMarkdown = generateFullResume(experience, education, hackathons, skillCategories);

const outputPath = path.join(process.cwd(), 'RESUME.md');
fs.writeFileSync(outputPath, resumeMarkdown);

// eslint-disable-next-line no-console
console.log(`Resume generated at: ${outputPath}`);
