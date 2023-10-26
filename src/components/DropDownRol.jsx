
// import './Supplier.css';

import Select from "react-select"

const Supplier = [
    {label:'Administrador',value: 'administrador' },
    {label:'Cocinero',value: 'cocinero'},
    {label:'Cajero',value: 'cajero'},

]

const DropDown = ()=>{
    const handleSelectChange = (event)=>{
        console.log(event);
    }

    return(
        <div className='p-15 '>
            <Select
                options = {Supplier}
                onChange={handleSelectChange}
            />
        </div>
    )
}

export default DropDown;
