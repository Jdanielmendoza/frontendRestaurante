import "./Button.css"
import { Link } from "react-router-dom"
import { IconPlus } from "@tabler/icons-react"

const Button = ({Icono = IconPlus , titulo = "nuevo", navigateTo="/"}) => {
  return (
    <Link to={navigateTo} className="containerButton" >
        <Icono stroke={2.5}/>
        <p>{titulo}</p>
    </Link>
  )
}

export default Button