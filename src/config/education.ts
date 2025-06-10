// education
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

export const educationList: Array<EducationItemType> = [
  {
    school: 'George Washington University',
    major: 'B.B.A. in Business Analytics & Finance Concentration',
    logo: 'college',
    start: '2022',
    end: '2026 (expected)',
  },
]