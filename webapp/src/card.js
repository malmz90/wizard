import { Heart, ShoppingBagOutline } from 'heroicons-react'
import { useRef } from 'react'

const Card = ({ item }) => {
  const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
    const imageRef = useRef(null)

    return (
      <img
        className=""
        onMouseOver={() => {
          imageRef.current.src = secondaryImg
        }}
        onMouseOut={() => {
          imageRef.current.src = primaryImg
        }}
        src={primaryImg}
        alt=""
        ref={imageRef}
      />
    )
  }
  return (
    <div className="px-4 py-6 cursor-pointer ">
      {/* <img src={item.img} alt="/" className="" /> */}
      <ImageToggleOnMouseOver
        primaryImg={item.img}
        secondaryImg={item.img2}
        alt=""
      />
      <div className=" justify-start">
        <div className="mt-3 font-semibold text-xl">{item.model}</div>
        <div className="text-sm">{item.brand}</div>
        <div className="flex justify-between">
          <div>{item.color}</div>
          <Heart></Heart>
        </div>
        <div className="flex justify-between mt-1">
          <div className="text-lg text-sky-600">
            {item.price} ( inkl. moms )
          </div>
          <ShoppingBagOutline />
        </div>
      </div>
    </div>
  )
}
export default Card
