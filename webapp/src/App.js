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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  }
  return (
    <div className="App mt-20">
      <Carousel>
        {data && data.map((item) => <Card item={item}></Card>)}
      </Carousel>
      <Slider {...settings}>
        {data &&
          data.map((item) => (
            <div className="card">
              <div className="card-top">
                <img src={item.img} alt="/" className="" />
                <h1>title</h1>
              </div>
              <div className="card-bottom">
                <h3>{item.price}</h3>
                <p>Item nått</p>
              </div>
            </div>
          ))}
      </Slider>

      <div className="mt-6">
        <h1 className="font-semibold"> UTVALDA PRODUKTER</h1>
        <div className="relative flex items-center">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideLeft}
            size={40}
          />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {data &&
              data.map((item) => (
                <img
                  className="inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                  src={item.img}
                  alt="/"
                />
              ))}
          </div>

          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
    </div>
  )
}

export default App
