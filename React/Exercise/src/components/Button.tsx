
// eslint-disable-next-line @typescript-eslint/ban-types

const Button = ({name, handleClick}) => {
  return (
    <div className="border rounded-md p-2 w-fit cursor-pointer" onClick={handleClick}>{name}</div>
  )
}

export default Button