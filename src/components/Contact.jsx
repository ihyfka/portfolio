import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "./Footer";

export default function Contact() {
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  });
  const sendMsg = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", `${import.meta.env.VITE_PK}`);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      const success = data && data.success;

      setToast({
        visible: true,
        message: success ? "Message sent!" : "Failed to send message.",
        type: success ? "success" : "error",
      });
      e.target.reset();
    } catch (err) {
      setToast({
        visible: true,
        message: "Unable to send message. Try again.",
        type: "error",
      });
    }

    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3500);
  };
  return (
    <>
      <section
        id="contact"
        className="w-full bg-black text-white py-20 max-[640px]:py-16"
      >
        <div className="max-w-200 w-full mx-auto px-20 flex items-center flex-col gap-[3rem] max-[640px]:px-6 max-[640px]:gap-10">
          <div className="flex flex-col gap-5 max-[640px]:mb-6">
            <motion.h2
              className="text-section-title font-f1 leading-heading font-black tracking-[-0.05em] uppercase mb-12 max-[900px]:text-section-title-tab max-[640px]:text-section-title-mobile max-[640px]:mb-8"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              GET IN TOUCH
            </motion.h2>
            <motion.p
              className="text-[#9ca3af] text-body-lg font-f2 max-w-lg leading-body max-[640px]:text-[1rem] max-[640px]:max-w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              Got a big idea or an exciting partnership in mind? Feel free to
              reach out, let's build something great together.
            </motion.p>
          </div>

          <motion.form
            onSubmit={sendMsg}
            className="flex-1 flex flex-col gap-[1.5rem] w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />
            <div className="flex flex-col gap-2">
              <label className="font-f2 text-[1rem] text-[#f7f7f7] max-[640px]:text-pill">
                Name
              </label>
              <input
                name="name"
                required
                type="text"
                className="bg-transparent border-b border-[#404040] text-white py-2 px-0 font-f2 text-input outline-none transition-colors duration-300 focus:border-white max-[640px]:text-[1rem]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-f2 text-[1rem] text-[#f7f7f7] max-[640px]:text-pill">
                Email
              </label>
              <input
                name="email"
                required
                type="email"
                className="bg-transparent border-b border-[#404040] text-white py-2 px-0 font-f2 text-input outline-none transition-colors duration-300 focus:border-white max-[640px]:text-[1rem]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-f2 text-[1rem] text-[#f7f7f7] max-[640px]:text-pill">
                Message
              </label>
              <textarea
                rows={3}
                name="message"
                type="text"
                required
                className="bg-transparent border-b border-[#404040] text-white py-2 px-0 font-f2 text-input outline-none transition-colors duration-300 focus:border-white resize-none max-[640px]:text-[1rem]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-6 text-black font-f2 font-medium rounded-pill cursor-pointer bg-white border border-[rgba(255,255,255,0.116)] w-fit transition-opacity duration-300 mt-4 self-end hover:opacity-90 max-[640px]:text-[0.875rem] max-[640px]:py-2.5 max-[640px]:px-4.5 max-[640px]:self-start"
            >
              Send
            </button>
          </motion.form>

          <div
            className={`fixed right-6 bottom-6 py-3 px-4 rounded-xl font-f2 font-semibold shadow-[0_6px_20px_rgba(0,0,0,0.6)] backdrop-blur-[6px] opacity-0 translate-y-2 transition-all duration-300 pointer-events-none border max-w-[90%] ${toast.visible ? "opacity-100 translate-y-0 pointer-events-auto" : ""} ${toast.type === "success" ? "bg-[linear-gradient(180deg,rgba(34,197,94,0.15),rgba(34,197,94,0.07))] border-[rgba(34,197,97,0.264)] text-[#e6ffed]" : "bg-[linear-gradient(180deg,rgba(245,62,62,0.15),rgba(239,68,68,0.07))] border-[rgba(239,68,68,0.264)] text-[#ffdede]"}`}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </div>

          <Footer />
        </div>
      </section>
    </>
  );
}
