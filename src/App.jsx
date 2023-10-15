import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Sidebar from './components/Sidebar.jsx';
import FormularioLogin from './components/FormularioLogin/FormularioLogin';
import CambiarPassword from './components/cambiarPassword/cambiarPassword';
function App() {

  return (
    <>
      {/* <Sidebar/> */}
      {/* <FormularioLogin/> */}
      <CambiarPassword/>
    </>
  )
}

export default App
