import React from "react";

const Contact = () => {
  return (
    <div className=" bg-slate-100 py-10">
      <div id="contact" className=" shadow-xl shadow-gray-400 rounded-xl max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold  text-center text-[#001b52] py-4 ">
          Contact
        </h1>

        <form
          action="https://getform.io/f/ddf5e27f-3767-4a38-a7d3-274af1f1f040"
          method="POST"
          encType="multipart/form-data"
          className=""
        >
          <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
            <div className=" flex flex-col">
              <label className="uppercase text-sm py-2" htmlFor="name">
                Name
              </label>
              <input
                className=" border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2" htmlFor="phone">
                Phone
              </label>
              <input
                className=" border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phone"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="email">
              Email
            </label>
            <input
              className=" border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="subject">
              Subject
            </label>
            <input
              className=" border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2" htmlFor="message">
              Message
            </label>
            <textarea
              className=" border-2 rounded-lg p-3 flex border-gray-300"
              name="message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button
            type="submit"
            className=" bg-[#001b5e] text-gray-300 mt-4 w-full p-4 rounded-lg ease-in transition hover:scale-[98%]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
