import { PropsWithChildren, useState } from 'react'
import { ArrowDownIcon } from '../Icons/arrowDown'

type AccordionProps = PropsWithChildren & {
  onClick: () => void
}

export const Accordion = ({ children, onClick }: AccordionProps) => {
  const [rotate, setRotate] = useState('rotate-0')

  const handleClick = () => {
    if (rotate === 'rotate-0') {
      setRotate('rotate-180')
    } else {
      setRotate('rotate-0')
    }
    onClick()
  }

  return (
    <button
      onClick={handleClick}
      className="flex gap-[10px] py-2.5 px-5 mb-5 rounded-md hover:bg-yellow-100 hover:bg-opacity-50 hover:shadow-main active:bg-yellow-200 active:bg-opacity-50"
    >
      <div className={`${rotate} transition duration-300`}>
        <ArrowDownIcon />
      </div>
      <p>{children}</p>
    </button>
  )
}
