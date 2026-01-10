import { Experience, Education, Hackathon, SkillCategory } from '@/types';

export const generateExperienceMarkdown = (experiences: Experience[]): string => {
  return experiences
    .map(exp =>
      `
## ${exp.position}
**${exp.company}** | ${exp.location}
*${exp.startDate} - ${exp.endDate}*

${exp.bullets.map(bullet => `- ${bullet}`).join('\n')}

**Technologies:** ${exp.technologies.join(', ')}
  `.trim()
    )
    .join('\n\n---\n\n');
};

export const generateEducationMarkdown = (education: Education[]): string => {
  return education
    .map(edu =>
      `
## ${edu.degree}
**${edu.institution}**
*${edu.startYear} - ${edu.endYear}*
  `.trim()
    )
    .join('\n\n');
};

export const generateHackathonsMarkdown = (hackathons: Hackathon[]): string => {
  return hackathons
    .map(hack =>
      `
### ${hack.name}
**${hack.institution}** | ${hack.date}
  `.trim()
    )
    .join('\n\n');
};

export const generateSkillsMarkdown = (skillCategories: SkillCategory[]): string => {
  return skillCategories
    .map(category =>
      `
### ${category.category}
${category.skills.join(' • ')}
  `.trim()
    )
    .join('\n\n');
};

export const generateFullResume = (
  experiences: Experience[],
  education: Education[],
  hackathons: Hackathon[],
  skillCategories: SkillCategory[]
): string => {
  return `
# Daniel Agostinho
**Front End Web Developer**

---

# Experience

${generateExperienceMarkdown(experiences)}

---

# Education

${generateEducationMarkdown(education)}

---

# Hackathons

${generateHackathonsMarkdown(hackathons)}

---

# Skills

${generateSkillsMarkdown(skillCategories)}
  `.trim();
};
