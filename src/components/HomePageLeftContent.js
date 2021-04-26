import React from 'react'
import MilesContainerWrapper from "./MilesContainerWrapper";
import PayBtnWrapper from "./PayBtnWrapper";
import AdjustmentTextSliderWrapper from "./AdjustmentTextSliderWrapper";
import RefineModelWrapper from "./RefineModelWrapper";
import RadioButtons from "./RadioButtons";
import SideFooter from './SideFooter'
import Media from 'react-media'
import {useAuth} from '../contexts/AuthContext'

const HomePageLeftContent = () => {
    const{filterBtn,filterBtnVisible}=useAuth()
    return (
        <Media queries={{
            small: "(max-width:1151px)",
            large: "(min-width:1152px)",

            
          }}>
            {
              matches=>( <>{matches.large &&
        <div className='homePageLeftSideContent'>
      <MilesContainerWrapper/>
      <PayBtnWrapper/>
      <AdjustmentTextSliderWrapper/>
      <RefineModelWrapper/>
      <RadioButtons/>
      <SideFooter/>
    </div>}
    { matches.small && <>
   {filterBtn &&  <div className='dummyLeftContentWrapper' onClick={filterBtnVisible}></div>}
    <div className={`homePageLeftSideContentForsmall ${filterBtn?'homePageLeftSideContentForsmallVisible':''}`}>
      <MilesContainerWrapper/>
      <PayBtnWrapper/>
      <AdjustmentTextSliderWrapper/>
      <RefineModelWrapper/>
      <RadioButtons/>
      <SideFooter/>
    </div></>}
    </>
    )
}


</Media>
    )
}

export default HomePageLeftContent
