import "./DropDown.css";
import { IconChevronDown } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const DropDown = ({ icono, titulo, NavigateTo= '/' ,  children }) => {
  return (
    <>
      {children ? (
        <details className="containerDropDown">
          <summary className="iconTitleArrowDropDown">
            <div className="iconTitleDropDown">
              <div className="iconDropDown">{icono}</div>
              <div className="titleDropDown">{titulo}</div>
            </div>
            <IconChevronDown stroke={2.2} className="arrow-down-DropDown" />
          </summary>
          <div className="detailsDropDown">{children}</div>
        </details>
      ) : (
        <div className="containerDropDown">
          <Link to={NavigateTo} className="iconTitleArrowDropDown">
            <div className="iconTitleDropDown">
              <div className="iconDropDown">{icono}</div>
              <div className="titleDropDown">{titulo}</div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default DropDown;

/* import "./DropDown.css";
import { IconChevronDown } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const DropDown = ({ Icono, titulo, children, fClick,redirect,isActive }) => {
 
  const handleClick = ()=> {
    if(!!!children){
    }
    else{
        const lista = document.querySelector('.ul-DropDown');
        document.querySelector('.arrow-down-DropDown').classList.toggle('arrow-down-DropDown-active');
        lista.classList.toggle("ul-DropDown-active");
    }
    fClick; 
  }  

  return (
    <Link to={redirect} className="containerDropDown" onClick={handleClick}>
      <div className={isActive ? "contImgTitle-active" : "contImgTitle"}>
        <div>
          <div className="iconoDropDown">{Icono}</div>
          <h4 className="tituloDropDown">{titulo}</h4>
        </div>
        {children && (
          <IconChevronDown className="arrow-down-DropDown" stroke={2.2} />
        )}
      </div>

      <ul className="ul-DropDown">{children}</ul>
    </Link>
  );
};

export default DropDown;
 */
