import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Video from "../Home/Video/Video";
import Tours from "../../components/Tours/Tours";
import TourGuide from "../../components/TourGuide/TourGuide";

const HomeTabs = () => {

    const [tabIndex, setTabIndex] = useState(0)

    return (
        <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab >OverView</Tab>
                    <Tab>Tour Packages</Tab>
                    <Tab>Our Guides</Tab>

                </TabList>
                <TabPanel><Video></Video></TabPanel>
                <TabPanel><Tours></Tours></TabPanel>
                <TabPanel><TourGuide></TourGuide></TabPanel>

            </Tabs>
        </div>
    )
};

export default HomeTabs;