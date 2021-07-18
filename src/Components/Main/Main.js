import React from 'react'
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';
import FourthSection from './FourthSection/FourthSection';
import FivethSection from './FivethSection/FivethSection';
import SixthSection from './SixthSection/SixthSection';
import Alert from './Alert-section/Alert';
function Main() {
    return (
        <div>
            <Alert/>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FivethSection />
            <SixthSection />
        </div>
    )
}

export default Main
