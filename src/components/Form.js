import React from "react";

const Form = ({ link }) => {
  return (
    <form
      className="bg-primary-300 p-4  md:p-14"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="mb-5">
        <label className="block mb-2 text-sm font-semibold" htmlFor="name">
          Name
        </label>
        <input className="w-full bg-primary-200 h-[45px]" type="text" />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <input className="w-full bg-primary-200 h-[45px]" type="text" />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-semibold" htmlFor="message">
          Your message
        </label>
        <textarea
          className="w-full h-44 resize-none bg-primary-200"
          id="message"
        ></textarea>
      </div>
      <button
        type="button"
        className="w-[120px] h-[45px] bg-white text-black font-bold ml-auto block"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
