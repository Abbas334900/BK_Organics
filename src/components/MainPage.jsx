import React from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const MainPage = () => {

  const image_Data = [
    {
      Id: 1,
      pathimag: "public/pic2.png"
    },
    {
      Id: 2,
      pathimag: "public/pic3.png"
    },
    {
      Id: 3,
      pathimag: "public/pic4.png"
    },
    {
      Id: 4,
      pathimag: "public/pic5.png"
    },
    {
      Id: 5,
      pathimag: "public/pic2.png"
    },
    {
      Id: 6,
      pathimag: "public/pic3.png"
    },
    {
      Id: 7,
      pathimag: "public/pic4.png"
    },
    {
      Id: 8,
      pathimag: "public/pic5.png"
    },
    {
      Id: 9,
      pathimag: "public/pic2.png"
    },
    {
      Id: 10,
      pathimag: "public/pic3.png"
    },
    {
      Id: 11,
      pathimag: "public/pic4.png"
    },
    {
      Id: 12,
      pathimag: "public/pic5.png"
    },
  ]

  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  )

  return (
    <>
      <section className='text-center my-25'>
        <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tight py-4'>
          Welcome to BK Organics  <span className='flex items-center gap-2 text-2xl font-bold sm:text-4xl lg:text-6xl sm:gap-6'>Pure Simple Natural</span>
        </h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl gradient-title'>
          Explore thousand of job listing or find the perfect candidate
        </p>
      </section>

      {/* Carosal */}
      <div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full py-10"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {
              image_Data.map(({id, pathimag}) => {
                return (
                  <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                    <img src={pathimag} alt="image1" className="h-100 w-100 object-contain" />
                  </CarouselItem>
                )

              })

            }

            {/* <CarouselItem className="basis-1/3 lg:basis-1/6">
              <img src="public/pic2.png" alt="image1" className="h-100 w-100 object-contain" />
            </CarouselItem> */}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  )
}

export default MainPage
