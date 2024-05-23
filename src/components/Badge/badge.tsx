import { PropsWithChildren } from 'react'

export const Badge = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-fit px-5 py-2 bg-yellow-100 bg-opacity-50 rounded-[100px] text-xs md:text-sm">
      {children}
    </div>
  )
}
