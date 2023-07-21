import { useEffect } from 'react';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => 
    function HOC(){
        useEffect(() => {
            // Check if the hash in the URL matches the idName prop
            if (window.location.hash === `#${idName}`) {
                const element = document.getElementById(idName);
                if (element) {
                    // Use setTimeout to ensure that the scroll happens after the element is rendered
                    setTimeout(() => {
                        element.scrollIntoView();
                    }, 0);
                }
            }
        }, []);

        return (
            <motion.section
                id={idName}
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once:true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper;