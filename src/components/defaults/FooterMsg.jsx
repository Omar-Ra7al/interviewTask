// Locals >>
import { useTranslation } from "react-i18next";
// Icons >>
import { TbMessage2 } from "react-icons/tb";

const FooterMsg = () => {
  const { t } = useTranslation();
  return (
    <div
      className="fixed bottom-0 z-50 flex flex-row-reverse flex-wrap items-center justify-center gap-2
                w-full bg-main text-white text-center border-t-2 py-3 px-6 border-main/10  ">
      {t("footerMsg")}
      <button className="bg-secondary text-white px-4 py-2 rounded-md">
        {t("createStore")}
      </button>
      <button
        className="absolute -top-7 left-2 flex items-center justify-center
                    bg-secondary h-14 w-14 rounded-full"
        aria-label="contact">
        <TbMessage2 className="text-xl text-black" />
      </button>
    </div>
  );
};

export default FooterMsg;
