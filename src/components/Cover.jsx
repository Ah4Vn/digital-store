'use client';
import { motion } from 'framer-motion';
import { useStateContext } from '../context/StateContext.js';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

const fadeInVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const Cover = ({ children }) => {
  const { openLogin, openSignup } = useStateContext();

  return (
    <div className={`cover ${(openLogin || openSignup) && 'cover--show'}`}>
      {openLogin && !openSignup && (
        <motion.div
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={fadeInVariants}
        >
          <Login>{children}</Login>
        </motion.div>
      )}
      {openSignup && !openLogin && (
        <motion.div
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={fadeInVariants}
        >
          <SignUp>{children}</SignUp>
        </motion.div>
      )}
    </div>
  );
};

export default Cover;
