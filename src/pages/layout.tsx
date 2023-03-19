import { FC } from "react";
import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });
interface LayoutProps {
  children: any;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}
const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <main className={[inter.className, "my-1 container"].join(" ")}>
        <Header />
        <Navbar />
        <motion.div
          className="content"
           initial="hidden"
           animate="enter"
           exit="exit"
           variants={variants}
           transition={{ type: 'linear' }}
        >
          {props.children}
        </motion.div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
