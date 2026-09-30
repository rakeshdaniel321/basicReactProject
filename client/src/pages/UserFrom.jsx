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
        type="tell"
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
   
    </>
  );
}

export default UserFrom;
