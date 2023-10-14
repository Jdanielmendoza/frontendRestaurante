import './App.css'
// import Dashboardview from './components/Dashboardview';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className='flex'>
      <div className='basis-[12%] h-[100vh]'>
        <Sidebar/>
      </div>

      <div className='basis-[88%] border'>
        {/* <Dashboardview/> */}
      </div>
    </div>
  )
}

export default App
