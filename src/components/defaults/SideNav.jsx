// Locals >>
import { useTranslation } from "react-i18next";

// Icons >>
import { PiGitBranchLight } from "react-icons/pi";
import { MdArrowBackIos } from "react-icons/md";
import { LuCrown } from "react-icons/lu";
import { BiHome } from "react-icons/bi";
// React >>
import { cloneElement } from "react";
const SpecialSite = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full">
      {/* Special Logo */}
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-dashed border-yellow-400 mx-auto ">
        <img
          className="w-full h-full object-cover"
          src="./images/logo.webp"
          alt="logo"
        />
      </div>
      <div
        className="absolute -top-1 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-x-2 
                  bg-yellow-500 text-black text-[12px]  px-3 rounded-full">
        <LuCrown />
        <p>{t("special")}</p>
      </div>
      {/* // >> */}

      {/* <<p visitStore  */}
      <div className="text-white text-center ">
        <p className="text-xl font-semibold my-3 capitalize">{t("giftShop")}</p>
        <div
          className="flex items-center gap-x-2 w-fit h-8 overflow-hidden ps-3 mx-auto
                    border border-secondary rounded-full">
          <div className="flex items-center gap-x-1 py-2">
            <p className="text-sm">{t("visitStore")}</p>
            <MdArrowBackIos className="text-[10px]" />
          </div>
          <div className="bg-secondary h-full flex items-center justify-center px-3 py-2 ">
            <PiGitBranchLight className="text-black text-md" />
          </div>
        </div>
      </div>
      {/* // >> */}
    </div>
  );
};

const Links = () => {
  const { t } = useTranslation();
  const MAIN_LINKS = [
    { name: t("home"), link: "/", icon: <BiHome /> },
    { name: t("product"), link: "/product", icon: <BiHome /> },
    { name: t("request"), link: "/request", icon: <BiHome /> },
    { name: t("client"), link: "/client", icon: <BiHome /> },
    { name: t("report"), link: "/report", icon: <BiHome /> },
    {
      name: t("questionsAndEvaluations"),
      link: "/evaluation",
      icon: <BiHome />,
    },
    { name: t("profilePages"), link: "/profile", icon: <BiHome /> },
    { name: t("marketingTools"), link: "/marking", icon: <BiHome /> },
  ];
  const SUB_LINKS = [
    {
      subTitle: t("salesChannels"),
      links: [
        { name: t("local"), link: "/local", icon: <BiHome />, isNew: true },
        {
          name: t("online"),
          link: "/online",
          icon: <BiHome />,
          isNew: false,
        },
      ],
    },
    {
      subTitle: t("salesChannels"),
      links: [
        { name: t("local"), link: "/local", icon: <BiHome />, isNew: true },
        {
          name: t("online"),
          link: "/online",
          icon: <BiHome />,
          isNew: false,
        },
        { name: t("ads"), link: "/ads", icon: <BiHome />, isNew: false },
        { name: t("ads"), link: "/ads", icon: <BiHome />, isNew: false },
      ],
    },
    {
      subTitle: t("salesChannels"),
      links: [
        { name: t("local"), link: "/local", icon: <BiHome />, isNew: true },
        {
          name: t("online"),
          link: "/online",
          icon: <BiHome />,
          isNew: false,
        },
        { name: t("ads"), link: "/ads", icon: <BiHome />, isNew: false },
        { name: t("ads"), link: "/ads", icon: <BiHome />, isNew: false },
      ],
    },
  ];

  // Style >>
  const linkClass =
    "flex text-white items-center gap-x-2 px-3 py-2 transition-colors duration-150 hover:bg-black/20";
  return (
    <div>
      <ul className="flex flex-col gap-y-2 mt-6">
        {/* Main Links >> */}
        {MAIN_LINKS.map((link, index) => (
          <li key={index}>
            <a href={link.link} className={`${linkClass}`}>
              {cloneElement(link.icon, { className: "text-2xl" })}
              <p>{link.name}</p>
            </a>
          </li>
        ))}
        {/*  // >> */}
      </ul>
      {/* Sub Links >> */}
      {SUB_LINKS.map((link, index) => (
        <ul key={index}>
          <h1 className={`text-secondary text-lg font-semibold px-3 mt-3`}>
            {link.subTitle}
          </h1>
          {link.links.map((sublink, index) => (
            <li key={index} className="relative">
              <a href={sublink.link} className={`${linkClass}`}>
                {cloneElement(sublink.icon, { className: "text-2xl" })}
                <p>{sublink.name}</p>
              </a>
              {sublink.isNew && (
                <span className="absolute top-1/2 transform -translate-y-1/2  left-0 text-[10px] bg-secondary/80 py-1 px-3 ml-2 rounded-full text-black">
                  new
                </span>
              )}
            </li>
          ))}
        </ul>
      ))}
      {/* // >> */}
    </div>
  );
};
const SideNav = ({ toggle }) => {
  console.log(toggle);
  return (
    <nav
      className={`fixed top-20 right-0 overflow-scroll custom-scrollbar z-50 w-64 h-screen py-6 bg-main text-white transform transition-transform duration-300 ${
        toggle ? "translate-x-0" : "translate-x-full"
      } md:translate-x-0`}>
      <SpecialSite />
      <Links />
    </nav>
  );
};

export default SideNav;
