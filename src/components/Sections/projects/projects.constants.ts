const { BASE_URL } = import.meta.env

export const projects = [
  {
    name: 'Platform for booking of travel',
    description:
      'The platform enables the booking of travel for unprofiled travelers',
    text:
      'In this project, I undertook the development of screen layouts and implemented new components, sections, and pages. Alongside this, I conducted the necessary unit and snapshot tests to ensure the robustness of the application. The implemented features include forms validation, facilitating correct data transfer between the frontend and backend.',
    clarification:
      "One illustrative example of my contributions involves the 'Create/Edit Project' section, where design, field names, and filled-in information have been altered for confidentiality reasons.",
    stack: [
      'React',
      'Redux',
      'Redux Toolkit',
      'React Router',
      'TypeScript',
      'Storybook',
      'Jest',
      'Reselect Library',
      'GIT',
      'Webpack',
      'Agile (Scrum)',
    ],
    imgs: [
      {
        src: `${BASE_URL}project-1.png`,
        text:
          "The 'Create/Edit Project' section features user-fillable fields related to projects and travelers. The 'SAVE' button activates upon correctly filling any field, while the 'SUBMIT' button activates only after all required fields are correctly filled. Both buttons send the data to the database. Users can reset all filled fields before saving, and saved data persists through project close and reopen. The fields include various types such as inputs, textareas, dropdowns, and checkboxes. Upon project creation, it is added to the database and displayed on the 'PROJECTS' page. An 'OVERVIEW' page provides projects statistics.",
      },
      {
        src: `${BASE_URL}project-2.png`,
        text:
          'The second tab allows users to add travelers to their projects, displaying a table with added travelers. New travelers can be added, and existing ones can be added from the database using email. A drawer with editable information about the added traveler can be opened.',
      },
      {
        src: `${BASE_URL}project-3.png`,
        text: '',
      },
    ],
    team:
      '2 Front-end developers, 2 Back-end developers, Power Platform developer, 2 Testers, Designer, Project manager, Business analyst',
    tasks: [
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
]

export const customTheme = {
  body: {
    base: 'p-6 flex-1 overflow-auto bg-yellow-50 bg-opacity-50',
  },
  header: {
    base:
      'flex items-start justify-between rounded-t bg-yellow-100 bg-opacity-50 border-b p-5',
  },
}
