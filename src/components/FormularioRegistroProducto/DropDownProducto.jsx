import Select from "react-select"

const DropDownProducto = ()=>{

    const Supplier = [
        {label:'Gaseosa',value: '' },
        {label:'Sopa',value: 'ga'},
        {label:'Segundo',value: 'so'},
        {label:'Postre',value: 'se'},
    ]

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

export default DropDownProducto;
