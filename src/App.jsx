import './App.css'
import Dashboardview from './components/Dashboard';
import Sidebar from './components/Sidebar';
import product from "/product.svg"; 
function App() {

  return (
    <div className='flex'>
      <div className='basis-[12%] h-[100vh]'>
        <Sidebar/>
      </div>

      <div className='basis-[88%] border'>
        <Dashboardview/>
        <img src={product} alt="product" />
      </div>
    </div>
  )
}

export default App
