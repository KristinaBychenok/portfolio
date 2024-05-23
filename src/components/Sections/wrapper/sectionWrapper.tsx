import { PropsWithChildren } from 'react'

type SectionWrapperProps = PropsWithChildren & {
  id: string
  title: string
  hasButtons?: boolean
}

export const SectionWrapper = ({
  id,
  title,
  hasButtons,
  children,
}: SectionWrapperProps) => {
  return (
    <div id={id} className="mb-10 md:mb-14 2xl:mb-20 xl:mb-16">
      <div className="flex flex-row items-center mb-5 justify-start">
        <h3 className="mr-6 md:mr-8 xl:mr-10 font-custom text-2xl xl:text-3xl">
          {title}
        </h3>
        {hasButtons && <div className="w-0 sm:w-full h-px bg-black" />}
        {!hasButtons && <div className="w-full h-px bg-black" />}
        {hasButtons && <div className="ml-10 w-[265px] h-[24px]"></div>}
      </div>
      {children}
    </div>
  )
}
