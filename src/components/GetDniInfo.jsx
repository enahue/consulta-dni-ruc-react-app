const GetDniInfo = ({ getDni }) => {
  return (
    <div className="container-dni">
      <label className="lbl-info-dni">
        <span className="unit-info">DNI: </span><span className="data-result">
        {getDni?.dni}</span>
      </label>
      <label className="lbl-info-dni">
        <span className="unit-info">NOMBRES: </span><span className="data-result">
        {getDni?.nombres}</span>
      </label>
      <label className="lbl-info-dni">
        <span className="unit-info">APELLIDOS: </span> <span className="data-result">
        {getDni?.apellidoPaterno} {getDni?.apellidoMaterno}</span>
      </label>
      <label className="lbl-info-alldata lbl-info-dni">
        <span className="unit-info">DATOS COMPLETOS: </span><span className="data-result">
        {getDni?.apellidoPaterno} {getDni?.apellidoMaterno} {getDni?.nombres}</span>
      </label>
    </div>
  );
};

export default GetDniInfo;
