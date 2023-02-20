import { useState } from "react";
import { motion } from "framer-motion"
import Tab from "../Tab/Tab";
import TabContent from "../TabContent/TabContent";
import { companies, jobInfo } from "../../../js/data";
import './Tabs.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="tabs-container">
            <div className="tabs" role="tablist">
                {companies.map((company, i) => {
                    return <Tab key={i} label={company} index={i} isActive={activeTab === i} onClick={() => setActiveTab(i)} />
                })}
            </div>
            {jobInfo.map((info, i) => {
                if (activeTab === i) {
                    return <TabContent key={i} info={info} index={i} />
                }
            })}
        </div>
    )
}

export default Tabs;