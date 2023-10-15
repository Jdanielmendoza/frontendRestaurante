
// import './Supplier.css';

import Select from "react-select"

const Supplier = [
    {label:'Masculino',value: 'm' },
    {label:'Femenino',value: 'f'},
]

const DropDown = ()=>{
    const handleSelectChange = (event)=>{
        console.log(event);
    }

    return(
        <div className='p-15'>
            <Select
                options = {Supplier}
                onChange={handleSelectChange}
            />
        </div>
    )
}

export default DropDown;
