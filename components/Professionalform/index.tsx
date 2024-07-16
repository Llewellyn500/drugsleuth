"use client";

import { SetStateAction, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useRef } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsLoading(true);
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: `You are a medical professional giving me possible sicknesses that i might have, you are to give me details of what i'm experiencing based of the information i gave, These are the details: "My name is ${name}, I am ${age} years old, I weigh ${weight} kg and I'm ${height} cm tall. My symptoms are: ${symptoms}"`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch("/api/gemini", options);
    const data = await res.text();
    console.log(data);
    setResponse(data);
    setIsLoading(false);
  };

  const handleGenderChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-20">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="text-black p-5 mb-5 mr-3 rounded"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
          className="text-black p-5 mb-5 mr-3 rounded"
        />
        <select
          value={gender}
          onChange={handleGenderChange}
          className="text-black p-5 mb-5 mr-3 rounded"
        >
          <option value="" className="text-[#A8A4AE]">
            -- Select Gender --
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight in Kg"
          className="text-black p-5 mb-5 mr-3 rounded"
        />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height in cm"
          className="text-black p-5 mb-5 mr-3 rounded"
        />
        <input
          type="text"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Enter your symptoms"
          className="text-black p-5 mb-5 mr-3 rounded"
        />

        <button
          type="submit"
          className="bg-[#319EA2] text-white rounded p-3 font-bold"
        >
          Submit
        </button>
      </form>
      <div ref={responseRef}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          response && (
            <>
              <ReactMarkdown children={response} />
              <p className="mt-2 text-red-500">
                For further assessment and prescription needs, please see a doctor or other healthcare provider.
              </p>
              <button
                onClick={() => {
                  /* handle contact professional action here */
                }}
                className="bg-[#319EA2] text-white p-2 rounded mt-4"
              >
                Contact Professional
              </button>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Form;