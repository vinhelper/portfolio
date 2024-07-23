import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully! I'll try to respond ASAP.");
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen h-full flex flex-col justify-center py-20 border-b-2 border-base md:px-16 px-6"
    >
      <div className="container">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col pb-4 lg:w-2/3 mx-auto"
        >
          <div>
            <h6 className="font-bold text-brand text-center">CONTACT</h6>
            <h1 className="font-bold text-heading text-center md:text-5xl text-2xl py-2">
              Interested in working together? Let&apos;s talk
            </h1>
          </div>
          <div className="mt-4">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4 justify-center items-center"
            >
              <div className="flex flex-row flex-wrap gap-4 w-full">
                <input
                  type="text"
                  name="from_name"
                  className="basis-full md:basis-[40%] grow bg-base text-sm rounded-md border border-base focus:border-brand focus:outline-none block w-full p-3"
                  placeholder="Enter your name"
                />
                <input
                  type="email"
                  name="from_email"
                  className="basis-full md:basis-[40%] grow bg-base text-sm rounded-md border border-base focus:border-brand focus:outline-none block w-full p-3"
                  placeholder="Enter your email"
                />
              </div>
              <input
                type="text"
                name="subject"
                className="w-full bg-base text-sm rounded-md border border-base focus:border-brand focus:outline-none block w-full p-3"
                placeholder="Enter subject"
              />
              <textarea
                className="w-full bg-base text-sm rounded-md border border-base focus:border-brand focus:outline-none block w-full p-3"
                placeholder="Enter your message"
                name="message"
                rows="5"
              />
              <button
                type="submit"
                className="w-full bg-brand text-base2 font-bold p-3 rounded-md hover:bg-brand2 transition duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
