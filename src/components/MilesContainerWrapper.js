import React from 'react'
import mile from '../images//miles.svg'
import down from '../images/chevron.svg'
import {useAuth} from '../contexts/AuthContext'
import LocationDropDown from './onclickcontent/LocationDropDown'

const MilesContainerWrapper = () => {
    const {locationDropDown,locationDropDownVisible}=useAuth()
    return (
        <div className="mailsconatinerWrapper">
        <div className="mailsconatiner">
         <div className="miless">
      <div>
    <img src={mile} alt="miles" />

      </div>
      <div className="milestxt">
     
      <h5 className="angles">LOS Angeles, CA</h5>

    <h5 className="smi">20 mi search radius</h5>
          
          
      </div>
      <div className="dwnarw">
          <img className='dwnarwImg1'src={down} alt="down" onClick={locationDropDownVisible}/>
      </div>
     {  locationDropDown?<LocationDropDown/>:null}
     </div>
     </div></div>
    )
}

export default MilesContainerWrapper
