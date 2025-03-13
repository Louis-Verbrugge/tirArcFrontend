import { motion } from "framer-motion"

export function NumberCount() {
  return (
    <>
    <p>dssd</p>

    {/* <motion.h1 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}  
    >
      <motion.span
        initial={{ count: 0 }}
        animate={{ count: 100 }}
        transition={{ duration: 2 }}
      >
        {({ count }) => Math.round(count)}
      </motion.span>
    </motion.h1> */}

    <motion.span
        initial={{ count: 0 }}
        animate={{ count: 100 }}
        transition={{ duration: 2 }}
      >
        {({ count }) => Math.round(count)}
      </motion.span>

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 5 }}
        >

            <p>dsddssddssddssddssd sds</p>
        </motion.div>
    </>
  );
};

