import { useOutletContext } from "react-router-dom"

const HostVanPricing = () => {
    const [van] = useOutletContext()
  const {price} = van

  if (!van) {
    return <h1>Loading...</h1>
}
  return (
    <div className="">
        <h4 className="host-van-price">${price}<span>/day</span></h4>
    </div>
  )
}

export default HostVanPricing