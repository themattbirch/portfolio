import React, { useEffect } from "react";
import kwesforms from "kwesforms";

const ContactForm = () => {
  useEffect(() => {
    if (kwesforms && typeof kwesforms.init === 'function') {
      console.log("Initializing KwesForms...");
      kwesforms.init();
    } else {
      console.error("KwesForms not available");
    }
  }, []);

  return (
    <form
      method="POST"
      action="https://kwesforms.com/api/f/J4cZUcPjZqE1xfJ662no"
      className="w-full max-w-3xl mx-auto"
      data-kw-validate-on-change="false"
      data-kw-validate-on-blur="false"
      data-kw-show-errors-on="submit"
    >
      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-800 dark:text-white text-xl font-semibold text-center mb-6">
          Drop me a line. Any questions or feedback are welcome!
        </label>
        <textarea
          rows="5"
          name="comment"
          id="comment"
          className="w-full border-2 border-gray-400 dark:border-gray-700 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-md px-4 py-2 transition-colors focus:outline-none focus:border-blue-400 focus:bg-white dark:focus:bg-gray-800 dark:focus:border-blue-400"
          placeholder="Your message here..."
          data-kw-rules="required"
          data-kw-max-length="255"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-blue-700 dark:bg-blue-400 text-white dark:text-black font-bold py-2 px-6 rounded-md transition-colors hover:bg-blue-800 dark:hover:bg-blue-500">
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;