import { useState } from 'react'
import { Accordion } from '../../Accordion/accordion'
import { Badge } from '../../Badge/badge'
import { Card } from '../../Card/card'
import { experience } from './experience.constants'

export const ExperienceSection = () => {
  const [isTextOpen, setIsTextOpen] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
    3: false,
  })

  const handleOpenText = (id: number) => {
    setIsTextOpen({ ...isTextOpen, [id]: !isTextOpen[id] })
  }

  return (
    <div>
      {experience.map(
        ({
          id,
          title,
          company,
          location,
          date,
          project,
          stack,
          description,
        }) => {
          return (
            <Card key={title}>
              <div className="flex flex-col justify-start text-start">
                <h3 className="font-bold text-base">{title}</h3>
                <h3 className="font-semibold text-sm md:text-base">{`${company}, ${location}`}</h3>
                <h3 className="italic text-sm md:text-base">{date}</h3>
                <p className="pt-2.5 text-sm md:text-base">{`Project: ${project}`}</p>
                <div className="pt-2.5">
                  <Accordion onClick={() => handleOpenText(id)}>
                    Tasks Performed
                  </Accordion>
                  {isTextOpen[id] && (
                    <div className="flex flex-col gap-[5px] pb-2.5">
                      {description.map((item, index) => {
                        return (
                          <p key={index} className="text-sm md:text-base">
                            {item}
                          </p>
                        )
                      })}
                    </div>
                  )}
                </div>
                <div className="flex flex-row flex-wrap gap-[5px] md:gap-[10px]">
                  {stack.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          )
        }
      )}
    </div>
  )
}
