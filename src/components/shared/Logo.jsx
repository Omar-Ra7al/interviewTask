// Icons >>
import { FaShoppingBasket } from "react-icons/fa";
const logoTextClass = "text-xl text-secondary font-bold";
const Logo = () => {
  return (
    <a
      href="/"
      className="flex items-center justify-end gap-x-2">
      <div className="text-end -space-y-2">
        <p className={logoTextClass}>سلة</p>
        <p className={logoTextClass}>salla</p>
      </div>
      <FaShoppingBasket className="text-6xl text-secondary " />
    </a>
  );
};

export default Logo;
