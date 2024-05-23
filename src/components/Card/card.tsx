import { PropsWithChildren } from 'react'

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex p-5 md:p-7 2xl:p-10 xl:p-10 mb-4 md:mb-5 rounded-2xl hover:shadow-main bg-white bg-opacity-10">
      {children}
    </div>
  )
}
