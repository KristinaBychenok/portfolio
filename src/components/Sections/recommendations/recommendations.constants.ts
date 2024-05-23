import { CustomFlowbiteTheme } from 'flowbite-react'

type Recommendations = {
  id: string
  author: string
  position: string
  link: string
  recommendationText: string
  height: string
}

export const recommendations: Recommendations[] = [
  {
    id: '1',
    author: 'Denis Korepin',
    position: 'Senior Software Engineer – EPAM Systems',
    link: 'https://www.linkedin.com/in/denis-korepin-340373233/',
    recommendationText:
      'Kristina is a very responsible person. She always understands product values and doing everything as possible to reach the result. By the way, her English is well and she learns quickly. I highly recommend Kristina for frontend developer positions and also will be glad to work in the same team.',
    height: 'h-[300px] sm:h-[180px]',
  },
  {
    id: '2',
    author: 'Sergey Piliuk',
    position: 'Senior Business analyst - EPAM Systems',
    link: 'https://www.linkedin.com/in/sergey-piliuk-24375177/',
    recommendationText:
      'I highly recommend Kristina Bychenok for the position of Frontend Developer. She is proficient in various technical skills including React, Redux, Redux Toolkit, TypeScript, Jest, JavaScript, HTML, and CSS, and has a strong understanding of task estimation and agile development. Kristina excels in analyzing project documentation, creating components and hooks, handling API requests, implementing user interfaces, and ensuring quality through unit testing. Her soft skills, such as teamwork, communication, results-orientation, time management, and open-mindedness, complement her technical skills. Her proficiency in English further enhances her ability to communicate effectively. I am confident that Kristina will be a valuable addition to any team.',
    height:
      'h-[620px] sm:h-[300px] md:h-[330px] lg:h-[250px] xl:h-[380px] 2xl:h-[345px]',
  },
  {
    id: '3',
    author: 'Svetlana Savich',
    position: 'Power Platform Developer – EPAM Systems',
    link: 'https://www.linkedin.com/in/svetlana-savich-62b14219a/',
    recommendationText: `Kristina is an excellent specialist, focused on the success of the product and the team. Her technical skills meet all the requirements of a front-end developer and include at least React, HTML, CSS, JavaScript, and TypeScript. She learns quickly and new technologies are not an obstacle for her to complete tasks. Kristina has good English and can communicate with English-speaking team members and customers. In addition to her professional skills, she is an excellent team player. 
      I highly recommend Kristina for the front-end developer position.`,
    height: 'h-[470px] sm:h-[250px] lg:h-[200px] xl:h-[300px] 2xl:h-[270px]',
  },
  {
    id: '4',
    author: 'Aliaksandr Vahanav',
    position: 'Software Engineer – EPAM Systems',
    link: 'https://www.linkedin.com/in/aliaksandr-vahanav/',
    recommendationText: `It was a pleasure working with Kristina Bychenok at EPAM as a Frontend Developer. Without hesitation, I can say that Kristina is one of the most talented and hardworking professionals I've ever had the pleasure to work with.
      Kristina possesses rare frontend development skills, which she successfully applied in her role at EPAM. She played a crucial role in a project that led to impressive results. Additionally, Kristina took on complex and pivotal project tasks, showcasing exceptional skills that contributed to their success.
      Beyond her impressive technical skills, Kristina is an outstanding team player and communicator. She consistently demonstrated a willingness to go above and beyond her duties to ensure the team met its goals. Kristina was always ready to lend a helping hand to colleagues and proved to be an excellent source of knowledge and recommendations.
      Overall, I highly recommend Kristina for any related position. She is a talented and dedicated professional with an excellent approach and exceptional work ethic. Any team or organization would be fortunate to have her onboard.`,
    height:
      'h-[830px] sm:h-[400px] md:h-[450px] lg:h-[350px] xl:h-[530px] 2xl:h-[465px]',
  },
  {
    id: '5',
    author: 'Viktoriia Skirko',
    position: 'Lead Software Test Automation Engineer – EPAM Systems',
    link: 'https://www.linkedin.com/in/viktoriia-skirko-a66727140/',
    recommendationText: `I had a pleasure of working with Kristina over the past years, and I highly recommend her as a talented and dedicated frontend developer.
    Kristina possesses a deep understanding of frontend technologies and consistently delivered high-quality work. Her proficiency in HTML, CSS, JavaScript, and TypeScript coupled with her knowledge of React enables her to build robust and scalable frontend solutions.
    Beyond technical skills, Kristina is a reliable and collaborative team member. She is proactive in identifying and solving challenges, and her positive attitude makes her a pleasure to work with. She consistently met deadlines and went the extra mile to ensure that the frontend aspects of our project met customer needs and expectations.
    In addition to her technical prowess, Kristina is a great communicator. She effectively collaborated with cross-functional teams, including designer, backend developers, and QA engineers to ensure seamless integration of frontend components.
    I have no doubt that Kristina would be a valuable player to any team.`,
    height:
      'h-[800px] sm:h-[400px] md:h-[450px] lg:h-[350px] xl:h-[530px] 2xl:h-[465px]',
  },
]

export const customTheme: CustomFlowbiteTheme['carousel'] = {
  root: {
    base: 'relative h-full w-full',
    leftControl:
      'absolute top-[-78px] sm:top-[-80px] md:top-[-90px] right-[30px] sm:right-[40px] xl:top-[-100px] h-[44px] p-2.5 rounded-md hover:bg-yellow-100 hover:bg-opacity-50 hover:shadow-main active:bg-yellow-200 active:bg-opacity-50',
    rightControl:
      'absolute top-[-78px] sm:top-[-80px] md:top-[-90px] right-[-30px] xl:top-[-100px] h-[44px] p-2.5 rounded-md hover:bg-yellow-100 hover:bg-opacity-50 hover:shadow-main active:bg-yellow-200 active:bg-opacity-50',
  },
  scrollContainer: {
    base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden scroll-smooth rounded-lg',
  },
}
