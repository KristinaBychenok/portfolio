import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/Button/button'
import { Footer } from './components/Footer/footer'
import { Navigation } from './components/Navigation/navigation'
import { navList } from './components/Navigation/navigation.constants'
import { SectionWrapper } from './components/Sections/wrapper/sectionWrapper'
import { Title } from './components/Title/title'
import { ArrowDownIcon } from './components/Icons/arrowDown'

function App() {
  const [currentSection, setCurrentSection] = useState<string>('about')

  const handleScroll = useCallback(() => {
    const sectionRefs = navList.map(({ id }) => ({
      id,
      ref: document.getElementById(id),
    }))

    for (const { id, ref } of sectionRefs) {
      if (ref) {
        const { top, bottom } = ref.getBoundingClientRect()

        if (top <= 200 && bottom >= 200) {
          setCurrentSection(id)
          break
        }
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, currentSection])

  return (
    <div className="flex max-lg:flex-col justify-center h-screen xl:px-8">
      <div className="flex flex-col h-screen w-full justify-between max-lg:px-14 py-9 2xl:py-20 xl:py-16">
        <Title />
        <div className="flex flex-col gap-[20px] xl:gap-[30px] max-lg:w-1/2 max-lg:self-center">
          <Navigation currentSection={currentSection} />
          <a
            href="https://drive.google.com/file/d/1PmvhvHT0PDJuV9-tafmWQD3qw3obDpvC/view?usp=sharing"
            target="_blank"
            className="flex justify-start lg:ml-32 xl:ml-44 w-64 max-lg:self-center"
          >
            <Button isBlue={true}>Check CV PDF</Button>
          </a>
        </div>
        <Footer />
      </div>
      <div
        className="w-full pr-14 overflow-y-scroll mt-9 2xl:mt-20 2xl:pr-0 xl:mt-16 xl:pr-0 max-lg:pl-14"
        onScroll={handleScroll}
      >
        {navList.map(({ id, title, section }) => {
          const SectionComponent = section

          return (
            <SectionWrapper
              id={id}
              key={id}
              title={title}
              hasButtons={title === 'Recommendations'}
            >
              <SectionComponent />
            </SectionWrapper>
          )
        })}
      </div>
      <div
        onClick={() => setCurrentSection('about')}
        className="m-2 2xl:m-5 xl:m-5 flex w-10 h-10 absolute right-0 bottom-0 rounded-lg bg-yellow-100 bg-opacity-50 hover:shadow-main active:bg-yellow-200 active:bg-opacity-50 cursor-pointer rotate-180"
      >
        <a
          href={'#about'}
          className="w-full h-full flex items-center justify-center"
        >
          <ArrowDownIcon />
        </a>
      </div>
    </div>
  )
}

export default App
