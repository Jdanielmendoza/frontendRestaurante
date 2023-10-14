import { FaSearch } from "react-icons/fa"

const Dashboardview = ()=>{
    return(
        <div>
            <div className="flex items-center rounded-[5px]">
                <input type="terxt" className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px]
                    w-[350px] rounded-[5px]' placeholder="Search for.."
                />
                <div className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-[5px] rounded-tr-[5px] rounded-br-[5px]">
                    <FaSearch color="white"/>
                </div>

                <div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboardview