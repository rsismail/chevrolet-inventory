import React from 'react'
import Cards from "./Cards";
import CardNav from "./CardNav";
import Disclaimer from "./onclickcontent/Disclaimer";
import {useAuth} from '../contexts/AuthContext'
import RefineYourVehicle from './onclickcontent/RefineYourVehicle';

const HomePageRightContent = () => {
    const{disclaimerDropDown,refineYourVehicleDropDown}=useAuth()
    return (
        <div className='homePageRightSideContent'>
     {refineYourVehicleDropDown?<RefineYourVehicle/>:null}
      <CardNav/>
      <Cards/>  
      {disclaimerDropDown?<Disclaimer/>:null}
        </div>
    )
}

export default HomePageRightContent
