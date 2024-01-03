export const Title = () => {
  return (
    <div className="flex flex-row md:max-lg:justify-center lg:max-xl:flex-col gap-[20px] items-center xl:gap-[30px] xl:items-start">
      <img src="./main-img.png" className="lg:w-36" />
      <div className="flex flex-col gap-[10px] w-64 items-start">
        <h1 className="font-custom text-5xl font-normal text-start 2xl:text-6xl xl:text-6xl">
          Kristina Bychenok
        </h1>
        <h2 className="text-lg font-normal 2xl:text-xl xl:text-xl">
          Front-End Developer
        </h2>
      </div>
    </div>
  )
}
