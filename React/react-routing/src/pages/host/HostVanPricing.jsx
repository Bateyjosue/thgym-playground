import { useOutletContext } from "react-router-dom"

const HostVanPricing = () => {
    const [van] = useOutletContext()
  const {price} = van

  if (!van) {
    return <h1>Loading...</h1>
}
  return (
    <div className="">
        <p><span className="font-bold">${price}</span>/day</p>
    </div>
  )
}

export default HostVanPricing