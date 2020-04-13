import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
  const [callApi, setCallApi] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    const fetchApi = async () => {
      if (callApi) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`;
        const response = await fetch(url);
        const result = await response.json();
        setResult(result);
        setCallApi(false);

        if (result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    fetchApi();
    //eslint-disable-next-line
  }, [callApi]);

  let component;
  if (error) {
    component = <Error message="No results." />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <Fragment>
      <Header title="React Weather App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setCallApi={setCallApi}
              />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
