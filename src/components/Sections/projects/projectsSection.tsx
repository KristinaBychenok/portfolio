import { Modal } from 'flowbite-react'
import { useState } from 'react'
import { Card } from '../../Card/card'
import { customTheme, projects } from './projects.constants'
import { Badge } from '../../Badge/badge'
import { Button } from '../../Button/button'

export const ProjectsSection = () => {
  const [openModal, setOpenModal] = useState<{ [key: number]: boolean }>({
    1: false,
    2: false,
  })

  return (
    <>
      {projects.map(
        ({
          id,
          name,
          description,
          clarification,
          stack,
          text,
          imgs,
          tasks,
          team,
        }) => {
          return (
            <div key={name}>
              <Card>
                <div className="flex flex-col justify-start text-start gap-[10px] md:gap-[15px] cursor-pointer w-full">
                  <h3 className="font-semibold text-base">{name}</h3>
                  <p className="text-sm md:text-base">{description}</p>
                  <div
                    className="self-start w-1/2"
                    onClick={() =>
                      setOpenModal({ ...openModal, [id]: !openModal[id] })
                    }
                  >
                    <Button>See Project</Button>
                  </div>
                </div>
              </Card>
              <Modal
                show={openModal[id]}
                onClose={() =>
                  setOpenModal({ ...openModal, [id]: !openModal[id] })
                }
                size="5xl"
                theme={customTheme}
              >
                <Modal.Header>{name}</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {text}
                    </p>
                    <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      {clarification}
                    </p>
                    {imgs && (
                      <div className="flex flex-col">
                        {imgs.map(({ src, text }, index) => {
                          return (
                            <div className="flex flex-col" key={src}>
                              <img
                                src={src}
                                alt={`project image-${id}-${index}`}
                                key={src}
                                width="100% md:70%"
                                className="mb-5 rounded-2xl shadow-main bg-white bg-opacity-10 self-center"
                              />
                              <p className="py-5 text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {text}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    )}
                    {team && (
                      <div className="flex flex-col gap-[5px]">
                        <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400 font-semibold">
                          The team I worked with:
                        </p>
                        <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          {team}
                        </p>
                      </div>
                    )}
                    {tasks && (
                      <div className="flex flex-col gap-[5px] mb-2.5">
                        <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400 font-semibold">
                          Tasks performed on this project:
                        </p>
                        {tasks.map((item, index) => {
                          return (
                            <p
                              key={index}
                              className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400"
                            >
                              {item}
                            </p>
                          )
                        })}
                      </div>
                    )}
                    {stack && (
                      <div className="flex flex-row flex-wrap gap-[5px] md:gap-[10px]">
                        {stack.map((skill) => (
                          <Badge key={skill}>{skill}</Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          )
        }
      )}
    </>
  )
}
