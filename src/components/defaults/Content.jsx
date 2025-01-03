import { useTranslation } from "react-i18next";
// Icons >>
import { CiShop } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
const Content = () => {
  const { t } = useTranslation();
  const fieldClass =
    "w-full lg:w-2/4 flex flex-wrap items-center justify-center  sm:justify-between gap-2 py-2 text-center px-1 border border-main/10 rounded-md overflow-hidden";
  const inputClass = "h-full border-none outline-none py-2";
  return (
    <section
      className="w-full h-full mb-32 md:mb-16 bg-white border border-main/10
    rounded-md overflow-hidden"
      style={{ direction: "rtl" }}>
      <div className="w-full p-2 bg-main/20">{t("storeData")}</div>

      <div className="space-y-4 px-6 py-10 ">
        {/* Logo Settings >> */}
        <div className="flex flex-col gap-y-2 items-center">
          <div className="h-32 w-32">
            <img
              className="w-full h-full object-cover"
              src="/images/logo.webp"
              alt="logo"
            />
          </div>
          <button>{t("updateLogo")}</button>
          <button>{t("isLogoSmall")}</button>
        </div>
        {/* // >> */}

        {/* Form >> */}
        <form
          className="flex flex-col gap-y-2 items-center mt-10"
          onSubmit={(e) => e.preventDefault()}>
          {/*  */}
          <div className={fieldClass}>
            <CiShop className="text-2xl" />
            <input
              className={`flex-1 placeholder:text-center sm:placeholder:text-start ${inputClass}`}
              type="text"
              placeholder="Store Name"
            />
            <select className={`cursor-pointer ${inputClass}`}>
              <option>English</option>
              <option>عربي</option>
            </select>
          </div>
          <div className={fieldClass}>
            <CiShop className="text-2xl" />
            <textarea
              style={{ resize: "none", scrollbarWidth: "none" }}
              rows={3}
              className={`flex-1 ${inputClass} `}
              type="text"
              placeholder={t("storeDescription")}
            />
          </div>
          <div className={fieldClass}>
            <FaLocationDot className="text-2xl" />
            <input
              className={`flex-1 ${inputClass} `}
              type="text"
              placeholder={t("address")}
            />
          </div>
          <div className={`${fieldClass} flex-wrap gap-2 p-2 text-center`}>
            <div>
              <p className="text-md">{t("iconMsg")}</p>
              <p className="text-xs text-main/50">{t("iconMsg2")}</p>
            </div>
            <button type="file" className="flex gap-x-2">
              <FaLocationDot className="text-xl font-bold" />
              {t("changeIcon")}
            </button>
          </div>

          <button
            type="submit"
            className="bg-main text-white px-4 py-2 rounded-md">
            {t("save")}
          </button>
        </form>
        {/* // >> */}
      </div>
    </section>
  );
};

export default Content;
