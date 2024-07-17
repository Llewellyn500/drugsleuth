const PatientForm: React.FC = () => {
    return (
      <div>
        <h3 className="text-xl font-bold mb-4">Non-Professional Form</h3>
        {/* Add your form fields here */}
        <form>
          <div className="mb-4">
            <label htmlFor="symptoms" className="block text-left">Symptoms</label>
            <input type="text" id="symptoms" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="medication" className="block text-left">Current Medication</label>
            <input type="text" id="medication" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    );
  };
  
  export default PatientForm;
  