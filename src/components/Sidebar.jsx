<<<<<<< HEAD

import {FaBolt, FaChevronLeft, FaChevronRight, FaRegCalendar, FaRegChartBar, FaRegSun, FaStickyNote, FaTachometerAlt, FaWrench} from 'react-icons/fa';

const Sidebar = ()=>{
    return(
        <div className= 'bg-[#4E73DF] h-screen px-[25px]'>
            <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
                <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">Admin Panel</h1>
            </div>

            <div className='flex item-center gap-[15px]  py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <FaTachometerAlt color = 'white'/>
                <p
                    className='text-[14px] leading-[20px] font-bold text-white'
                >Dashboard
                </p>
            </div>

            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE </p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegSun color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-white' >Pages</p>
                    </div>
                    {/* Es un componenta extradio de la libreria */}
                    <FaChevronRight color='white'/> 
                </div>

                <div className=' flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegChartBar color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Charst</p>
                    </div>
                    {/* Es un componenta extradio de la libreria */}
                    <FaChevronRight color='white'/> 
                </div>
            </div>


            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3] pb-[15px]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>ADDONS </p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-white' >Components</p>
                    </div>
                    {/* Es un componenta extradio de la libreria */}
                    <FaChevronRight color='white'/> 
                </div>

                <div className=' flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaWrench color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Utiliteies</p>
                    </div>
                    {/* Es un componenta extradio de la libreria */}
                    <FaChevronRight color='white'/> 
                </div>

                <div className='flex items-center gap-[10px] py-[15px]'>
                        <FaRegCalendar color='white'/>
                        <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
                </div>
            </div>

            <div>
                <div className='flex items-center justify-center pt-[15px]'>
                    <div className='h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer'>
                        <FaChevronLeft color='white'/>
                    </div>
                </div>
            </div>

            <div className='bg-[#3C5EC1] mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
                <FaBolt color='white'/>
                <p className='text-[12px] leading-[18px] font-normal text-white/[0.4] text-center'> Lorem ipsum adipisicing elit. placeat pariatur minus quo ex quidem laboriosam.</p>
                <button className='bg-[#17A673] text-white flex items-center justify-center h-[30] w-full rounded-[3px] text-[14px] leading-[21px] font-normal'>Upgrade to Pro!</button>
            </div>
           
        </div>
=======
import icono from "/icono.svg"
const Sidebar = ()=>{
    return(
        <>
            <p>Editado Por Ronald</p>
            <img src={icono} alt="icono" />
        </>
>>>>>>> 23ce3762fe44286534f92fd23b884beff472092d
    )
}

export default Sidebar