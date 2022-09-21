const Card = ({ item }) => {
  console.log('yolo', item)
  return (
    <div>
      <img src={item.img} alt="/" className="" />
      <div>{item.price}</div>
    </div>
  )
}
export default Card
