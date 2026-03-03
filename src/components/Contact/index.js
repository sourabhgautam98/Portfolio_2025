import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "a218800d-4d43-4f62-9b02-a5fd6505c174",
        ...data,
      }),
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
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <section className="relative w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2 mb-6 rounded-full bg-white/[0.05] border border-white/[0.08] text-sm font-medium text-gray-400 tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Drop me a message.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group relative"
        >
          {/* Glow */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600/20 to-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl rounded-2xl p-8 md:p-10 transition-all duration-500 group-hover:border-white/[0.12]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 text-violet-400" />
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  id="name"
                  required
                  className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] text-white px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all duration-300"
                  placeholder="Your Name"
                />
              </motion.div>

              {/* Email */}
              <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 text-violet-400" />
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  id="email"
                  required
                  className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] text-white px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all duration-300"
                  placeholder="your@email.com"
                />
              </motion.div>

              {/* Message */}
              <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 text-violet-400" />
                  Message
                </label>
                <textarea
                  rows="5"
                  {...register("message", { required: true })}
                  id="message"
                  required
                  className="w-full rounded-xl bg-white/[0.04] border border-white/[0.08] text-white px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Status */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
                >
                  <CheckCircle className="w-4 h-4" />
                  Message sent successfully!
                </motion.div>
              )}
              {isError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  <AlertCircle className="w-4 h-4" />
                  Something went wrong. Please try again.
                </motion.div>
              )}

              {/* Submit */}
              <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn w-full flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
