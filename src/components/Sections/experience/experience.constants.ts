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
    company: 'Software development company',
    location: 'Wroclaw, Poland',
    date: 'March 2024 - Current',
    project:
      '- the platform for booking piercing services in Wrocław; - the platform for a construction company to display their services, book services, and showcase a gallery of completed projects.',
    stack: [
      'Next.js',
      'React',
      'Redux',
      'Redux Toolkit',
      'TypeScript',
      'Tailwind CSS',
      'MUI',
      'i18next',
      'Git',
      'Docker',
    ],
    description: [
      '- Designed and developed robust solutions meeting client requirements for functionality, scalability, and performance.',
      '- Worked with the React framework and Next.js, applying extensive experience in TypeScript and utilizing Redux to develop an application.',
      '- Developed a project enabling users to book a piercing procedure, including a form for submission, form validation, and the creation of new components and hooks.',
      '- Implemented functionality for language switching to view content in different languages.',
      '- Optimized application for improved user performance, conducted code refactoring, and enhanced overall functionality.',
      '- Integrated the backend to send data from the validated form to the server for further user notification about the booking, working with API requests.',
      '- Developed screen layouts with information about the piercing studio and the construction company, using the MUI library and Tailwind CSS.',
    ],
  },
  {
    id: 2,
    title: 'Full-Stack Engineer ',
    company: 'Software development company',
    location: 'Wroclaw, Poland',
    date: 'March 2024 - Current',
    project: 'The blogging platform for writing and reading posts.',
    stack: [
      'React',
      'Node.js',
      'Express.js',
      'REST API',
      'Docker',
      'WebSocket',
      'Amazon ECR',
      'SQL',
      'GraphQL',
      'MongoDB',
      'Git',
    ],
    description: [
      '- Created a Node.js server using Express.js.',
      '- Implemented routing and dynamic routes.',
      '- Integrated MongoDB and Mongoose for database management.',
      '- Implemented authentication flow, protected routes, and hashed passwords.',
      '- Utilized JSON Web Token (JWT) for SignIn and Login flow.',
      '- Added express-validator for input validation.',
      '- Set up and established WebSockets for real-time communication.',
      '- Wrote a Dockerfile and created a Docker image.',
      '- Pushed the Docker image to Amazon Elastic Container Registry (ECR).',
      '- Created a Docker Compose file and ran Docker containers.',
    ],
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'EPAM System',
    location: 'Wroclaw, Poland',
    date: 'April 2022 - February 2024',
    project:
      'the platform enables the booking of travel for unprofiled travelers',
    stack: [
      'React',
      'Redux',
      'Redux Toolkit',
      'React Router',
      'TypeScript',
      'Storybook',
      'CSS Modules',
      'Jest',
      'Agile (Scrum)',
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
    id: 4,
    title: 'Junior Software Engineer',
    company: 'JobJun',
    location: 'Minsk, Belarus',
    date: 'December 2021 - April 2022',
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
    id: 5,
    title: 'Design Engineer',
    company: 'TSProject',
    location: 'Minsk, Belarus',
    date: 'November 2018 - August 2021',
    project: '',
    stack: ['Autodesk', 'AutoCAD', 'Revit', 'Robot Structural Analysis'],
    description: ['- Design buildings and structures.'],
  },
]
