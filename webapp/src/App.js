import logo from './logo.svg'
import './App.css'
import { data } from './imageData'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const slideLeft = () => {
  let slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft - 500
}
const slideRight = () => {
  let slider = document.getElementById('slider')
  slider.scrollLeft = slider.scrollLeft + 500
}
function App() {
  return (
    <div className="App bg-gray-200 mt-40">
      <h1 className="font-semibold"> UTVALDA PRODUKTER</h1>
      <div className="relative flex items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="flex flex-row w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data &&
            data.map((item) => (
              <div>
                <img
                  className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
                  src={item.img}
                  alt="/"
                />
                <p>{item.model}</p>
              </div>
            ))}
        </div>

        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </div>
  )
}

export default App
