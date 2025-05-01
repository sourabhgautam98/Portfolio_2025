import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_key: "a218800d-4d43-4f62-9b02-a5fd6505c174",
        ...data
      })
    });

    const result = await response.json();

    if (result.success) {
      setIsSuccess(true);
      setIsError(false);
      reset();
    } else {
      setIsError(true);
      setIsSuccess(false);
    }
  };

  return (
    <section className="bg-black py-16 h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              id="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-3 py-2 focus:border-blue-500 focus:ring-blue-500 shadow-sm placeholder-gray-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              id="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-3 py-2 focus:border-blue-500 focus:ring-blue-500 shadow-sm placeholder-gray-500"
              placeholder="your@email.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              rows="4"
              {...register("message", { required: true })}
              id="message"
              required
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-900 text-white px-3 py-2 focus:border-blue-500 focus:ring-blue-500 shadow-sm placeholder-gray-500"
              placeholder="Your message here..."
            />
          </div>

          {/* Success/Error Message */}
          {isSuccess && (
            <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
          )}
          {isError && (
            <p className="text-red-400 text-sm text-center">Something went wrong. Try again.</p>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
