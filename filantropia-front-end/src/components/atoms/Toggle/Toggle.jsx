import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Toggle.scss";

export const Toggle = (props) => {
  const { buttonLeft, buttonRight } = props;
  // const { isToggle, handleToggleState } = useToggleState();
  const [isToggle, setIsToggle] = useState(false);

  const toggleVariants = {
    black: {
      color: "#191B1D",
    },
    whiteLeft: {
      color: !isToggle ? "#f0f0f0" : "#191B1D;",
    },
    whiteRight: {
      color: isToggle ? "#f0f0f0" : "#191B1D;",
    },
    transition: {
      ease: "ease",
      duration: 1,
    },
  };

  return (
    <Link
      // to={isToggle ? "/donaciones" : "/testimonios"}
      to={isToggle ? "realizar_donaciones" : "generar_certificado"}
      className="toggle"
      onClick={() => setIsToggle(!isToggle)}
    >
      <ToggleLeft toggle={isToggle} />
      <motion.p
        className="toggle__left-text"
        initial={{ color: "#f0f0f0" }}
        animate={isToggle ? "black" : "whiteLeft"}
        variants={toggleVariants}
      >
        {buttonLeft.title}
      </motion.p>
      <ToggleRigth toggle={isToggle} />
      <motion.p
        className="toggle__right-text"
        initial={{ color: "#191B1D" }}
        animate={!isToggle ? "black" : "whiteRight"}
        variants={toggleVariants}
      >
        {buttonRight.title}
      </motion.p>
    </Link>
  );
};

const ToggleLeft = ({ toggle }) => {
  const toggleVariants = {
    hidden: {
      x: "78.5px",
      opacity: 0,
    },
    visible: {
      x: toggle ? "78.5px" : "0",
      opacity: toggle ? 0 : 1,
    },
    transition: {
      ease: "ease",
      duration: 1,
    },
  };

  return (
    <motion.svg
      width="314"
      height="124"
      viewBox="0 0 314 124"
      className="toggle__left"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ x: 0 }}
      animate={toggle ? "hidden" : "visible"}
      variants={toggleVariants}
    >
      <path
        d="M291.951 32.3529C306.509 46.0226 313.788 52.8575 313.788 61.5127C313.788 70.168 306.509 77.0028 291.951 90.6726L269.05 112.176C263.348 117.531 260.497 120.208 256.949 121.612C253.402 123.016 249.491 123.016 241.669 123.016L40.0054 123.016C21.1492 123.016 11.7211 123.016 5.86322 117.159C0.00537109 111.301 0.00537109 101.873 0.00537109 83.0164V61.5127V40.009C0.00537109 21.1529 0.00537109 11.7248 5.86322 5.8669C11.7211 0.0090332 21.1492 0.0090332 40.0054 0.0090332L241.669 0.0090332C249.491 0.0090332 253.402 0.0090332 256.949 1.41336C260.497 2.81768 263.348 5.49485 269.05 10.8492L291.951 32.3529Z"
        fill="#28B2A9"
      />
      <path
        d="M290.924 33.4464C298.235 40.3112 303.603 45.3562 307.162 49.7566C310.694 54.1233 312.288 57.6686 312.288 61.5127C312.288 65.3569 310.694 68.9022 307.162 73.2689C303.603 77.6693 298.235 82.7142 290.924 89.5791L268.023 111.083C262.236 116.517 259.617 118.943 256.397 120.217C253.178 121.492 249.608 121.516 241.669 121.516L40.0054 121.516C30.5349 121.516 23.5829 121.513 18.2598 120.798C12.9799 120.088 9.52768 118.702 6.92389 116.098C4.3201 113.494 2.93408 110.042 2.22421 104.762C1.50854 99.4389 1.50537 92.4869 1.50537 83.0164V61.5127V40.009C1.50537 30.5385 1.50854 23.5866 2.22421 18.2635C2.93408 12.9835 4.3201 9.53133 6.92389 6.92756C9.52768 4.32378 12.9799 2.93776 18.2598 2.22789C23.5829 1.51222 30.5349 1.50903 40.0054 1.50903L241.669 1.50903C249.608 1.50903 253.178 1.53347 256.397 2.80803C259.617 4.08259 262.236 6.50859 268.023 11.9427L290.924 33.4464Z"
        stroke="#7C7C7C"
        strokeOpacity="0.6"
        strokeWidth="3"
      />
    </motion.svg>
  );
};

const ToggleRigth = ({ toggle }) => {
  const toggleVariants = {
    hidden: {
      x: "0px",
      opacity: 0,
    },
    visible: {
      x: toggle ? "0" : "-78.5px",
      opacity: toggle ? 1 : 0,
    },
    transition: {
      ease: "ease",
      duration: 1,
    },
  };
  return (
    <motion.svg
      width="314"
      height="124"
      viewBox="0 0 314 124"
      fill="none"
      className="toggle__right"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ x: "-78.5px" }}
      animate={toggle ? "visible" : "visible"}
      variants={toggleVariants}
    >
      <path
        className="path"
        d="M22.0545 90.6635C7.4966 76.9938 0.217632 70.1589 0.217632 61.5037C0.217631 52.8484 7.4966 46.0136 22.0545 32.3438L44.9555 10.8402C50.6577 5.4858 53.5089 2.80863 57.056 1.4043C60.6031 -2.28882e-05 64.5141 -2.28882e-05 72.3362 -2.28882e-05L274 -2.28882e-05C292.856 -2.28882e-05 302.284 -2.28882e-05 308.142 5.85784C314 11.7157 314 21.1438 314 40V61.5037V83.0074C314 101.864 314 111.292 308.142 117.15C302.284 123.007 292.856 123.007 274 123.007L72.3362 123.007C64.5141 123.007 60.6031 123.007 57.056 121.603C53.5089 120.199 50.6577 117.522 44.9555 112.167L22.0545 90.6635Z"
        fill="#28B2A8"
      />
      <path
        d="M22.0545 89.57C15.7704 82.7052 10.4025 77.6602 6.84309 73.2598C3.31093 68.8932 1.71763 65.3478 1.71763 61.5037C1.71763 57.6595 3.31093 54.1142 6.84309 49.7476C10.4025 45.3471 15.7704 40.3022 23.0813 33.4373L45.9822 11.9336C51.7694 6.49953 54.3888 4.07354 57.6081 2.79898C60.8275 1.52442 64.3976 1.49998 72.3362 1.49998L274 1.49998C283.47 1.49998 290.422 1.50317 295.746 2.21883C301.026 2.9287 304.478 4.31472 307.081 6.9185C309.685 9.52228 311.071 12.9745 311.781 18.2544C312.497 23.5775 312.5 30.5295 312.5 40V61.5037V83.0074C312.5 92.4779 312.497 99.4298 311.781 104.753C311.071 110.033 309.685 113.485 307.081 116.089C304.478 118.693 301.026 120.079 295.746 120.789C290.422 121.504 283.47 121.507 274 121.507L72.3362 121.507C64.3976 121.507 60.8275 121.483 57.6081 120.208C54.3888 118.934 51.7695 116.508 45.9823 111.074L23.0813 89.57Z"
        stroke="#7C7C7C"
        strokeOpacity="0.6"
        strokeWidth="3"
      />
    </motion.svg>
  );
};
