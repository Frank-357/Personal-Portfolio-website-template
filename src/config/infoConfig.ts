export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Frank Guo'
export const headline = 'Rising Senior at George Washington University'
export const introduction =
  "Hi there! I'm Frank Guo, a rising senior majoring in Business Analytics with a concentration in Finance at George Washington University. I'm passionate about combining data, finance, and smart systems to solve real-world problems."

export const email = 'frank_guo@gwu.edu'
export const githubUsername = 'Frank-357'

// about page
export const aboutMeHeadline = 'Who Am I and What Do I Bring?'
export const aboutParagraphs = [
  "Hi! I'm Frank Guo, currently a rising senior at George Washington University majoring in Business Analytics with a Finance concentration. As an international student with a strong interest in data-driven decision-making, I've explored intersections between finance, analytics, and automation.",
  "Recently, I've been diving into quant trading, deep learning, and personal knowledge management (PKM). My current projects involve applying AI to structured financial problems and building smart workflows using tools like Dify and Obsidian.",
  "This website serves as my digital playground—a place to share my work, thoughts, and long-term experiments in system design, productivity, and leveraging information for strategic advantage.",
]

// blog
export const blogHeadLine = "My Explorations and Experiments"
export const blogIntro =
  "Here I write about data, decision-making, personal systems, and the intersection of finance and technology."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
