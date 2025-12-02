import React from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    toast.success("message is successfully send");
    e.reset();
  };
  return (
    <div className="container mx-auto px-5 mb-8">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
        <div className="card-body">
          <form onSubmit={handleSendMessage}>
            <fieldset className="fieldset">
              <label className="label">Your Name</label>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                name="name"
              />

              <label className="label">Your Email</label>
              <input
                type="email"
                className="input"
                placeholder="Your Email"
                name="email"
              />
              <label className="label">write message</label>
              <textarea
                className="textarea"
                placeholder="write Your Message"
              ></textarea>

              <button className="btn btn-neutral mt-4">send message</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
