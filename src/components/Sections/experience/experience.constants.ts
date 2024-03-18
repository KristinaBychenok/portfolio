type Experience = {
  id: number
  title: string
  company: string
  location: string
  date: string
  project: string
  stack: string[]
  description: string[]
}

export const experience: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'EPAM System',
    location: 'Wroclaw, Poland',
    date: 'April 2022 - Current',
    project:
      'the platform enables the booking of travel for unprofiled travelers',
    stack: [
      'React',
      'Redux',
      'Redux Toolkit',
      'React Router',
      'TypeScript',
      'Storybook',
      'Jest',
    ],
    description: [
      '- Collaborated with software development and testing team members to design and develop robust solutions meeting client requirements for functionality, scalability, and performance. Contributed ideas and suggestions in team meetings.',
      '- Worked closely with senior software staff to produce new software solutions.',
      '- Analyzed project documentation.',
      '- Worked with the React framework, applying extensive experience in TypeScript and utilizing Redux to develop an application.',
      '- Executed various tasks, including: creating new components and hooks, developing Storybook UI library, developing screen layouts, implementing validation and back-end connections.',
      '- Optimized application for improved user performance, conducted code refactoring, and enhanced overall functionality.',
      '- Integrated third-party tools and components into applications.',
      '- Worked with API requests.',
      '- Implemented unit and snapshot tests, leveraging the fast-check library.',
      '- Discussed issues with team members to provide resolutions and applied best practices. Proactively resolved bugs and contributed to a smooth sprint experience',
      '- Navigated all stages of the sprint, actively participating in grooming and estimation processes.',
    ],
  },
  {
    id: 2,
    title: 'Junior Software Engineer',
    company: 'JobJun',
    location: 'Minsk, Belarus',
    date: 'February 2022 - April 2022',
    project:
      'an application designed to assist individuals without prior experience in finding job opportunities or internships. Additionally, it enables employers to discover and connect with entry-level specialists for internships or entry-level positions.',
    stack: ['React', 'Redux', 'Redux Toolkit', 'Storybook'],
    description: [
      "- Actively participated in discussions to the application's architecture and development approach.",
      '- Collaborated with the designer to discuss application ideas and ensure alignment with design principles.',
      '- Took a hands-on approach in creating the initial pages of the application, translating design concepts into functional components.',
    ],
  },
  {
    id: 3,
    title: 'Design Engineer',
    company: 'TSProject',
    location: 'Minsk, Belarus',
    date: 'November 2018 - August 2021',
    project: '',
    stack: ['Autodesk', 'AutoCAD', 'Revit', 'Robot Structural Analysis'],
    description: ['- Design buildings and structures.'],
  },
]
