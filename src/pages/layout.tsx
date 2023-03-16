import { FC } from "react";
import Navbar from "../components/Layout/Navbar";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
interface LayoutProps {
  children: any;
}
const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <main className={[inter.className, "my-1 container"].join(" ")}>
      <Navbar />
      <Header />
        {props.children}
      <Footer />
      </main>
    </>
  );
};

export default Layout;
