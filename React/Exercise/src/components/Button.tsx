/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, MouseEventHandler } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
interface Props{
  name: string;
  handleClick: MouseEventHandler
}

const Button:FC<Props> = ({name, handleClick}) => {
  return (
    <div className="border rounded-md p-2 w-fit cursor-pointer" onClick={handleClick}>{name}</div>
  )
}

export default Button