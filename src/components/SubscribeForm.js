import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const formData = [
  {
    id: 1,
    firstName: "Rakesh",
    LastName: "Tiwari",
    email: "email@gami.com",
    city: "patna",
  },
];

const SubscribeForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formEntries, setFormEntries] = useState(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isVerified) {
      const newFormData = {
        id: Date.now(),
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        city: e.target.city.value,
      };
      setFormEntries([...formEntries, newFormData]);
      console.log("Formdata", formData);
      setSubmitted(true);
      e.target.reset();
    } else {
      alert("Please check if you are human");
    }
  };

  const reCapchaLoaded = () => {
    setIsVerified(true);
  };

  return (
    <div className="m-4 p-4 justify-center">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="firstname"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
          >
            FirstName
          </label>
          <input
            type="text"
            id="firstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="lastName"
            className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            LastName
          </label>
          <input
            type="text"
            id="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="city"
            className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex justify-center my-4">
          <ReCAPTCHA
            sitekey="6LfSuuApAAAAANGHyaXtqwOKe9Fqtb5ZSRUU5qGF"
            onChange={reCapchaLoaded}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        {submitted && (
          <div className="text-green-500 font-bold text-center my-4 pt-4">
            Thank you for your submission!
          </div>
        )}
      </form>
    </div>
  );
};

export default SubscribeForm;
