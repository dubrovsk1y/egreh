import { ReactNode } from "react";
import { Header } from "@/widgets/Header";
// import { Footer } from "@/widgets/Footer";
import cls from "./Layout.module.css";

interface IProps {
  children?: ReactNode;
}

export const Layout = (props: IProps) => {
  const { children } = props;

  return (
    <div className={cls.layout}>
      <div className={cls.layoutInner}>
        <Header />

        {children}

        {/* <Footer /> */}
      </div>
    </div>
  );
};
