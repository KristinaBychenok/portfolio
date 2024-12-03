import { useState } from 'react'
import { Accordion } from '../../Accordion/accordion'

export const AboutSection = () => {
  const [isTextOpen, setIsTextOpen] = useState(false)

  const handleOpenText = () => {
    setIsTextOpen(!isTextOpen)
  }

  const pClassName = 'mb-3 lg:mb-5 text-sm md:text-base'

  return (
    <div className="flex flex-col items-start text-start">
      <p className={pClassName}>
        I am a Frontend developer with 3 years of experience, specializing in
        technologies such as JavaScript, React, Redux, TypeScript, Next.js,
        Node.js
      </p>
      <p className={pClassName}>
        Committed to delivering high-quality results, I’m dedicated to
        continuous improvement in the dynamic field of frontend development.
      </p>
      <div>
        <Accordion onClick={handleOpenText}>More about me</Accordion>
        {isTextOpen && (
          <>
            <p className={pClassName}>
              My role involves designing and implementing new features,
              refactoring complex code, organizing component hierarchies,
              providing hot-fixes, developing Storybook UI library, implementing
              validation, backend connections, optimizing application for
              improved user performance. I excel in solving urgent problems
              carefully and possess strong soft skills, making me an effective
              team player.
            </p>
            <p className={pClassName}>
              Having recently learned Node.js and Docker, I'm dedicated to
              continuous growth in the field of programming. I'm also continuing
              to study and actively use AWS in my pet projects.
            </p>
            <p className={pClassName}>
              I'm comfortable with agile methodologies, and have a B2
              proficiency level in English.
            </p>
            <p className={pClassName}>
              In general, I'm a cheerful and enthusiastic individual. I love to
              travel, engage in sports, learn snowboarding, and enjoy dancing.
              Additionally, I have a deep affection for dogs, and my most loyal
              companion is Bruno, my beloved canine friend.
            </p>
          </>
        )}
      </div>
      <p className="text-sm md:text-base">Currently based in Wroclaw, Poland</p>
    </div>
  )
}
