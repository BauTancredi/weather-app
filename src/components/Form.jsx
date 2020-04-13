import React, { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });
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
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">All fields are mandatory.</p>
      ) : null}
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
