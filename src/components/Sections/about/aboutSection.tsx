import { useState } from 'react'
import { Accordion } from '../../Accordion/accordion'

export const AboutSection = () => {
  const [isTextOpen, setIsTextOpen] = useState(false)

  const handleOpenText = () => {
    setIsTextOpen(!isTextOpen)
  }

  return (
    <div className="flex flex-col items-start text-start">
      <p className="mb-5">
        I am a Frontend developer with 2 years of experience, specializing in
        technologies such as JavaScript, React, Redux, TypeScript, Next.js,
        Node.js
      </p>
      <p className="mb-5">
        Committed to delivering high-quality results, I’m dedicated to
        continuous improvement in the dynamic field of frontend development.
      </p>
      <div>
        <Accordion onClick={handleOpenText}>More about me</Accordion>
        {isTextOpen && (
          <>
            <p className="mb-5">
              My role involves designing and implementing new features,
              refactoring complex code, organizing component hierarchies,
              providing hot-fixes, developing Storybook UI library, implementing
              validation, backend connections, optimizing application for
              improved user performance. I excel in solving urgent problems
              carefully and possess strong soft skills, making me an effective
              team player.
            </p>
            <p className="mb-5">
              Having recently learned Next.js and Node.js, I'm dedicated to
              continuous growth in the field of programming.
            </p>
            <p className="mb-5">
              I am comfortable with agile methodologies, and have a B2
              proficiency level in English.
            </p>
            <p className="mb-5">
              In general, I'm a cheerful and enthusiastic individual. I love to
              travel, engage in sports, learn snowboarding, and enjoy dancing.
              Additionally, I have a deep affection for dogs, and my most loyal
              companion is Bruno, my beloved canine friend.
            </p>
          </>
        )}
      </div>
      <p>Currently based in Wroclaw, Poland</p>
    </div>
  )
}
