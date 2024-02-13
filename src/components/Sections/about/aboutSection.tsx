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
        I'm a Frontend React Developer with 2 years of professional experience.
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
              I collaborated closely with software development and testing team
              members on a React application used by real users. My strength
              lies in teamwork, and I have a solid understanding of task
              estimation and agile development methodologies.
            </p>
            <p className="mb-5">
              I also invested time in studying Next.js and Node.js, broadening
              my skill set. Currently, I’m actively engaged in training in AWS.
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
