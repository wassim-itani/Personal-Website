import { motion } from "framer-motion"
import { Heading, Tabs } from '../../components/ui';
import { section } from "../../js/animation";
import './Experience.css';

const Experience = () => {
    return (
        <motion.section
            id='experience'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={section}
        >
            <Heading text="Experience" />
            <Tabs />
        </motion.section>
    )
}

export default Experience;