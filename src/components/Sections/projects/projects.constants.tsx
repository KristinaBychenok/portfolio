import { ReactNode } from 'react'

const { BASE_URL } = import.meta.env

type ProjectsType = {
  id: number
  name: string
  description: string
  text: ReactNode
  clarification: ReactNode
  stack?: string[]
  imgs?: {
    src: string
    text: ReactNode
  }[]
  team?: string
  tasks?: string[]
}[]

export const projects: ProjectsType = [
  {
    id: 1,
    name: 'Platform for booking of travel',
    description:
      'The platform enables the booking of travel for unprofiled travelers',
    text: (
      <p>
        In this project, I undertook{' '}
        {
          <span className="font-bold">
            the development of screen layouts and implemented new components,
            sections, and pages
          </span>
        }
        . Alongside this, I conducted the necessary{' '}
        {<span className="font-bold">unit and snapshot tests</span>} to ensure
        the robustness of the application. The implemented features include{' '}
        {
          <span className="font-bold">
            forms validation, facilitating correct data transfer between the
            frontend and backend, improving user performance
          </span>
        }
        .
      </p>
    ),
    clarification: (
      <p>
        One illustrative example of my contributions involves the 'Create/Edit
        Project' section, where{' '}
        {
          <span className="uppercase">
            design, field names, and filled-in information have been altered for
            confidentiality reasons
          </span>
        }
        .
      </p>
    ),
    stack: [
      'React',
      'Redux',
      'Redux Toolkit',
      'React Router',
      'TypeScript',
      'Storybook',
      'CSS Modules',
      'Jest',
      'Reselect Library',
      'GIT',
      'Webpack',
      'Agile (Scrum)',
    ],
    imgs: [
      {
        src: `${BASE_URL}project-1.png`,
        text: (
          <p>
            The 'Create/Edit Project' section{' '}
            {<span className="font-bold">features user-fillable fields </span>}
            related to projects and travelers. The 'SAVE' button activates upon
            correctly filling any field, while the 'SUBMIT' button activates
            only after all required fields are correctly filled.{' '}
            {
              <span className="font-bold">
                Both buttons send the data to the database. Users can reset all
                filled fields before saving, and saved data persists through
                project close and reopen.{' '}
              </span>
            }{' '}
            The fields include various types such as inputs, textareas,
            dropdowns, and checkboxes. Upon project creation, it is added to the
            database and displayed on the 'PROJECTS' page. An 'OVERVIEW' page
            provides projects statistics.
          </p>
        ),
      },
      {
        src: `${BASE_URL}project-2.png`,
        text: (
          <p>
            The second tab{' '}
            {
              <span className="font-bold">
                allows users to add travelers to their projects, displaying a
                table with added travelers.
              </span>
            }{' '}
            New travelers can be added, and existing ones can be added from the
            database using email. A drawer with editable information about the
            added traveler can be opened.
          </p>
        ),
      },
      {
        src: `${BASE_URL}project-3.png`,
        text: '',
      },
    ],
    team: '2 Front-end developers, 2 Back-end developers, Power Platform developer, 2 Testers, Designer, Project manager, Business analyst',
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
  {
    id: 2,
    name: 'My Portfolio',
    description:
      'Single page application, containing information about me and my professional experience',
    text: (
      <p>
        <p>
          I created this page myself to display all the information about my
          professional activities in the development field.{' '}
        </p>
        <p>
          To achieve this, I utilized technologies such as{' '}
          {<span className="font-bold">React, TypeScript and Vite</span>}.
          Styles were written using{' '}
          {<span className="font-bold">Tailwindcss</span>}. I deployed the page
          using {<span className="font-bold">GitHub Pages</span>}.
        </p>
      </p>
    ),
    clarification: (
      <p>
        {' '}
        You can see the project in action by reviewing this page, but here's the
        link to the code on GitHub:{' '}
        <a
          href="https://github.com/KristinaBychenok/portfolio.git"
          className="font-bold text-sm md:text-base break-words"
          target="_blank"
        >
          https://github.com/KristinaBychenok/portfolio.git
        </a>
      </p>
    ),
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'GIT',
      'GitHub Pages',
    ],
  },
  {
    id: 3,
    name: 'Daryauo piercing',
    description: 'The platform for booking piercing services in Wrocław.',
    text: (
      <p>
        <p>
          This project is currently under development. I'm using technologies
          such as{' '}
          {<span className="font-bold">Next.js, React, Redux Toolkit</span>} for
          its creation. Styles were written using{' '}
          {<span className="font-bold">Tailwind CSS and MUI</span>}.
        </p>
      </p>
    ),
    clarification: (
      <p>
        Additionally, the project requires content to be displayed in Polish,
        Russian, and English languages. For this functionality, I'm using
        <span className="font-bold"> i18next</span>.
      </p>
    ),
    imgs: [
      {
        src: `${BASE_URL}daryauo-piercing-page.png`,
        text: (
          <p>
            The platform will include information about the piercing studio,
            work portfolios with photos and descriptions, and reviews.
          </p>
        ),
      },
      {
        src: `${BASE_URL}daryauo-piercing-form.png`,
        text: (
          <p>
            The main feature at the moment is a form that users fill out to book
            a procedure. After the user completes this form, I validate it and
            send it to the server for further notifications about their booking.
          </p>
        ),
      },
    ],
    stack: [
      'Next.js',
      'React',
      'Redux Toolkit',
      'TypeScript',
      'Tailwind CSS',
      'MUI',
      'i18next',
      'GIT',
    ],
    team: '1 Front-end developer, 1 Back-end developer, Designer',
    tasks: [
      '- Designed and developed robust solutions meeting client requirements for functionality, scalability, and performance.',
      '- Worked with the React framework and Next.js, applying extensive experience in TypeScript and utilizing Redux to develop an application.',
      '- Developed a project enabling users to book a piercing procedure, including a form for submission, form validation, and the creation of new components and hooks.',
      '- Implemented functionality for language switching to view content in different languages.',
      '- Optimized application for improved user performance, conducted code refactoring, and enhanced overall functionality.',
      '- Integrated the backend to send data from the validated form to the server for further user notification about the booking, working with API requests.',
      '- Developed screen layouts with information about the piercing studio, using the MUI library and Tailwind CSS.',
    ],
  },
  {
    id: 4,
    name: 'New Energy Development s.r.o.',
    description:
      'The platform for a construction company in France to display their services, book services, and showcase a gallery of completed projects.',
    text: (
      <p>
        <p>
          This project is currently under development. I'm using technologies
          such as{' '}
          {<span className="font-bold">Next.js, React, Redux Toolkit</span>} for
          its creation. Styles were written using{' '}
          {<span className="font-bold">Tailwind CSS and MUI</span>}.
        </p>
      </p>
    ),
    clarification: (
      <p>
        In this project, a responsive design was implemented, catering to
        various screens such as{' '}
        <span className="font-bold">
          desktops, laptops, tablets, and phones
        </span>
        .
      </p>
    ),
    imgs: [
      {
        src: `${BASE_URL}ned-main-screen.png`,
        text: 'Tablet screen:',
      },
      {
        src: `${BASE_URL}ned-tablet-screen.png`,
        text: 'Phone screen:',
      },
      {
        src: `${BASE_URL}ned-phone-screen.png`,
        text: (
          <p>
            Additionally, the project requires content to be displayed in
            English, Russian, Ukrainian, French, Dutch, Italian, and German
            languages. For this functionality, I'm using
            <span className="font-bold"> i18next</span>.
          </p>
        ),
      },
      {
        src: `${BASE_URL}ned-langs.png`,
        text: (
          <p>
            The platform includes information about the construction company,
            services with descriptions, and contacts section.
          </p>
        ),
      },
      {
        src: `${BASE_URL}ned-contacts.png`,
        text: (
          <p>
            This is the Services section. By clicking on a card, an accordion
            opens, allowing you to see what is included in each service.
          </p>
        ),
      },
      {
        src: `${BASE_URL}ned-services.png`,
        text: '',
      },
    ],
    stack: [
      'Next.js',
      'React',
      'Redux Toolkit',
      'TypeScript',
      'Tailwind CSS',
      'MUI',
      'i18next',
      'GIT',
    ],
    team: '1 Front-end developer, Designer',
    tasks: [
      '- Designed and developed robust solutions meeting client requirements for functionality, scalability, and performance.',
      '- Worked with the React framework and Next.js, applying extensive experience in TypeScript and utilizing Redux to develop an application.',
      '- Developed a project enabling users to book building services, including a form for submission, form validation, and the creation of new components and hooks.',
      '- Implemented functionality for language switching to view content in different languages.',
      '- Optimized application for improved user performance, conducted code refactoring, and enhanced overall functionality.',
      '- Developed screen layouts with information about the construction company, using the MUI library and Tailwind CSS.',
    ],
  },
]

export const customTheme = {
  body: {
    base: 'p-6 flex-1 overflow-auto bg-yellow-50 bg-opacity-50',
  },
  header: {
    base: 'flex items-start justify-between rounded-t bg-yellow-100 bg-opacity-50 border-b p-5',
  },
}
