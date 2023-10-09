import { useOutletContext } from "react-router-dom"

const HostVanPhotos = () => {
    const [van] = useOutletContext()
  
  const { imageUrl} = van

  if (!van) {
    return <h1>Loading...</h1>
}
  return (
    <div>
        <img src={imageUrl} alt="" width="60" />
    </div>
  )
}

export default HostVanPhotos