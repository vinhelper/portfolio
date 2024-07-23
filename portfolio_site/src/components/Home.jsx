import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center py-20 border-b-2 border-base md:px-16 px-6"
    >
      <div className="container">
        <div className="grid grid-cols-12">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.1 }}
            className="col-span-12 lg:col-span-10"
          >
            <h1 className="font-bold md:text-5xl text-3xl text-heading pb-4">
              I&apos;M A <span className="text-brand">SOFTWARE ENGINEER</span>{" "}
              FROM CAVITE, PHILIPPINES
            </h1>
            <p className="text-lg pb-8">
              Hello! I am Arvin Jay Nadal, a software engineer from Cavite,
              Philippines. I am confident in my solid foundation in web
              development and also passionate for learning new development
              techniques to create and build an efficient, scalable
              applications.
            </p>
            <div className="flex flex-row flex-wrap items-center md:gap-8 gap-4">
              <a
                href="#work"
                className="px-8 py-4 bg-brand rounded-lg text-base font-bold hover:bg-brand2"
              >
                Explore My Work
              </a>
              <a
                href="#"
                className="relative py-2 font-bold after:transition-all after:absolute after:w-0 hover:after:w-full after:h-0.5 after:bg-brand after:left-0 after:bottom-0"
              >
                Call: (+63) 976-371-1501
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
