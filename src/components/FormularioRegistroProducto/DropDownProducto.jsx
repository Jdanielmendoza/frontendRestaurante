import Select from "react-select";

const DropDownProducto = ({
  setCategoria,
  arregloCategorias,
  defualtValueSelected,
}) => {
  const categorias = arregloCategorias.map((categoria) => {
    return { label: categoria.nombre, value: categoria.id };
  });

  const handleSelectChange = (event) => {
    setCategoria(event.value);
  };

  return (
    <div className="p-15 containerInputSelectedCateogiry">
      <h6 className="defaultValueCategorySelected">{defualtValueSelected}</h6>
      <Select options={categorias} onChange={handleSelectChange} required />

    </div>
  );
};

export default DropDownProducto;
