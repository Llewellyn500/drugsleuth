import { Smooch_Sans } from "next/font/google";

const smooch_Sans = Smooch_Sans({
  subsets: ["latin"],
  weight: "700",
});

export default function PatientForm() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-[#B2D3F0] to-[#59B6E0] pb-10 transition-all duration-300">
      <h3
        className={
          smooch_Sans.className +
          " text-6xl text-center drop-shadow-lg pt-9 pb-6 text-white"
        }
      >
        Patients
      </h3>

      <form className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full text-left">
        <fieldset>
          <legend className="text-xl font-bold mb-4">Basic Information:</legend>
          <div className="mb-4">
            <label htmlFor="historyDoctor" className="block text-lg mb-2">
              Have you visited a doctor for these symptoms?
            </label>
            <input
              type="text"
              id="historyDoctor"
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="symptoms" className="block text-lg mb-2">
              What symptoms are you experiencing?
            </label>
            <textarea
              id="symptoms"
              className="w-full p-3 h-40 border-2 border-black rounded-xl"
            ></textarea>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">Drug Appearance:</legend>
          <div className="mb-4">
            <label htmlFor="drugDescription" className="block text-lg mb-2">
              Can you describe the color, shape, and any markings (numbers,
              letters, logos) on the drug?
            </label>
            <input
            type="text"
              id="drugDescription"
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="drugForm" className="block text-lg mb-2">
              What form is the drug in (tablet, capsule, liquid, etc.)?
            </label>
            <input
            type="text"
              id="drugForm"
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">Usage Details:</legend>
          <div className="mb-4">
            <label htmlFor="drugFrequency" className="block text-lg mb-2">
              How often are you taking the drug?
            </label>
            <input
              type="text"
              id="drugFrequency"
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="drugDosage" className="block text-lg mb-2">
              What is the dosage of each dose?
            </label>
            <input
            type="text"
              id="drugDosage"
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">Packaging:</legend>
          <div className="mb-4">
            <label htmlFor="drugPackaging" className="block text-lg mb-2">
              Is the drug in a special type of packaging (blister pack, bottle,
              etc.)?
            </label>
            <input
              type="text"
              id="drugPackaging"
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">
            Prescription Information:
          </legend>
          <div className="mb-4">
            <label htmlFor="prescription" className="block text-lg mb-2">
              Do you have a prescription from a doctor? If so, what details are
              on it?
            </label>
            <input
              type="text"
              id="prescription"
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="prescriptionDoctor" className="block text-lg mb-2">
              What is the name of the prescribing doctor?
            </label>
            <input
              type="text"
              id="prescriptionDoctor"
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">Medical History:</legend>
          <div className="mb-4">
            <label htmlFor="otherMeds" className="block text-lg mb-2">
              Are you taking any other medications currently? If yes specify.
            </label>
            <input
              type="text"
              id="otherMeds"
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="allergies" className="block text-lg mb-2">
              Do you have any known allergies or medical conditions? If yes
              specify.
            </label>
            <input
              type="text"
              id="allergies"
              className="w-full p-3 h-40 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset className="mb-5">
          <legend className="text-xl font-bold mb-4">Side Effects:</legend>
          <div className="mb-4">
            <label htmlFor="sideEffects" className="block text-lg mb-2">
              Have you noticed any side effects since starting the medication?
              If yes, please specify.
            </label>
            <input
              type="text"
              id="sideEffects"
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="medicationHistory" className="block text-lg mb-2">
              Have you taken the medication before? If so, did you experience
              any side effects?
            </label>
            <input
              type="text"
              id="medicationHistory"
              className="w-full p-3 h-40 border-2 border-black rounded-xl"
            ></input>
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
