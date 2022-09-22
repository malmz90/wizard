import logo from './logo.svg'
import './App.css'
import { data } from './imageData'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carousel from 'react-elastic-carousel'
import Card from './card'

const slideLeft = () => {
  let slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft - 500
}
const slideRight = () => {
  let slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft + 500
}
function App() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 5 },
  ]

  return (
    <div className=" mt-80 px-14 ">
      <h1 className="flex font-medium text-3xl justify-center mb-6">
        UTVALDA PRODUKTER
      </h1>
      <Carousel breakPoints={breakPoints}>
        {data && data.map((item) => <Card item={item}></Card>)}
      </Carousel>
    </div>
  )
}

export default App
