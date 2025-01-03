// Compnents >>
import Logo from "../shared/Logo";
// Locals >>
import { useTranslation } from "react-i18next";
// Constants >>
import { navLogoClass } from "../../constants/constants";

// Styles >>
const btnClass =
  "w-full bg-secondary text-white p-2 transition duration-300 hover:bg-main ";

const HeadNav = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="w-full bg-gray-200 flex justify-end h-20">
      {/* Language buttons */}
      <div className="flex flex-col justify-center items-center">
        <button className={btnClass} onClick={() => changeLanguage("en")}>
          English
        </button>
        <button className={btnClass} onClick={() => changeLanguage("ar")}>
          العربية
        </button>
      </div>

      {/* Logo */}
      <div className={`fixed top-0 right-0 h-20 px-3 ${navLogoClass} `}>
        <Logo />
      </div>
    </div>
  );
};

export default HeadNav;
