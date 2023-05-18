import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form submission logic here
    try {
      const response = await fetch(
        "https://getform.io/f/ddf5e27f-3767-4a38-a7d3-274af1f1f040",
        {
          method: "POST",
          body: new FormData(e.target),
        }
      );

      if (response.ok) {
        // Clear input values
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });

        console.log("Form submitted successfully!");
      } else {
        console.log("Form submission failed.");
      }
    } catch (error) {
      console.log("Form submission failed:", error);
    }
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="bg-slate-100 py-10">
      <div
        id="contact"
        className="shadow-xl shadow-gray-400 rounded-xl max-w-[1040px] m-auto md:pl-20 p-4 py-16"
      >
        <h1 className="text-4xl font-bold text-center text-[#001b52] py-4">
          Contact
        </h1>

        <form
          onSubmit={handleSubmit}
          // action="https://getform.io/f/ddf5e27f-3767-4a38-a7d3-274af1f1f040"
          // method="POST"
          encType="multipart/form-data"
          className=""
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2" htmlFor="phone">
                Phone
              </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your number"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="example@example.com"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Enter the subject of your mail"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="border-2 rounded-lg p-3 flex border-gray-300"
              name="message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#001b5e] text-gray-300 mt-4 w-full p-4 rounded-lg ease-in transition hover:scale-[98%]"
          >
            Send Message
          </button>
        </form>
        {isSubmitted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg max-w-xs w-full">
              <p className="text-xl font-bold text-gray-800 mb-4">Success!</p>
              <p className="text-green-700">
                Your message has been sent successfully.
              </p>
              <button
                className="bg-[#001b5e] text-white px-4 py-2 mt-4 rounded"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
