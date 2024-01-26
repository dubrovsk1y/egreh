import { Logo } from "@/shared/ui";
import cls from "./Header.module.css";

export const Header = () => (
  <header className={cls.header}>
    <Logo />
  </header>
);
