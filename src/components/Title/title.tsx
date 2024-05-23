const { BASE_URL } = import.meta.env

export const Title = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center xl:justify-start items-end sm:items-center xl:items-start gap-[20px] md:gap-[30px]">
      <img
        src={`${BASE_URL}main-img.png`}
        className="hidden sm:flex w-24 sm:w-28 md:w-32 lg:w-36"
      />
      <div className="flex flex-col gap-[10px] w-fit sm:w-56 md:w-64 items-end sm:items-start">
        <h1 className="font-custom font-normal text-start text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
          Kristina Bychenok
        </h1>
        <h2 className="font-normal text-base sm:text-lg xl:text-xl ">
          Front-End Developer
        </h2>
      </div>
    </div>
  )
}
