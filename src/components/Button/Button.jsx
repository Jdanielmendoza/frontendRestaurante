import "./Button.css";
import { Link } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";

const Button = ({
  Icono = IconPlus,
  titulo = "nuevo",
  navigateTo = "/",
  backgroundColorButton = "#6C5FBC",
  colorIconButton = "#fff",
  colorTextButton = "#fff",
  OnClickFn,
}) => {
  return OnClickFn ? (
    <div
      onClick={OnClickFn}
      className="containerButton"
      style={{ "--backgroundColorButton": backgroundColorButton }}
    >
      <Icono
        stroke={2.5}
        className="IconButtonNew"
        style={{ "--colorIconButton": colorIconButton }}
      />
      <p style={{ "--colorTextButton": colorTextButton }}>{titulo}</p>
    </div>
  ) : (
    <Link
      to={navigateTo}
      className="containerButton"
      style={{ "--backgroundColorButton": backgroundColorButton }}
    >
      <Icono
        stroke={2.5}
        className="IconButtonNew"
        style={{ "--colorIconButton": colorIconButton }}
      />
      <p style={{ "--colorTextButton": colorTextButton }}>{titulo}</p>
    </Link>
  );
};

export default Button;
