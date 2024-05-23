import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/Button/button'
import { Footer } from './components/Footer/footer'
import { Navigation } from './components/Navigation/navigation'
import { navList } from './components/Navigation/navigation.constants'
import { SectionWrapper } from './components/Sections/wrapper/sectionWrapper'
import { Title } from './components/Title/title'
import { ArrowDownIcon } from './components/Icons/arrowDown'
import { NavbarBurger } from './components/Navigation/navbarBurger'

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
    <div className="flex flex-col xl:flex-row justify-center h-screen xl:px-8 w-screen lg:w-full lg:max-w-[1440px]">
      <div className="flex flex-col h-fit lg:h-screen w-full justify-between px-9 xl:px-0 py-9 xl:py-16 2xl:py-20">
        <Title />
        <NavbarBurger currentSection={currentSection} />
        <div className="hidden xl:flex flex-col gap-[20px] xl:gap-[30px] w-1/2 xl:w-full self-center xl:self-start">
          <Navigation currentSection={currentSection} />
          <a
            href="https://drive.google.com/file/d/1ZKcz4-NIC8jJJ8CQCJGanCzC1XtWWNAG/view"
            target="_blank"
            className="hidden xl:flex justify-start xl:ml-44 w-64 self-center xl:self-start"
          >
            <Button isBlue={true}>Check CV PDF</Button>
          </a>
        </div>
        <div className="hidden xl:flex">
          <Footer />
        </div>
      </div>
      <div
        className="w-full overflow-y-scroll mt-0 xl:mt-16 2xl:mt-20 px-6 sm:px-8 md:px-9 lg:px-10 xl:px-0"
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
