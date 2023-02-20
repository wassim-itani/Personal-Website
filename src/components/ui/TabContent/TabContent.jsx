import './TabContent.css'
import { motion } from "framer-motion";
import { tabContent } from '../../../js/animation';
const TabContent = ({ info, index }) => {
    return (
        <motion.div
            role="tabpanel"
            id={`panel-${index}`}
            initial="hidden"
            animate="visible"
            variants={tabContent}
            className='tab-content'
            aria-labelledby={`tab-${index}`}
        >
            <h3 className='tab-content-heading'>{info.position} <span className='notice'>@ {info.company}</span></h3>
            <p className='tab-content-subheading'>{info.from} - {info.to}</p>
            <ul className='tab-content-list'>
                {info.tasks.map((task, i) => {
                    return <li className='tab-content-item' key={i}>{task}</li>
                })}
            </ul>
        </motion.div>
    )
}
export default TabContent;