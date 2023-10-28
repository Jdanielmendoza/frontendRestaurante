import "./FilterTable.css";

const FilterTable = ({
  titulo = "Titulo",
  setFiltros,
  clave,
  children,
}) => {

  return (
    <div className="containerTituloFiltro">
      <p className="tituloFiltro">{titulo} :</p>
      <select
        className="selectFilter"
        onChange={(e) => {
          const nuevaSeleccion = e.target.value;
          setFiltros((prevFiltros) => ({
            ...prevFiltros,
            [clave]: nuevaSeleccion,
          }));
        }}
      >
        <option value="Todo">Todo</option>
        {children}
      </select>
 </div>
  );
};

export default FilterTable;


/* import "./FilterTable.css";

const FilterTable = ({
  titulo = "Titulo",
  listaConstanteInicial,
  listFilter,
  setListFilter,
  clave,
  children,
}) => {
  const funcionDeFiltro = (claveDelFiltro, valorDelFiltro) => {
    if (valorDelFiltro == "Todo") {
      setListFilter(listaConstanteInicial);
    } else {
      const resultFilter = listFilter.filter(
        (item) => item[claveDelFiltro] == valorDelFiltro
      );
      setListFilter(resultFilter);
    }
  };

  return (
    <div className="containerTituloFiltro">
      <p className="tituloFiltro">{titulo} :</p>
      
            <select
        className="selectFilter"
        onChange={(e) => funcionDeFiltro(clave, e.target.value)}
      >
        <option value="Todo">Todo</option>
        {children}
      </select>
    </div>
  );
};

export default FilterTable; */