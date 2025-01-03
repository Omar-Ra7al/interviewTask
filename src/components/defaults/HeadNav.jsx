// Compnents >>
import Logo from "../shared/Logo";
import SideNav from "./SideNav";
// Locals >>
import { useTranslation } from "react-i18next";
// Icons >>
import { FaGripLines } from "react-icons/fa";
// React
import { useState } from "react";

// Styles >>
const btnClass =
  "w-full bg-secondary text-white p-2 transition duration-300 hover:bg-main ";

const HeadNav = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between w-full h-20 bg-main px-12 md:bg-gray-100 md:p-0 md:justify-end">
      {/* Language buttons */}
      <div className="flex gap-2 md:gap-0 md:flex-col justify-center items-center">
        <button className={btnClass} onClick={() => changeLanguage("en")}>
          En
        </button>
        <button className={btnClass} onClick={() => changeLanguage("ar")}>
          Ar
        </button>
      </div>
      {/* Logo */}
      <div className={`md:fixed top-0 right-0 h-20 md:px-3 w-64 bg-main py-2 `}>
        <Logo />
      </div>
      {/* Icon >> */}
      <div className="md:hidden">
        <FaGripLines
          className="text-2xl text-white cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
      </div>
      {/* Overlay >> */}
      <SideNav toggle={toggle} />
      {toggle && (
        <div className="md:hidden absolute z-40 top-20 right-0 h-screen w-full backdrop-blur-sm bg-black/10 text-white transform transition-transform duration-300"></div>
      )}
    </div>
  );
};

export default HeadNav;
