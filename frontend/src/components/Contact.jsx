import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message Sent Successfully!");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-slate-900 dark:text-white">
      <div className="w-full max-w-lg shadow-xl rounded-lg p-6">
        <div className="flex justify-end">
  <Link
    to="/"
    className="btn btn-sm btn-circle btn-ghost"
  >
    ✕
  </Link>
</div>
        <h1 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div className="mb-4">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered w-full mt-2"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                Name is required
              </span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full mt-2"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                Email is required
              </span>
            )}
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="font-semibold">Subject</label>
            <input
              type="text"
              placeholder="Enter Subject"
              className="input input-bordered w-full mt-2"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">
                Subject is required
              </span>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="font-semibold">Message</label>
            <textarea
              placeholder="Enter Your Message"
              className="textarea textarea-bordered w-full mt-2 h-32"
              {...register("message", { required: true })}
            ></textarea>

            {errors.message && (
              <span className="text-red-500 text-sm">
                Message is required
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Contact;