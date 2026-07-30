import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import BtnLoading from "./BtnLoading";
import { PROFILE, SECTIONS } from "../data/profile";

const IDLE_MESSAGE = "Replies within one business day.";

const fieldClass =
  "w-full rounded-control border-2 border-rule bg-transparent px-[14px] py-[13px] text-[15px] text-heading focus:border-brand focus:outline-none";
const labelClass =
  "text-[11px] font-bold uppercase tracking-kicker text-heading";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ tone: "idle", text: IDLE_MESSAGE });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ tone: "idle", text: IDLE_MESSAGE });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            tone: "sent",
            text: "Thanks, your message is on its way. I will reply within one business day.",
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          setStatus({
            tone: "error",
            text: `Sending failed. Email me directly at ${PROFILE.email}.`,
          });
        }
      );
  };

  const section = SECTIONS[4];
  const statusColor = {
    idle: "text-muted",
    sent: "text-brand700",
    error: "text-heading",
  }[status.tone];

  return (
    <section id={section.id} className="pt-[88px]">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-brand px-6 py-14 text-ink md:px-14"
      >
        <div className="text-xs font-semibold uppercase tracking-kicker opacity-80">
          {section.num} / {section.kicker}
        </div>
        <h2 className="mt-[18px] max-w-[24ch] text-4xl font-bold tracking-[-0.03em] md:text-banner">
          Interested in working together? Let&apos;s talk.
        </h2>
        <div className="mt-10 grid gap-6 border-t-2 border-ink/35 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="text-[11px] uppercase tracking-kicker opacity-80">
              Email
            </div>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-[17px] font-bold text-ink hover:underline"
            >
              {PROFILE.email}
            </a>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-kicker opacity-80">
              Phone
            </div>
            <a
              href={PROFILE.phoneHref}
              className="text-[17px] font-bold text-ink hover:underline"
            >
              {PROFILE.phone}
            </a>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-kicker opacity-80">
              Based in
            </div>
            <div className="text-[17px] font-bold">{PROFILE.location}</div>
          </div>
        </div>
      </motion.div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid gap-5 px-6 pt-12 md:grid-cols-2 md:px-14"
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-name" className={labelClass}>
            Name
          </label>
          <input
            id="c-name"
            name="from_name"
            type="text"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="c-email" className={labelClass}>
            Email
          </label>
          <input
            id="c-email"
            name="from_email"
            type="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label htmlFor="c-subject" className={labelClass}>
            Subject
          </label>
          <input
            id="c-subject"
            name="subject"
            type="text"
            placeholder="What is this about?"
            className={fieldClass}
          />
        </div>
        <div className="flex flex-col gap-1.5 md:col-span-2">
          <label htmlFor="c-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="c-message"
            name="message"
            rows="5"
            placeholder="A few lines about the project, timeline and budget."
            className={`${fieldClass} resize-y`}
          />
        </div>
        <div className="flex flex-wrap items-center gap-5 md:col-span-2">
          <BtnLoading loading={loading} />
          <span className={`text-[13px] ${statusColor}`} role="status">
            {status.text}
          </span>
        </div>
      </form>
    </section>
  );
}

export default Contact;
