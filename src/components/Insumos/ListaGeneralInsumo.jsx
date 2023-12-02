import React, { useState,useEffect } from 'react'
import Button from '../Button/Button.jsx'
import ListaInsumo from '../Insumos/ListaInsumo.jsx'
import {IconSearch} from '@tabler/icons-react'
import {obtenerInsumos} from '../../apiServices/apiServices.js'

const ListaGeneralInsumo = () => {

  const[insumos,setInsumos] =  useState([])
  const[searchQuery,setSearchQuery] =  useState("")


  const listaConBusqueda =
  searchQuery == ""
    ? insumos
    : insumos.filter((item) => {
        for (const key in item) {
          if (
            item[key] !== null &&
            item[key]
              .toString()
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          ) {
            return true;
          }
        }
        return false;
      });

      const handleSearchInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
      };

  useEffect(() => {
    const getInsumos = async () => {
      try {
       
        const tipoInsumo = await obtenerInsumos();
        setInsumos(tipoInsumo);
        console.log(tipoInsumo);
      } catch {
        console.log("Error");
      }
    };

    getInsumos();
  }, []);

 
  return (
    <div className="bg-slate-50 w-full h-full overflow-scroll">
    <header className="flex justify-between items-center pt-14 px-12 mb-10">
      <Button navigateTo="/insumo/registro" />

      <div className="inputSearchFilterTable">
        <IconSearch className="iconSearchFilterTable" />
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
    </header>
    <section className="mx-auto bg-white w-4/5 px-6 rounded-lg">
      <ul className="grid grid-cols-4 gap-10 ">
        <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
          Nro
        </li>
        <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
          Nombre
        </li>
        <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
          Cantidad
        </li>

        <li className=" font-semibold text-letra-color text-center col-span-1 py-2 ">
          Acciones
        </li>
      </ul>
    </section>

    <main className="">
      {
        listaConBusqueda.map((insumo,index)=>(
          <ListaInsumo
            key = {insumo.id}
            index={index}
            nombre = {insumo.nombre}
            // cantidad = {insumo.cantidad}
            idInsumo = {insumo.id}
            cantidad = {insumo.cantidad}
            descripcion = {insumo.descripcion}
            fecha = {insumo.fecha}
            // fecha = {insumo.fecha}
          
          />

        ))
      }
  
    </main>
  </div>
  )
}

export default ListaGeneralInsumo
