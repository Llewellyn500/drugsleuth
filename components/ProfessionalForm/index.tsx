"use client";
import { SetStateAction, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useRef } from "react";
import { Smooch_Sans } from "next/font/google";

const smooch_Sans = Smooch_Sans({
  subsets: ["latin"],
  weight: "700",
});

export default function ProfessionalForm() {
  // Set form field states
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [allergies, setAllergies] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [drugForm, setDrugForm] = useState("");
  const [drugAppearance, setDrugAppearance] = useState("");
  const [drugDosage, setDrugDosage] = useState("");
  const [drugPackaging, setDrugPackaging] = useState("");
  const [prescriptionHistory, setPrescriptionHistory] = useState("");
  const [otherMedication, setOtherMedication] = useState("");
  const [prescriptionDate, setPrescriptionDate] = useState("");
  const [prescriptionDoctor, setPrescriptionDoctor] = useState("");
  const [prescriptionWarning, setPrescriptionWarning] = useState("");
  const [interactions, setInteractions] = useState("");
  const [sideEffects, setSideEffects] = useState("");

  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  // Handle form submission
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsLoading(true);
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: `Take these details and tell me what you think, "My age:${age}, and my weight:${weight} and my allergies:${allergies}"`,
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

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full text-left"
      >
        <fieldset>
          <legend className="text-xl font-bold mb-4">Patient Details:</legend>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="age" className="block text-lg mb-2">
                Age:
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                id="weight"
                className="w-full p-3 border-2 border-black rounded-xl"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="allergies" className="block text-lg mb-2">
              Are there any known allergies or medical conditions?
            </label>
            <textarea
              id="allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
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
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full p-3 h-40 border-2 border-black rounded-xl"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="diagnosis" className="block text-lg mb-2">
              What is the diagnosis provided by the doctor?
            </label>
            <textarea
              id="diagnosis"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
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
              value={drugForm}
              onChange={(e) => setDrugForm(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="drugAppearance" className="block text-lg mb-2">
              What is the color, shape, and any identification marks (numbers,
              letters, logos) on the drug?
            </label>
            <input
              id="drugAppearance"
              value={drugAppearance}
              onChange={(e) => setDrugAppearance(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="drugDosage" className="block text-lg mb-2">
              What is the dosage and frequency of the drug prescribed?
            </label>
            <input
              id="drugDosage"
              value={drugDosage}
              onChange={(e) => setDrugDosage(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="drugPackaging" className="block text-lg mb-2">
              Is there any special packaging (blister pack, bottle, etc.)?
            </label>
            <input
              id="drugPackaging"
              value={drugPackaging}
              onChange={(e) => setDrugPackaging(e.target.value)}
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
              value={prescriptionHistory}
              onChange={(e) => setPrescriptionHistory(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="otherMedication" className="block text-lg mb-2">
              Is the patient currently taking any other medications?
            </label>
            <input
              type="text"
              id="otherMedication"
              value={otherMedication}
              onChange={(e) => setOtherMedication(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">
            Prescription Details:
          </legend>
          <div className="mb-4">
            <label htmlFor="prescriptionDate" className="block text-lg mb-2">
              What is the date on the prescription?
            </label>
            <input
              type="text"
              id="prescriptionDate"
              value={prescriptionDate}
              onChange={(e) => setPrescriptionDate(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="prescriptionDoctor" className="block text-lg mb-2">
              Who is the prescribing doctor?
            </label>
            <input
              type="text"
              id="prescriptionDoctor"
              value={prescriptionDoctor}
              onChange={(e) => setPrescriptionDoctor(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="prescriptionWarning" className="block text-lg mb-2">
              Are there any specific instructions or warnings on the
              prescription? (If yes what are they?)
            </label>
            <input
              type="text"
              id="prescriptionWarning"
              value={prescriptionWarning}
              onChange={(e) => setPrescriptionWarning(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset className="mb-5">
          <legend className="text-xl font-bold mb-4">
            Interactions and Side Effects:
          </legend>
          <div className="mb-4">
            <label htmlFor="interactions" className="block text-lg mb-2">
              Are there any known drug interactions with the patient&apos;s
              current medications?
            </label>
            <input
              type="text"
              id="interactions"
              value={interactions}
              onChange={(e) => setInteractions(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sideEffects" className="block text-lg mb-2">
              What are the common side effects of the prescribed drug?
            </label>
            <textarea
              id="sideEffects"
              value={sideEffects}
              onChange={(e) => setSideEffects(e.target.value)}
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

      {/* Response section */}
      <div ref={responseRef}>
        {isLoading ? (
          <>
        <h3
          className={
            smooch_Sans.className +
            " text-6xl text-center drop-shadow-lg pt-9 text-white"
          }
          >
          Results
        </h3>
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full text-left mt-8">
            <p>Loading...</p>
          </div>
          </>
        ) : (
          response && (
            <>
            <h3
          className={
            smooch_Sans.className +
            " text-6xl text-center drop-shadow-lg pt-9 text-white"
          }
          >
          Results
        </h3>
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full text-left mt-8">
                <ReactMarkdown>{response}</ReactMarkdown>
                {/* <p className="mt-2 text-red-500">
                For further assessment and prescription needs, please see a
                doctor or other healthcare provider.
                </p> */}
              </div>
            </>
          )
        )}
      </div>
    </main>
  );
}