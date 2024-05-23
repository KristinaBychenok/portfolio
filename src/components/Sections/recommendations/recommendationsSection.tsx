import { useCallback, useState } from 'react'
import { ArrowLeftIcon } from '../../Icons/arrowLeft'
import { ArrowRightIcon } from '../../Icons/arrowRight'
import { LinkedInIcon } from '../../Icons/linkenIn'
import { QuotesEnd } from '../../Icons/quotesEnd'
import { QuotesStart } from '../../Icons/quotesStart'
import { customTheme, recommendations } from './recommendations.constants'
import { Carousel } from 'flowbite-react'
import { Card } from '../../Card/card'

export const RecommendationsSection = () => {
  const [wrapperHeight, setWrapperHeight] = useState('h-[180px]')
  const [lineСlamp, setlineСlamp] = useState('line-clamp-4 sm:line-clamp-5')

  const handleMouseEnter = useCallback((height: string) => {
    setWrapperHeight(height)
    setlineСlamp('')
  }, [])

  const handleMouseLeave = useCallback(() => {
    setWrapperHeight('h-[180px]')
    setlineСlamp('line-clamp-4 sm:line-clamp-5')
  }, [])

  return (
    <Card>
      <div className={`${wrapperHeight} w-full`}>
        <Carousel
          slide={false}
          indicators={false}
          theme={customTheme}
          leftControl={<ArrowRightIcon />}
          rightControl={<ArrowLeftIcon />}
        >
          {recommendations.map(
            ({ id, author, position, link, recommendationText, height }) => {
              return (
                <div
                  key={`${id}-${author}`}
                  className="flex flex-col items-start w-full h-full"
                >
                  <div className="flex flex-row items-center gap-[10px]">
                    <p className="font-semibold">{author}</p>
                    <a href={link} target="_blank">
                      <LinkedInIcon size="20" />
                    </a>
                  </div>
                  <p className="font-semibold text-sm">{position}</p>
                  <div className="flex mt-2.5 relative">
                    <div className="absolute top-0 left-0">
                      <QuotesStart />
                    </div>
                    <p
                      className={`italic font-light px-2.5 ${lineСlamp} cursor-grabbing`}
                      onMouseEnter={() => handleMouseEnter(height)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {recommendationText}
                    </p>
                    <div className="absolute bottom-0 right-0">
                      <QuotesEnd />
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </Carousel>
      </div>
    </Card>
  )
}
