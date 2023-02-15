import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import GetDniInfo from "./components/GetDniInfo";

const BASE_URL = "https://dniruc.apisperu.com/api/v1/";
const API_KEY =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImphaGV2b3A1MzBAZWtjc29mdC5jb20ifQ.EjRrsgQNylc3foYePKxSRJRN15jmE7YRfEVEmn6E91M";
function App() {
  const [getDni, setGetDni] = useState();
  const [getNewDni, setGetNewDni] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    setGetNewDni(e.target.numberDni.value);
  };


  useEffect(() => {
    axios
      .get(`${BASE_URL}dni/${getNewDni}?token=${API_KEY}`)
      .then((res) => setGetDni(res.data))
      .catch((err) => console.log(err));
  }, [getNewDni]);


  return (
    <div name="App">
      <h1 className="app-title">Consulta DNI</h1>
      <div className="search-doc">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Numero de dni" maxLength={8} id="numberDni" className="input-dni"/>
          <div>
            <button>
              <i className="bx bx-search-alt-2"></i>
            </button>
          </div>
        </form>
      </div>
      <div>
      <GetDniInfo getDni={getDni} />
      </div>
    </div>
  );
}

export default App;
