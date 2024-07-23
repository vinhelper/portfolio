import ServicesCard from "./ServicesCard";
import { FaCode, FaGear } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { motion } from "framer-motion";

function Services() {
  const myservices = [
    {
      title: "FRONTEND DEVELOPMENT",
      description:
        "I create visually appealing and responsive user interfaces that provide an engaging user experience.",
      icon: <FaCode size={22} color="#34495e" />,
    },
    {
      title: "BACKEND DEVELOPMENT",
      description:
        "I develop robust and scalable server-side solutions ensuring efficient integration and data management.",
      icon: <FaGear size={22} color="#34495e" />,
    },
    {
      title: "MOBILE DEVELOPMENT",
      description:
        "I build intuitive and high-performing mobile applications tailored for Android platform.",
      icon: <IoLogoAndroid size={22} color="#34495e" />,
    },
  ];
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center py-20 border-b-2 border-base md:px-16 px-6"
    >
      <div className="container">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ delay: 0.1 }}
          className="flex flex-row pb-4"
        >
          <div className="basis-full lg:basis-2/3">
            <h6 className="font-bold text-brand">SERVICES</h6>
            <h1 className="font-bold text-heading md:text-5xl text-3xl py-2">
              Services That I Provide
            </h1>
          </div>
        </motion.div>
        <div className="flex flex-row flex-wrap gap-6">
          {myservices.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
