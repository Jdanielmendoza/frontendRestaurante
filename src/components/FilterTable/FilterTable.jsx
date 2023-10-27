import "./FilterTable.css";

const FilterTable = ({ titulo = "Ordenar Por", Onchange ,children}) => {
  return (
    <div className="containerTituloFiltro">
      <p className="tituloFiltro">{titulo} :</p>
      <select className="selectFilter" onChange={Onchange} >
        {children}
      </select>
    </div>
  );
};

export default FilterTable;
