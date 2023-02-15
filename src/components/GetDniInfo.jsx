const GetDniInfo = ({ getDni }) => {
  return (
    <div className="container-dni">
      <label className="lbl-info-dni">
        <span>Dni: </span>
        {getDni?.dni}
      </label>
      <label className="lbl-info-dni">
        <span>Nombres: </span>
        {getDni?.nombres}
      </label>
      <label className="lbl-info-dni">
        <span>Apellidos: </span>
        {getDni?.apellidoPaterno} {getDni?.apellidoMaterno}
      </label>
      <label className="lbl-info-alldata">
        <span>Datos completos: </span>
        {getDni?.apellidoPaterno} {getDni?.apellidoMaterno} {getDni?.nombres}
      </label>
    </div>
  );
};

export default GetDniInfo;
