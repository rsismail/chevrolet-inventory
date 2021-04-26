import Menu from "./components/Menu";
import FixedNavBar from './components/FixedNavBar'
import mile from './images/miles.svg'
import down from './images/chevron.svg'
import AuthProvider from './contexts/AuthContext'
import check from './images/check.svg'
import slider from './images/sliderimage.svg'
import info from './images/Info.svg'
import arrowright from './images/ArrowRight.svg'
import Footer from "./components/Footer"
import LocationDropDown from './components/onclickcontent/LocationDropDown'
import{useAuth} from './contexts/AuthContext'
import React ,{useRef} from 'react'
import DownPayment from "./components/onclickcontent/DownPayment";
import Disclaimer from "./components/onclickcontent/Disclaimer";
import RefineYourVehicle from "./components/onclickcontent/RefineYourVehicle";
import HomePageNavContent from "./components/HomePageNavContent";
import HomePageLeftContent from "./components/HomePageLeftContent";
import HomePageRightContent from "./components/HomePageRightContent";
import Media from 'react-media'
import FixedFilter from "./components/onclickcontent/FixedFilter";








function App() {
  const {disclaimerDropDown,menuDropDown,stopScrolling}=useAuth();
  return (
    <>



    <div className={`homePageParent ${stopScrolling?' homePageParentScroll':''}`}>
    {menuDropDown? <div className='DummymenuDropDown '></div>:null}
    {disclaimerDropDown?<div className='dummyDisclaimer'></div>:null}
    <FixedFilter/>
   
    <Menu/>
    <HomePageNavContent/>
          <HomePageLeftContent/>
    <HomePageRightContent/>
    <Footer/>
    </div>
    </>


  );
}

export default App;
