import { FaGithub, FaLinkedin, FaViber } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full py-6 md:px-16 px-6 flex flex-row items-center justify-between">
      <div className="">
        <p className="md:text-md text-sm">
          Created by{" "}
          <a
            href="https://github.com/vinhelper"
            className="text-heading font-bold hover:text-brand"
          >
            VINHELPER
          </a>
        </p>
      </div>
      <div
        id="icons"
        className="flex flex-row gap-1 items-center justify-center"
      >
        <a
          href="https://github.com/vinhelper"
          className="p-2 bg-base rounded-full"
        >
          <FaGithub size={20} color="#f7f9f9" />
        </a>
        <a href="#" className="p-2 bg-base rounded-full">
          <FaLinkedin size={20} color="#f7f9f9" />
        </a>
        <a href="#" className="p-2 bg-base rounded-full">
          <FaViber size={20} color="#f7f9f9" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
