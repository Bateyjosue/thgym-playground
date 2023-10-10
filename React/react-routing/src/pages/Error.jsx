import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
  return (
    <div>
        <h1>
            <span>Error:</span>
            {error.message}
            <pre>{error.statusText}::{error.status}</pre>
        </h1>
    </div>
  )
}

export default Error