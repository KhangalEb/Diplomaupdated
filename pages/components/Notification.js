//Next, React (core node_modules) imports must be placed here
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AlertOn } from "@styled-icons/fluentui-system-filled/AlertOn";
import { ErrorCircle } from "@styled-icons/fluentui-system-filled/ErrorCircle";

const StyledAlertOnIcon = styled(AlertOn)`
  box-sizing: border-box;
  width: 2.4em;
  height: 2.4em;
  color: #4caf50;
  background-color: #fff;
  border-radius: 50%;
  padding: 0.6em;
`;

const StyledErrorCircleIcon = styled(ErrorCircle)`
  box-sizing: border-box;
  width: 3em;
  height: 3em;
  color: #fff;
  background-color: #f44336;
  border-radius: 50%;
`;

import styles from "./Notification.module.css";

const variant = {
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.5,
      repeat: 1,
      repeatDelay: 2,
      repeatType: "reverse",
    },
  },
  hidden: {
    scaleX: 0,
    opacity: 0,
    width: 0,
  },
};

const Notification = ({ success, message, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, [success, message]);

  if (!message) {
    return null;
  }

  const handleAnimationComplete = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <motion.div
          variants={variant}
          initial="hidden"
          animate="visible"
          className={styles.container}
          onAnimationComplete={handleAnimationComplete}
        >
          <motion.div
            className={
              success
                ? `${styles.content} ${styles.success}`
                : `${styles.content} ${styles.error}`
            }
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.2,
                repeat: 1,
                repeatDelay: 1.5,
                repeatType: "reverse",
              }}
              className={styles.icon}
            >
              {success ? <StyledAlertOnIcon /> : <StyledErrorCircleIcon />}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.2,
                repeat: 1,
                repeatDelay: 1.5,
                repeatType: "reverse",
              }}
              className={styles.message}
            >
              {message}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Notification;