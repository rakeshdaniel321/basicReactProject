import React from "react";
import { useState } from "react";
import UserFrom from "./pages/UserFrom";
import { Eye, EyeOff } from "lucide-react";
import UseEffect from "./components/UseEffect";
function Home() {
  const [showText, setShowText] = useState(false);
  const [user, setUser] = useState("");
  const[skills,setSkills]=useState([]);
  const toggle = () => {
    setShowText(!showText);
  };

  const handleSubmit = (e) => {
    const {name,value,checked}=e.target;
    // console.log(name,value);
  //     if (checked) {
  //   setSkills([...skills, value]);
  // } else {
  //   setSkills(skills.filter((skill) => skill !== value));
  // }
  setSkills(checked?[...skills,value]:skills.filter((skill)=>skill !==value));
};
  // };
console.log("home render")
  return (
    <>

      <h1 className="text-3xl font-bold underline">Home Page</h1>
      <div className="relative w-full max-w-sm">
        <input
          onInput={(e) => setUser(e.target.value)}
          type={showText ? "text" : "password"}
          placeholder="enter your password"
          className="w-full px-3 py-2 border rounded-md pr-10"
        />

        <button
          onClick={toggle}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
        >
          {showText ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>
      <p>hello, {user}</p>
      <p className="text-3xl font-bold underline">
        character Count: {user.trim().length}
      </p>
      <UserFrom />

      <h1 className="text-3xl font-bold underline">Check box</h1>
     <input
        type="checkbox"
        name="react"
        value={"Reactjs"}
        onChange={handleSubmit}
        id="react"
      />
       <label htmlFor="react">Reactjs</label> <br />
      <input
        type="checkbox"
        name="mysql"
        value={"mySql"}
        onChange={handleSubmit}
        id="mysql"
      />
       <label htmlFor="mysql">MySql</label> <br />
      <input
        type="checkbox"
        name="nodejs"
        value={"nodejs"}
        onChange={handleSubmit}
        id="node"
        
      />
       <label htmlFor="node">Nodejs</label> <br />
      <input
        type="checkbox"
        name="express"
        value={"expressjs"}
        onChange={handleSubmit}
        id="express"
      />
      <label htmlFor="express">express</label> <br />
      <input
        type="checkbox"
        name="mogoose"
        value={"mongoose"}
        onChange={handleSubmit}
        id="mongoose"
      />
       <label htmlFor="mongoose">Mongoose</label>

      <ul>
        {skills.map((v)=>(
          <li>{v}</li>
        )

        )}
      </ul>
      <UseEffect/>
    </>
  );
}

export default Home;
