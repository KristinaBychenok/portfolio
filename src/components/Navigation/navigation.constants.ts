import { AboutSection } from '../Sections/about/aboutSection'
import { ContactsSection } from '../Sections/contacts/contactsSection'
import { EducationSection } from '../Sections/education/educationSection'
import { ExperienceSection } from '../Sections/experience/experienceSection'
import { ProjectsSection } from '../Sections/projects/projectsSection'
import { RecommendationsSection } from '../Sections/recommendations/recommendationsSection'
import { SkillsSection } from '../Sections/skills/skillsSection'

type NavListType = {
  id: string
  href: string
  title: string
  section: React.ComponentType
}

export const navList: NavListType[] = [
  { id: 'about', href: '#about', title: 'About', section: AboutSection },
  { id: 'skills', href: '#skills', title: 'Skills', section: SkillsSection },
  {
    id: 'experience',
    href: '#experience',
    title: 'Experience',
    section: ExperienceSection,
  },
  {
    id: 'project',
    href: '#project',
    title: 'Project',
    section: ProjectsSection,
  },
  {
    id: 'education',
    href: '#education',
    title: 'Education',
    section: EducationSection,
  },
  {
    id: 'recommendations',
    href: '#recommendations',
    title: 'Recommendations',
    section: RecommendationsSection,
  },
  {
    id: 'contacts',
    href: '#contacts',
    title: 'Contacts',
    section: ContactsSection,
  },
]
