"use client";
import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Header from "../components/header";
import LandingPage from "./landingpage";
import Main from "./main";
import ClientLayout from "../client_layout";

const Page = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.8,
    once: false,
  });
  const headerControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      headerControl.start("hidden");
    } else {
      headerControl.start("visible");
    }
  }, [isInView, headerControl]);

  return (
    <ClientLayout>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -50,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut",
            },
          },
        }}
        initial="hidden"
        animate={headerControl}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
        }}
      >
        <Header />
      </motion.div>

      <div ref={ref}>
        <LandingPage />
      </div>
      <div className="h-[100vh]">
        <Main />
      </div>
    </ClientLayout>
  );
};

export default Page;