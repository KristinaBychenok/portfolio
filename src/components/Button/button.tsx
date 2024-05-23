import { PropsWithChildren } from 'react'

export const Button = ({
  isBlue,
  children,
}: PropsWithChildren<{ isBlue?: boolean }>) => {
  return (
    <button
      type="button"
      className={`w-full text-sm md:text-base py-2.5 px-5 rounded-lg focus:outline-none focus-visible:outline-none ${
        isBlue
          ? 'bg-regal-blue-100 active:bg-regal-blue-200'
          : 'bg-yellow-100 bg-opacity-50 active:bg-yellow-200 active:bg-opacity-50'
      } hover:shadow-main`}
    >
      {children}
    </button>
  )
}
