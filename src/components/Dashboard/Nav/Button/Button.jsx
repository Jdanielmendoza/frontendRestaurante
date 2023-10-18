import "./Button.css"

const Button = ({icono, titulo}) => {
  return (
    <div className="containerButton">
        <div className="iconoButton">{icono}</div>
        <p className="tituloButton">{titulo}</p>
    </div>
  )
}

export default Button