import { useEffect, useRef, useState } from 'react'
import { navList } from './navigation.constants'
import { Footer } from '../Footer/footer'
import { Button } from '../Button/button'

export function NavbarBurger({ currentSection }: { currentSection: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState('about')
  const navRef = useRef<HTMLDivElement>(null)

  const handleClickNav = (id: string) => {
    setSelectedItem(id)
    setIsOpen(false)
  }

  useEffect(() => {
    const section = document.getElementById(selectedItem)

    if (section && navRef.current) {
      const offset = section.offsetTop - 300

      window.scrollTo({ top: offset, behavior: 'smooth' })
    }
  }, [currentSection, selectedItem])

  useEffect(() => {
    setSelectedItem(currentSection)
  }, [currentSection])

  const clickBurgerHandler = () => {
    setIsOpen(!isOpen)
  }

  const navbarClassName = `${isOpen ? '' : 'hidden'} w-full`

  return (
    <nav
      className={`flex items-start xl:hidden w-fit ${
        isOpen ? 'h-screen' : 'h-fit'
      } absolute top-2 left-2 z-20 border-gray-200 rounded-lg bg-yellow-100 ${
        isOpen ? '' : 'bg-opacity-50'
      } cursor-pointer`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 rounded-lg">
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          className={`inline-flex items-center justify-center p-2 w-10 h-10 text-sm md:text-base rounded-lg bg-transparent ${
            isOpen ? '' : 'bg-opacity-50'
          } cursor-pointer`}
          aria-controls="navbar-hamburger"
          aria-expanded="false"
          onClick={clickBurgerHandler}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={navbarClassName} id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg">
            {navList.map(({ id, title, href }) => (
              <li
                key={id}
                className={`${
                  selectedItem === id ? 'bg-blue-500 bg-opacity-10' : ''
                } w-64 py-1.5 2xl:py-2 xl:py-2 px-5 rounded-md flex flex-row justify-start items-center gap-[8px] hover:shadow-main hover:bg-white hover:bg-opacity-10 active:bg-blue-500 active:bg-opacity-10 focus-visible:outline-none cursor-pointer`}
                onClick={() => handleClickNav(id)}
              >
                <a
                  href={href}
                  className="w-full flex flex-row items-center gap-[8px]"
                >
                  <div className="w-5 h-px bg-black" />
                  <p>{title}</p>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-center mt-20">
            <a
              href="https://drive.google.com/file/d/1ZKcz4-NIC8jJJ8CQCJGanCzC1XtWWNAG/view"
              target="_blank"
              className="flex justify-start xl:ml-44 w-64 self-center xl:self-start"
            >
              <Button isBlue={true}>Check CV PDF</Button>
            </a>
            <Footer />
          </div>
        </div>
      </div>
    </nav>
  )
}
