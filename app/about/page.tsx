"use client";
import React from "react";
import { Smooch_Sans } from "next/font/google";

const smooch_Sans = Smooch_Sans({
  subsets: ["latin"],
  weight: "700",
});

const AboutPage: React.FC = () => {
  return (
    <div>
      <main className="flex flex-col items-center bg-gradient-to-br from-[#B2D3F0] to-[#59B6E0] pb-10">
        <h3
          className={
            smooch_Sans.className +
            " text-6xl text-center drop-shadow-lg pt-9 pb-6 text-white capitalize"
          }
        >
          About DrugSleuth
        </h3>

        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl w-full text-left">
          <h1 className="font-bold text-xl mb-4">Overview</h1>
          <p className="mb-6 text-lg">
            Welcome to DrugSleuth, a cutting-edge web application designed to
            empower patients with knowledge about their prescriptions. My
            mission is to ensure that patients are well-informed about the
            medications they are prescribed and to help them understand if a
            prescription is right for them.
          </p>

          <hr className="my-4 border-t-2 border-gray-200 mb-8" />

          <h1 className="font-bold text-xl mb-4">Purpose</h1>
          <p className="mb-6 text-lg">
            DrugSleuth leverages advanced AI algorithms to provide detailed
            information about drugs prescribed to patients. By answering a
            series of questions, users can quickly identify drugs and access
            comprehensive details, including uses, side effects, and
            precautions. This service aims to enhance patient safety and promote
            informed decision-making regarding medication use.
          </p>

          <hr className="my-4 border-t-2 border-gray-200 mb-8" />

          <h1 className="font-bold text-xl mb-4">Features</h1>

          <ul className="mb-6 text-lg list-disc list-inside">
            <li>
              <strong>AI-Driven Drug Identification:</strong> Our AI analyzes
              user inputs to accurately identify prescribed drugs.
            </li>
            <li>
              <strong>Comprehensive Drug Information:</strong> Access detailed
              descriptions, uses, side effects, and precautions for various
              medications.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Intuitive design ensures
              easy navigation and quick access to essential information.
            </li>
          </ul>

          <hr className="my-4 border-t-2 border-gray-200 mb-8" />

          <h1 className="font-bold text-xl mb-4">How It Works</h1>
          <ol className="mb-6 text-lg list-decimal list-inside">
            <li>
              <strong>User Input:</strong> Patients provide details about their
              prescription through a set of guided questions.
            </li>
            <li>
              <strong>AI Analysis:</strong> Our AI processes the input to
              identify the drug.
            </li>
            <li>
              <strong>Information Delivery:</strong> The system presents
              comprehensive information about the identified drug, helping
              patients understand its uses and potential side effects.
            </li>
          </ol>

          <hr className="my-4 border-t-2 border-gray-200 mb-8" />

          <h1 className="font-bold text-xl mb-4">Project Background</h1>
          <p className="mb-6 text-lg">
            This project is a part of my coursework for a Bachelor of Science in
            Computer Science at Kwame Nkrumah University of Science and
            Technology (KNUST). It aims to combine my interests in healthcare
            and technology, showcasing how AI can be used to solve real-world
            problems and improve patient care.
          </p>

          <hr className="my-4 border-t-2 border-gray-200 mb-8" />

          <h1 className="font-bold text-xl mb-4">My Role</h1>
          <p className="mb-6 text-lg">
            As the developer of DrugSleuth, I was responsible for:
            <ul className="list-disc list-inside">
              <li>
                Designing and implementing the AI algorithms for drug
                identification.
              </li>
              <li>
                Developing the web application using modern technologies such as
                Next.js and Tailwind CSS.
              </li>
              <li>
                Ensuring the system&apos;s accuracy and reliability through
                rigorous testing and validation.
              </li>
            </ul>
          </p>

          <hr className="my-4 border-t-2 border-gray-200 mb-8" />

          <h1 className="font-bold text-xl mb-4">Conclusion</h1>
          <p className="mb-6 text-lg">
            DrugSleuth is more than just a project; it is a step towards a
            future where technology bridges the gap between healthcare providers
            and patients, ensuring safety and transparency in medication use.
            Thank you for visiting DrugSleuth. I hope you find my service
            valuable and informative.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
