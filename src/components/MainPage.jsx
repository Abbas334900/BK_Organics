import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import image_Data from '../data/Image_data.json'
import accordion_data from "../data/Accordian_data.json"
import CardPage from "../Layout/CardPage"

const MainPage = () => {



  const plugin = React.useRef(
    Autoplay({ delay: 800, stopOnInteraction: true })
  )

  return (
    <>
      <section className='text-center my-10 sm:my-25 md:my-30'>
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
              image_Data.map(({ id, pathImage }) => {
                return (
                  <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                    <img src={pathImage} alt="image1" className="h-100 w-100 object-contain" />
                  </CarouselItem>
                )
              })
            }
          </CarouselContent>
        </Carousel>
      </div>

      {/* Cards */}
      <CardPage />

      {/* Accordian */}
      <div className="my-10">
        <h1 className='gradient-title text-2xl sm:text-2xl lg:text-4xl tracking-tight pt-10'>User Also Ask?</h1>
        <Accordion type="single" collapsible>
          {
            accordion_data.map((item, index) => {
              return (
                <div>
                  <AccordionItem key={index} value={index+1}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
                </div>
              )
            })}
          </Accordion>



    </div >
    </>
  )
}

export default MainPage
