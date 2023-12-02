import Swal from "sweetalert2";
import "./ButtonDelete.css";
import { eliminarPedido } from "../../apiServices/apiServices.js";

import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoadingDelete = () => {
  return (
    <div className="item">
      <i className="loader --2"></i>
    </div>
  );
};

const useDeleteButton = (elSelector, setIsLoading, id_pedido) => {
  const isRunningRef = useRef(false);
  const elRef = useRef(null);
  const navigate = useNavigate(); 

  const init = () => {
    elRef.current = document.querySelector(elSelector);

    if (elRef.current) {
      elRef.current.addEventListener("click", handleDelete);

      const resetTrigger = elRef.current.querySelector("[data-anim]");
      resetTrigger?.addEventListener("animationend", handleReset);
    }
  };

  const handleDelete = async () => {
    try {
      Swal.fire({
        title: "Estas Seguro?",
        text: "No prodras revertir los cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            setIsLoading(true);
            const res = await eliminarPedido(id_pedido); // aqui va la funcion asincrona a eliminar
            //console.log(res);
            setIsLoading(false);
            isRunningRef.current = true;
            displayState();
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const displayState = () => {
    if (elRef.current) {
      elRef.current.disabled = isRunningRef.current;
      elRef.current.setAttribute("data-running", isRunningRef.current);
      setTimeout(() => {
        navigate(-1);
      }, 1500);
    }
  };

  const handleReset = () => {
    isRunningRef.current = false;
    displayState();
  };

  useEffect(() => {
    init();

    return () => {
      if (elRef.current) {
        elRef.current.removeEventListener("click", handleDelete);

        const resetTrigger = elRef.current.querySelector("[data-anim]");
        resetTrigger?.removeEventListener("animationend", handleReset);
      }
    };
  }, []);

  return null; // Puedes devolver un elemento si deseas renderizar algo
};


const ButtonDelete = ({ id_pedido }) => {
  const [isLoading, setIsLoading] = useState(false);
  useDeleteButton("#delete", setIsLoading,id_pedido); // Utiliza el selector para el botón de eliminación

  return (
    <button id="delete" className="del-btn" type="button" aria-label="Delete">
      {isLoading ? (
        <LoadingDelete />
      ) : (
        <>
          <svg
            className="del-btn__icon"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
            aria-hidden="true"
          >
            <clipPath id="can-clip">
              <rect
                className="del-btn__icon-can-fill"
                x="5"
                y="24"
                width="14"
                height="11"
              />
            </clipPath>
            <g
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              transform="translate(12,12)"
            >
              <g className="del-btn__icon-lid">
                <polyline points="9,5 9,1 15,1 15,5" />
                <polyline points="4,5 20,5" />
              </g>
              <g className="del-btn__icon-can">
                <g strokeWidth="0">
                  <polyline id="can-fill" points="6,10 7,23 17,23 18,10" />
                  <use clipPath="url(#can-clip)" href="#can-fill" fill="#fff" />
                </g>
                <polyline points="6,10 7,23 17,23 18,10" />
              </g>
            </g>
          </svg>
          <span className="del-btn__letters" aria-hidden="true" data-anim>
            <span className="del-btn__letter-box">
              <span className="del-btn__letter">E</span>
            </span>
            <span className="del-btn__letter-box">
              <span className="del-btn__letter">l</span>
            </span>
            <span className="del-btn__letter-box">
              <span className="del-btn__letter">i</span>
            </span>
            <span className="del-btn__letter-box">
              <span className="del-btn__letter">m</span>
            </span>
            <span className="del-btn__letter-box">
              <span className="del-btn__letter">i</span>
            </span>
            <span className="del-btn__letter-box">
              <span className="del-btn__letter">n</span>
            </span>
            <span className="del-btn__letter-box">
              <span className="del-btn__letter">a</span>
            </span>
            <span className="del-btn__letter-box">
              <span className="del-btn__letter">r</span>
            </span>
          </span>
        </>
      )}
      <Toaster />
    </button>
  );
};

export default ButtonDelete;
