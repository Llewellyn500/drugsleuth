// /* eslint-disable react/no-children-prop */
// "use client";

// import { SetStateAction, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import { useRef } from "react";

// const Form = () => {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [gender, setGender] = useState("");
//   const [weight, setWeight] = useState("");
//   const [height, setHeight] = useState("");
//   const [symptoms, setSymptoms] = useState("");
//   const [response, setResponse] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const responseRef = useRef<HTMLDivElement>(null);

//   const handleSubmit = async (event: { preventDefault: () => void }) => {
//     event.preventDefault();
//     if (responseRef.current) {
//       responseRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsLoading(true);
//     const options = {
//       method: "POST",
//       body: JSON.stringify({
//         message: `You are a medical professional giving me possible sicknesses that i might have, you are to give me details of what i'm experiencing based of the information i gave, These are the details: "My name is ${name}, I am ${age} years old, I weigh ${weight} kg and I'm ${height} cm tall. My symptoms are: ${symptoms}"`,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const res = await fetch("/api/gemini", options);
//     const data = await res.text();
//     console.log(data);
//     setResponse(data);
//     setIsLoading(false);
//   };

//   const handleGenderChange = (event: {
//     target: { value: SetStateAction<string> };
//   }) => {
//     setGender(event.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="mb-20">
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your full name"
//           className="text-black p-5 mb-5 mr-3 rounded"
//         />
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           placeholder="Enter your age"
//           className="text-black p-5 mb-5 mr-3 rounded"
//         />
//         <select
//           value={gender}
//           onChange={handleGenderChange}
//           className="text-black p-5 mb-5 mr-3 rounded"
//         >
//           <option value="" className="text-[#A8A4AE]">
//             -- Select Gender --
//           </option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         <input
//           type="number"
//           value={weight}
//           onChange={(e) => setWeight(e.target.value)}
//           placeholder="Enter your weight in Kg"
//           className="text-black p-5 mb-5 mr-3 rounded"
//         />
//         <input
//           type="number"
//           value={height}
//           onChange={(e) => setHeight(e.target.value)}
//           placeholder="Enter your height in cm"
//           className="text-black p-5 mb-5 mr-3 rounded"
//         />
//         <input
//           type="text"
//           value={symptoms}
//           onChange={(e) => setSymptoms(e.target.value)}
//           placeholder="Enter your symptoms"
//           className="text-black p-5 mb-5 mr-3 rounded"
//         />

//         <button
//           type="submit"
//           className="bg-[#319EA2] text-white rounded p-3 font-bold"
//         >
//           Submit
//         </button>
//       </form>
//       <div ref={responseRef}>
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           response && (
//             <>
//               <ReactMarkdown children={response} />
//               <p className="mt-2 text-red-500">
//                 For further assessment and prescription needs, please see a doctor or other healthcare provider.
//               </p>
//               <button
//                 onClick={() => {
//                   /* handle contact professional action here */
//                 }}
//                 className="bg-[#319EA2] text-white p-2 rounded mt-4"
//               >
//                 Contact Professional
//               </button>
//             </>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Form;

import { Smooch_Sans } from "next/font/google";

const smooch_Sans = Smooch_Sans({
  subsets: ["latin"],
  weight: "700",
});

export default function ProfessionalForm() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-[#B2D3F0] to-[#59B6E0] pb-10 transition-all duration-300">
      <h3
        className={
          smooch_Sans.className +
          " text-6xl text-center drop-shadow-lg pt-9 pb-6 text-white"
        }
      >
        Medical Professional
      </h3>

      <form className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full text-left">
        <fieldset>
          <legend className="text-xl font-bold mb-4">Patient Details:</legend>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="age" className="block text-lg mb-2">
                Age:
              </label>
              <input
                type="number"
                id="age"
                className="w-full p-3 border-2 border-black rounded-xl"
              />
            </div>
            <div>
              <label htmlFor="weight" className="block text-lg mb-2">
                Weight(Kg):
              </label>
              <input
                type="number"
                id="weight"
                className="w-full p-3 border-2 border-black rounded-xl"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="allergies" className="block text-lg mb-2">
              Are there any known allergies or medical conditions:
            </label>
            <textarea
              id="allergies"
              className="w-full p-3 h-40 border-2 border-black rounded-xl"
            ></textarea>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">
            Symptoms and Diagnosis:
          </legend>
          <div className="mb-4">
            <label htmlFor="symptoms" className="block text-lg mb-2">
              What symptoms is the patient experiencing?
            </label>
            <textarea
              id="symptoms"
              className="w-full p-3 h-40 border-2 border-black rounded-xl"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="diagnosis" className="block text-lg mb-2">
              What is the diagnosis provided by the doctor?
            </label>
            <textarea
              id="diagnosis"
              className="w-full p-3 h-40 border-2 border-black rounded-xl"
            ></textarea>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">Drug Details:</legend>
          <div className="mb-4">
            <label htmlFor="drugForm" className="block text-lg mb-2">
              What is the form of the drug (tablet, capsule, liquid, etc.)?
            </label>
            <input
              type="text"
              id="drugForm"
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="drugAppearance" className="block text-lg mb-2">
              What is the color, shape, and any identification marks (numbers, letters, logos) on the drug?
            </label>
            <input
              id="drugAppearance"
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="drugDosage" className="block text-lg mb-2">
              What is the dosage and frequency of the drug prescribed?   
            </label>
            <input
              id="drugDosage"
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="drugPackaging" className="block text-lg mb-2">
              Is there any special packaging (blister pack, bottle, etc.)? 
            </label>
            <input
              id="drugPackaging"
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">Medical History:</legend>
          <div className="mb-4">
            <label htmlFor="prescriptionHistory" className="block text-lg mb-2">
              Has the patient been prescribed this drug before?
            </label>
            <input
              type="text"
              id="prescriptionHistory"
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="otherMedication" className="block text-lg mb-2">
              Is the patient currently taking any other medications?
            </label>
            <input
              id="otherMedication"
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">Prescription Details:</legend>
          <div className="mb-4">
            <label htmlFor="prescriptionDate" className="block text-lg mb-2">
              What is the date on the prescription?
            </label>
            <input
              type="text"
              id="prescriptionDate"
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="prescriptionDoctor" className="block text-lg mb-2">
              Who is the prescribing doctor?
            </label>
            <input
              id="prescriptionDoctor"
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="prescriptionWarning" className="block text-lg mb-2">
              Are there any specific instructions or warnings on the prescription? (If yes what are they?)
            </label>
            <input
              id="prescriptionWarning"
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset className="mb-5">
          <legend className="text-xl font-bold mb-4">Interactions and Side Effects:</legend>
          <div className="mb-4">
            <label htmlFor="interactions" className="block text-lg mb-2">
              Are there any known drug interactions with the patient&apos;s current medications?
            </label>
            <input
              type="text"
              id="interactions"
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sideEffects" className="block text-lg mb-2">
              What are the common side effects of the prescribed drug?
            </label>
            <textarea
              id="sideEffects"
              className="w-full p-3 h-40 border-2 border-black rounded-xl"
            ></textarea>
          </div>
        </fieldset>

        <button
          type="submit"
          className="bg-[#00A1E7] hover:bg-[#4781a9] transition-all duration-300 ease-in-out font-bold text-white py-3 text-lg rounded-xl w-full"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
