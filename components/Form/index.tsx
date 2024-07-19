"use client";
import { useState } from "react";
import { marked } from "marked";
import { useRef } from "react";
import { Smooch_Sans } from "next/font/google";

const smooch_Sans = Smooch_Sans({
  subsets: ["latin"],
  weight: "700",
});

export default function Form() {
  // Set form field states
  const [age, setAge] = useState("");
  const [chronicConditions, setChronicConditions] = useState("");
  const [currentMeds, setCurrentMeds] = useState("");
  const [overCounterDrugs, setOverCounterDrugs] = useState("");
  const [allergies, setAllergies] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [symptomsStart, setSymptomsStart] = useState("");
  const [symptomsExperience, setSymptomsExperience] = useState("");
  const [symptomsSeverity, setSymptomsSeverity] = useState("");
  const [symptomsVariable, setSymptomsVariable] = useState("");
  const [symptomsState, setSymptomsState] = useState("");
  const [lifestyle, setLifestyle] = useState("");
  const [diet, setDiet] = useState("");
  const [changes, setChanges] = useState("");
  const [familySymptoms, setFamilySymptoms] = useState("");
  const [familyHistory, setFamilyHistory] = useState("");
  const [respiratoryIssues, setRespiratoryIssues] = useState("");
  const [gastrointestinalIssues, setGastrointestinalIssues] = useState("");
  const [painIssues, setPainIssues] = useState("");
  const [previousTreatments, setPreviousTreatments] = useState("");
  const [outcome, setOutcome] = useState("");
  const [drugName, setDrugName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [appearance, setAppearance] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("");
  const [obtain, setObtain] = useState("");
  const [packaging, setPackaging] = useState("");
  const [instructions, setInstructions] = useState("");
  const [questions, setQuestions] = useState("");
  const [monitor, setMonitor] = useState("");
  const [follow_up, setFollow_up] = useState("");

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
        message: `You are a world top pharmacist and you have only one job, to help patients identify whether the drugs prescribed to them is good for their condition or not, and suggest alternatives which could work better. If the drug is right, just tell them the benefits of the drug and other details such as the name of the drug, history, chemical makeup and everything there is to know about the drug, and give it in a systematic way and organized format. If you can provide official documents of the drug and images as well that would help. Just give everything there is to know of the drug. The patient filled a form and here is the info from the form: ("What is your age?": "${age}", "Do you have any chronic conditions":"${chronicConditions}", "Are you currently taking any medications? If so, specify":"${currentMeds}", "Have you recently taken any over-the-counter drugs or supplements? If so, specify.":"${overCounterDrugs}", "Do you have any known allergies? If so, specify":"${allergies}", "What symptoms are you experiencing?":"${symptoms}", "When did your symptoms start?":"${symptomsStart}", "Have you experienced these symptoms before?":"${symptomsExperience}", "How severe are your symptoms on a scale of 1 to 10?":"${symptomsSeverity}", "Are the symptoms constant or do they come and go?":"${symptomsVariable}", "Have your symptoms worsened or improved over time?":"${symptomsState}", "Do you smoke, drink alcohol, or use recreational drugs?":"${lifestyle}", "How would you describe your diet and exercise habits?":"${diet}", "Have there been any recent changes in your lifestyle or habits?":"${changes}", "Do any close family members have similar symptoms or conditions?":"${familySymptoms}", "Is there a history of specific diseases in your family?":"${familyHistory}", "Are you experiencing shortness of breath or a cough?":"${respiratoryIssues}", "Do you have nausea, vomiting, or diarrhea?":"${gastrointestinalIssues}", "Can you describe the type and location of the pain?":"${painIssues}", "Have you tried any treatments or medications for your current symptoms? If so, specify.":"${previousTreatments}", "What was the outcome?":"${outcome}", "What is the name of the drug you are taking?":"${drugName}", "What is the Brand name of the drug you are taking?":"${brandName}", "Can you describe the drug's appearance?":"${appearance}", "When did you start taking this drug?":"${time}", "How often do you take this drug and what is the dosage?":"${frequency}", "Where did you obtain this drug?":"${obtain}", "Was the drug provided with any packaging or information leaflet?":"${packaging}", "Are you following any specific instructions for taking this drug?":"${instructions}", "Do you have any questions about how to take this drug?":"${questions}", "Have you been advised to monitor any specific symptoms or reactions while taking this drug?":"${monitor}", "Do you have a follow-up appointment with your healthcare provider regarding this medication?":"${follow_up}"). If no information is provided in the form, just tell the patient to provide the information in a funny and interactive way. `,
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
          " text-6xl text-center drop-shadow-lg pt-9 pb-6 text-white capitalize"
        }
      >
        Fill the form below to get your results.
      </h3>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full text-left"
      >
        <fieldset>
          <legend className="text-xl font-bold mb-4">
            Patient Information:
          </legend>
          <div className="mb-4">
            <label htmlFor="age" className="block text-lg mb-2">
              What is your age:
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(Number(e.target.value) < 0 ? "0" : e.target.value)}
              id="age"
              min={0}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="chronicConditions" className="block text-lg mb-2">
              Do you have any chronic conditions (eg. diabetes, hypertension)?
            </label>
            <input
              type="text"
              id="chronicConditions"
              value={chronicConditions}
              onChange={(e) => setChronicConditions(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="currentMeds" className="block text-lg mb-2">
              Are you currently taking any medications? If so, specify.
            </label>
            <input
              type="text"
              id="currentMeds"
              value={currentMeds}
              onChange={(e) => setCurrentMeds(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="overCounterDrugs" className="block text-lg mb-2">
              Have you recently taken any over-the-counter drugs or supplements?
              If so, specify.
            </label>
            <input
              type="text"
              id="overCounterDrugs"
              value={overCounterDrugs}
              onChange={(e) => setOverCounterDrugs(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="allergies" className="block text-lg mb-2">
              Do you have any known allergies? If so, specify.
            </label>
            <input
              type="text"
              id="allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">Symptoms:</legend>
          <div className="mb-4">
            <label htmlFor="symptoms" className="block text-lg mb-2">
              What symptoms are you experiencing?
            </label>
            <textarea
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full p-3 h-40 border-2 border-black rounded-xl"
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="symptomsStart" className="block text-lg mb-2">
              When did your symptoms start?
            </label>
            <input
              type="text"
              id="symptomsStart"
              value={symptomsStart}
              onChange={(e) => setSymptomsStart(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="symptomsExperience" className="block text-lg mb-2">
              Have you experienced these symptoms before?
            </label>
            <input
              type="text"
              id="symptomsStart"
              value={symptomsExperience}
              onChange={(e) => setSymptomsExperience(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="symptomsSeverity" className="block text-lg mb-2">
              How severe are your symptoms on a scale of 1 to 10?
            </label>
            <input
              type="number"
              id="symptomsSeverity"
              min={1}
              max={10}
              value={symptomsSeverity}
              onChange={(e) => {
                const value = e.target.value;
                if (value === '') {
                  setSymptomsSeverity(value);
                } else {
                  const numericValue = Math.max(1, Math.min(10, Number(value)));
                  setSymptomsSeverity(numericValue.toString());
                }
              }}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="symptomsVariable" className="block text-lg mb-2">
              Are the symptoms constant or do they come and go?
            </label>
            <input
              type="text"
              id="symptomsVariable"
              value={symptomsVariable}
              onChange={(e) => setSymptomsVariable(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="symptomsState" className="block text-lg mb-2">
              Have your symptoms worsened or improved over time?
            </label>
            <input
              type="text"
              id="symptomsState"
              value={symptomsState}
              onChange={(e) => setSymptomsState(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">
            Lifestyle and Habits:
          </legend>
          <div className="mb-4">
            <label htmlFor="lifestyle" className="block text-lg mb-2">
              Do you smoke, drink alcohol, or use recreational drugs?
            </label>
            <input
              type="text"
              id="lifestyle"
              value={lifestyle}
              onChange={(e) => setLifestyle(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="diet" className="block text-lg mb-2">
              How would you describe your diet and exercise habits?
            </label>
            <input
              type="text"
              id="diet"
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="changes" className="block text-lg mb-2">
              Have there been any recent changes in your lifestyle or habits?
            </label>
            <input
              type="text"
              id="changes"
              value={changes}
              onChange={(e) => setChanges(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">Family History:</legend>
          <div className="mb-4">
            <label htmlFor="familySymptoms" className="block text-lg mb-2">
              Do any close family members have similar symptoms or conditions?
            </label>
            <input
              type="text"
              id="familySymptoms"
              value={familySymptoms}
              onChange={(e) => setFamilySymptoms(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="familyHistory" className="block text-lg mb-2">
              Is there a history of specific diseases in your family?
            </label>
            <input
              type="text"
              id="familyHistory"
              value={familyHistory}
              onChange={(e) => setFamilyHistory(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset>
          <legend className="text-xl font-bold mb-4">
            Specific Condition-Related Questions:
          </legend>
          <div className="mb-4">
            <label htmlFor="respiratoryIssues" className="block text-lg mb-2">
              Are you experiencing shortness of breath or a cough?
            </label>
            <input
              type="text"
              id="respiratoryIssues"
              value={respiratoryIssues}
              onChange={(e) => setRespiratoryIssues(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gastrointestinalIssues"
              className="block text-lg mb-2"
            >
              Do you have nausea, vomiting, or diarrhea?
            </label>
            <input
              type="text"
              id="gastrointestinalIssues"
              value={gastrointestinalIssues}
              onChange={(e) => setGastrointestinalIssues(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
          <div className="mb-4">
            <label htmlFor="painIssues" className="block text-lg mb-2">
              Can you describe the type and location of the pain?
            </label>
            <input
              type="text"
              id="painIssues"
              value={painIssues}
              onChange={(e) => setPainIssues(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset className="mb-5">
          <legend className="text-xl font-bold mb-4">
            Previous Treatments:
          </legend>
          <div className="mb-4">
            <label htmlFor="previousTreatments" className="block text-lg mb-2">
              Have you tried any treatments or medications for your current
              symptoms? If so, specify.
            </label>
            <input
              type="text"
              id="previousTreatments"
              value={previousTreatments}
              onChange={(e) => setPreviousTreatments(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="outcome" className="block text-lg mb-2">
              What was the outcome?
            </label>
            <textarea
              id="outcome"
              value={outcome}
              onChange={(e) => setOutcome(e.target.value)}
              className="w-full p-3 h-40 border-2 border-black rounded-xl"
            ></textarea>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset className="mb-5">
          <legend className="text-xl font-bold mb-4">
            Drug Identification:
          </legend>
          <div className="mb-4">
            <label htmlFor="drugName" className="block text-lg mb-2">
              What is the name of the drug you are taking?
            </label>
            <input
              type="text"
              id="drugName"
              value={drugName}
              onChange={(e) => setDrugName(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="brandName" className="block text-lg mb-2">
              What is the Brand name of the drug you are taking?
            </label>
            <input
              type="text"
              id="brandName"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="appearance" className="block text-lg mb-2">
              Can you describe the drug&apos;s appearance (e.g, color, shape,
              size, any imprints)?
            </label>
            <input
              type="text"
              id="appearance"
              value={appearance}
              onChange={(e) => setAppearance(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="time" className="block text-lg mb-2">
              When did you start taking this drug?
            </label>
            <input
              type="type"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="frequency" className="block text-lg mb-2">
              How often do you take this drug and what is the dosage?
            </label>
            <input
              type="type"
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="obtain" className="block text-lg mb-2">
              Where did you obtain this drug (e.g., pharmacy, online)?
            </label>
            <input
              type="type"
              id="obtain"
              value={obtain}
              onChange={(e) => setObtain(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="packaging" className="block text-lg mb-2">
              Was the drug provided with any packaging or information leaflet?
            </label>
            <input
              type="type"
              id="packaging"
              value={packaging}
              onChange={(e) => setPackaging(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset className="mb-5">
          <legend className="text-xl font-bold mb-4">
            Doctor&apos;s Instructions:
          </legend>
          <div className="mb-4">
            <label htmlFor="instructions" className="block text-lg mb-2">
              Are you following any specific instructions for taking this drug
              (e.g., with food, at a certain time)?
            </label>
            <input
              type="text"
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="questions" className="block text-lg mb-2">
              Do you have any questions about how to take this drug?
            </label>
            <input
              type="text"
              id="questions"
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

        <fieldset className="mb-5">
          <legend className="text-xl font-bold mb-4">
            Monitoring and Follow-Up:
          </legend>
          <div className="mb-4">
            <label htmlFor="monitor" className="block text-lg mb-2">
              Have you been advised to monitor any specific symptoms or
              reactions while taking this drug?
            </label>
            <input
              type="text"
              id="monitor"
              value={monitor}
              onChange={(e) => setMonitor(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="follow_up" className="block text-lg mb-2">
              Do you have a follow-up appointment with your healthcare provider
              regarding this medication?
            </label>
            <input
              type="text"
              id="follow_up"
              value={follow_up}
              onChange={(e) => setFollow_up(e.target.value)}
              className="w-full p-3 border-2 border-black rounded-xl"
            ></input>
          </div>
        </fieldset>

        <hr className="my-4 border-t-2 border-gray-200 mb-8" />

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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#00A1E7" stroke="#00A1E7" stroke-width="23" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.5" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#00A1E7" stroke="#00A1E7" stroke-width="23" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.5" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#00A1E7" stroke="#00A1E7" stroke-width="23" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.5" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
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
              <div
                className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full text-left mt-8 text-lg leading-loose"
                dangerouslySetInnerHTML={{ __html: marked(response) }}
              >
                {/* <ReactMarkdown>{response}</ReactMarkdown> */}
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
