import { useTranslation } from "react-i18next";
// Icons >>
import { CiShop } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
const Content = () => {
  const { t } = useTranslation();
  const fieldClass =
    "w-2/4 flex items-center justify-between px-2 border border-main/10 rounded-md overflow-hidden";
  const inputClass = "h-full border-none outline-none p-2 ";
  return (
    <section
      className="w-full h-full bg-white border border-main/10  rounded-md overflow-hidden"
      style={{ direction: "rtl" }}>
      <div className="w-full p-2 bg-main/20">{t("storeData")}</div>

      {/*  */}
      <div className="flex flex-col gap-y-2 items-center mt-10">
        <div className=" h-32 w-32">
          <img
            className="w-full h-full object-cover"
            src="/images/logo.webp"
            alt="logo"
          />
        </div>
        <button>{t("updateLogo")}</button>
        <button>{t("isLogoSmall")}</button>
      </div>
      {/*  */}

      <form
        className="flex flex-col gap-y-2 items-center mt-10"
        onSubmit={(e) => e.preventDefault()}>
        {/*  */}
        <div className={fieldClass}>
          <CiShop className="text-2xl" />
          <input
            className={`flex-1 ${inputClass}`}
            type="text"
            placeholder="Store Name"
          />
          <select className={`cursor-pointer ${inputClass}`}>
            <option>English</option>
            <option>عربي</option>
          </select>
        </div>
        {/*  */}
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
        {/*  */}
        <div className="w-2/4 flex items-center justify-between mt-2">
          <div>
            <p className="text-lg">Website Icon in the browser</p>
            <p className="text-xs text-main/50">the best size is 32px x 32px</p>
          </div>
          <button type="file" className="flex items-center gap-x-2">
            <FaLocationDot className="text-2xl" />
            change wbsite icon
          </button>
        </div>

        {/*  */}
        <button
          type="submit"
          className="bg-main text-white px-4 py-2 rounded-md ">
          {t("save")}
        </button>
      </form>
    </section>
  );
};

export default Content;
