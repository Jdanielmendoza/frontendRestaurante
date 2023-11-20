import "./ButtonDotsVertical.css"
import { IconDotsVertical } from "@tabler/icons-react"

const ButtonDotsVertical = ({children}) => {

   const handleClick = ()=> {
        const details = document.querySelector('.optionsDownVerticalButton');
        details.classList.toggle('optionsDownVerticalButton-active'); 
   } 

  return (
    <div className="containerDotsVerticalButton" onClick={handleClick} >
        <IconDotsVertical className="iconDotsVerticalButton"/>
        <section className="optionsDownVerticalButton">
            {children}
        </section>
    </div>
  )
}

export default ButtonDotsVertical