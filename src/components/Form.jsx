import React, { useState } from 'react';

const Form = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    technology: {
      favoriteLanguage: '',
      yearsOfExperience: '',
    },
    health: {
      exerciseFrequency: '',
      dietPreference: '',
    },
    education: {
      highestQualification: '',
      fieldOfStudy: '',
    },
    feedback: '',
  });

  // State to manage submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const nameParts = name.split('.');

    if (nameParts.length === 2) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [nameParts[0]]: {
          ...prevFormData[nameParts[0]],
          [nameParts[1]]: type === 'checkbox' ? e.target.checked : value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === 'checkbox' ? e.target.checked : value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);  // Save the form data to the submitted data state
  };

  // Function to render submitted data
  const renderSubmittedData = () => {
    if (!submittedData) return null;

    return (
      <div className="mt-6 p-4 bg-gray-100 rounded shadow-md">
        <h2 className="text-lg font-bold">Submitted Data:</h2>
        <p><strong>Full Name:</strong> {submittedData.fullName}</p>
        <p><strong>Email:</strong> {submittedData.email}</p>
        <p><strong>Survey Topic:</strong> {submittedData.surveyTopic}</p>
        {submittedData.surveyTopic === 'Technology' && (
          <>
            <p><strong>Favorite Programming Language:</strong> {submittedData.technology.favoriteLanguage}</p>
            <p><strong>Years of Experience:</strong> {submittedData.technology.yearsOfExperience}</p>
          </>
        )}
        {submittedData.surveyTopic === 'Health' && (
          <>
            <p><strong>Exercise Frequency:</strong> {submittedData.health.exerciseFrequency}</p>
            <p><strong>Diet Preference:</strong> {submittedData.health.dietPreference}</p>
          </>
        )}
        {submittedData.surveyTopic === 'Education' && (
          <>
            <p><strong>Highest Qualification:</strong> {submittedData.education.highestQualification}</p>
            <p><strong>Field of Study:</strong> {submittedData.education.fieldOfStudy}</p>
          </>
        )}
        <p className="break-words"><strong>Feedback:</strong> {submittedData.feedback}</p>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>

        {/* Survey Topic */}
        <div className="mb-4">
          <label className="block text-gray-700">Survey Topic:</label>
          <select
            name="surveyTopic"
            value={formData.surveyTopic}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          >
            <option value="">Select Topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
        </div>

        {/* Conditional Technology Section */}
        {formData.surveyTopic === 'Technology' && (
          <div className="mb-4">
            <label className="block text-gray-700">Favorite Programming Language:</label>
            <select
              name="technology.favoriteLanguage"
              value={formData.technology.favoriteLanguage}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            >
              <option value="">Select Language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
            </select>
            <label className="block text-gray-700 mt-2">Years of Experience:</label>
            <input
              type="number"
              name="technology.yearsOfExperience"
              value={formData.technology.yearsOfExperience}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              min="0"
              required
            />
          </div>
        )}

        {/* Conditional Health Section */}
        {formData.surveyTopic === 'Health' && (
          <div className="mb-4">
            <label className="block text-gray-700">Exercise Frequency:</label>
            <select
              name="health.exerciseFrequency"
              value={formData.health.exerciseFrequency}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            >
              <option value="">Select Frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Rarely">Rarely</option>
            </select>
            <label className="block text-gray-700 mt-2">Diet Preference:</label>
            <select
              name="health.dietPreference"
              value={formData.health.dietPreference}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            >
              <option value="">Select Preference</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
          </div>
        )}

        {/* Conditional Education Section */}
        {formData.surveyTopic === 'Education' && (
          <div className="mb-4">
            <label className="block text-gray-700">Highest Qualification:</label>
            <select
              name="education.highestQualification"
              value={formData.education.highestQualification}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            >
              <option value="">Select Qualification</option>
              <option value="High School">High School</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
            <label className="block text-gray-700 mt-2">Field of Study:</label>
            <input
              type="text"
              name="education.fieldOfStudy"
              value={formData.education.fieldOfStudy}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
        )}

        {/* Feedback */}
        <div className="mb-4">
          <label className="block text-gray-700">Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            rows="4"
            minLength="50"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Render Submitted Data */}
      {renderSubmittedData()}
    </div>
  );
};

export default Form;
