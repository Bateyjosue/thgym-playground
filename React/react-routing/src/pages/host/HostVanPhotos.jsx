import { useOutletContext } from "react-router-dom"

const HostVanPhotos = () => {
    const [van] = useOutletContext()
  
  const { imageUrl} = van

  if (!van) {
    return <h1>Loading...</h1>
}
  return (
    <div>
        <img 
            src={imageUrl} 
            alt="" 
            className="host-van-detail-image"
        />
    </div>
  )
}

export default HostVanPhotos