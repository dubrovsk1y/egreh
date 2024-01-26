import Image from "next/image";
import logo from "./assets/logo.png";
import cls from "./Logo.module.css";

export const Logo = () => (
  <div className={cls.logo}>
    <Image
      src={logo}
      alt=""
      priority
    />
  </div>
);
