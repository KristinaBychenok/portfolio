import { PropsWithChildren } from 'react'

export const Badge = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-7 w-fit px-5 py-1 bg-yellow-100 bg-opacity-50 rounded-[100px] text-sm">
      {children}
    </div>
  )
}
