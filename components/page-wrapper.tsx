"use client";

import classNames from "classnames";
import { motion } from "framer-motion";

export const PageWrapper = ({
  children,
  className,
      }: {
      children: React.ReactNode;
      className?: string;
          }) => (

          <motion.div
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{duration: 0.75,}}
              variants={{
                initialState: {
                  opacity: 0,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                },
                animateState: {
                  opacity: 1,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                },
                exitState: {
                  clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                },
              }}
              className={classNames("min-h-screenHeightWithoutHeader", className)}
          >
            
    {children}
  </motion.div>
);