import React, { useState } from "react";
import { useTheme } from "../components/ToggleButton";


function UserFrom() {
  const { theme, toggleTheme } = useTheme();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const locationData = {
    India: {
      "Tamil Nadu": ["Chennai", "Madurai", "Coimbatore"],
      Kerala: ["Kochi", "Trivandrum"],
    },

    USA: {
      California: ["Los Angeles", "San Diego"],
      Texas: ["Houston", "Dallas"],
    },
  };

  // console.log(Object.keys(locationData));

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  console.log(country);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  console.log(form);
  const Data = JSON.stringify(form);
  console.log(Data);
  console.log("form render");
  return (
    <>
      <h1 className="text-3xl font-bold underline">UserFrom</h1>
      <input
        type="text"
        name="name"
        value={form.name}
        placeholder="enter your name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={form.email}
        placeholder="enter your email"
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        value={form.phone}
        placeholder="enter your phone"
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        value={form.city}
        placeholder="enter your city"
        onChange={handleChange}
      />
      <h1>input Data</h1>
      <div className="mt-5">
        {Object.entries(form).map(([key, value]) => (
          <p key={key}>
            <strong>{key}</strong> : {value}
          </p>
        ))}
      </div>
      <h1 className="text-3xl font-bold underline">Toogle Mood</h1>

      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />

        <div
          className="
      relative
      w-11
      h-6
      bg-gray-300
      rounded-full
      peer
      peer-checked:bg-blue-600
      after:content-['']
      after:absolute
      after:top-[2px]
      after:left-[2px]
      after:bg-white
      after:rounded-full
      after:h-5
      after:w-5
      after:transition-all
      peer-checked:translate-x-0
      peer-checked:after:translate-x-full
    "
        ></div>
      </label>
      <h1 className="text-3xl font-bold underline ">State Drop down</h1>
      <select onChange={(e) =>{ setCountry(e.target.value); setState(""); setCity("")}} style={{ margin: "40px" }}>
        <option  value="">Select country</option>
        {Object.keys(locationData).map((country) => {
          return (
            <option
              
              key={country}
              value={country}
            >
              {country}
            </option>
          );
        })}
      </select>

      {country && (
        <select onChange={(e) => { setState(e.target.value); setCity(""); }} style={{ margin: "40px" }}>
          <option value="">Select state</option>
          {Object.keys(locationData[country]).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      )}

      {state && (
        <select onChange={(e) =>{ setCity(e.target.value); }} style={{ margin: "40px" }}>
          <option value="">Select city</option>
          {locationData[country][state].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default UserFrom;
