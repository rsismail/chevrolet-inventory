import React from 'react'
import Location from '../../images/My Location.svg'
import {useAuth} from '../../contexts/AuthContext'


const LocationDropDown = () => {
    const{locationDropDownVisible}=useAuth()
    return (
        <>
     <div className="dummyLocationdrop" onClick={locationDropDownVisible}></div>
        <div className="locationdrop">
           <form className="formConatiner">
               <fieldset>
               <legend className="zipCode"> Zip Code</legend>
            <div className="inputAndImg">
    <input type="text" id="fname" placeholder="90004 - Los Angeles, CA" />
    <img src={Location} alt="navgation" />
    </div>
               </fieldset>
               <div className="searchRadius">
    <h6>Search Radius</h6>
    <h5>60mi</h5>
    <input type="range" min='1' max="1000"className=''id="sldess" /></div>
    

</form>
</div>
</>

    )
}

export default LocationDropDown