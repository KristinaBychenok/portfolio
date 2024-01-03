import { useEffect, useRef, useState } from 'react'
import { navList } from './navigation.constants'

export const Navigation = ({ currentSection }: { currentSection: string }) => {
  const [selectedItem, setSelectedItem] = useState('about')
  const navRef = useRef<HTMLDivElement>(null)

  const handleClickNav = (id: string) => {
    setSelectedItem(id)
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

  return (
    <nav ref={navRef}>
      <ul className="flex flex-col max-lg:hidden lg:ml-32 2xl:ml-44 xl:ml-44 gap-[2px]">
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
    </nav>
  )
}
