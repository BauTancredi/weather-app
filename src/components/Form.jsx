import React, { useState } from "react";
import Error from "./Error";

const Form = ({ search, setSearch, setCallApi }) => {
  const [error, setError] = useState(false);

  const { city, country } = search;

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setCallApi(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      \{error ? <Error message="Both fields are mandatory." /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
          autoComplete="no"
        />
        <label htmlFor="city">City: </label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Select a country--</option>
          <option value="US">United States</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Peru</option>
        </select>
        <label htmlFor="country">Country: </label>

        <div className="input-field col s12">
          <input
            type="submit"
            value="Search Weather"
            className="waves-effect waves-light btn-large btn-block yellow accent-4"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
