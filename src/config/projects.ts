// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: "Dean’s List",
    description: "Awarded for outstanding academic performance at GWU.",
    date: "2023–2024",
    location: "George Washington University, Washington DC",
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: "Banking Analytics Proposal",
    description:
      "Conducted EDA on banking transactions and proposed customer retention strategies with projected 12% impact.",
    link: { href: "#", label: "Internal Project" },
    tags: ["EDA", "Business Analytics", "Banking", "Customer Retention"],
  },
  {
    name: "Titanic Survival Prediction",
    description:
      "Built a Random Forest model for Kaggle competition, achieving 84% validation accuracy and 80% F1 score.",
    link: { href: "#", label: "Kaggle Competition" },
    tags: ["Machine Learning", "Kaggle", "Random Forest", "Ethics"],
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: "Event Organizer – GW Chinese Culture Association",
    description:
      "Planned and led events including Mid-Autumn Festival, GW Voice, and Matchmaking Show, managing logistics and sponsorships.",
    date: "2022–Present",
    location: "George Washington University, DC",
  },
  {
    name: "Sponsorship Coordinator – GWCCA",
    description:
      "Secured ~$2,000 in sponsorships and promoted events via media outreach and campus promotion.",
    date: "2022–Present",
    location: "George Washington University, DC",
  },
]