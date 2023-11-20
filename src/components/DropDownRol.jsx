
// import './Supplier.css';

import Select from "react-select"

const DropDown = ()=>{

    const Supplier = [
        {label:'Ninguna',value: '' },
        {label:'Gaseosa',value: 'ga'},
        {label:'Sopa',value: 'so'},
        {label:'Segundo',value: 'se'},
        {label:'Postre',value: 'po'},
    ]

    const handleSelectChange = (event)=>{
        console.log(event);
    }

    return(
        <div className='p-15 '>
            <Select
                options = {Supplier}
                onChange={handleSelectChange}
                required
            />
        </div>
    )
}

export default DropDown;
