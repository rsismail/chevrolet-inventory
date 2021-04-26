import React from 'react'
import {useAuth} from '../../contexts/AuthContext'


const Packages = () => {
    const{packageFilter}=useAuth()
    return (
        <div className="packages">
        <div>
            <h6>Packages</h6>
            </div>
        <div className="packagesradioconatiner">
        <div className="radiopackage">
        <div className='labeladjust'>
            <label class="Modelradio">
                <input type="checkbox" name="radio3" class='radioBtn' onChange={packageFilter}/><span class="packageCheckmarks"></span>
            </label>
            </div>
    
  <div className="packagename">Protection Plus</div>
        </div>


        <div className="radiopackage">
        <div className='labeladjust'>
            <label class="Modelradio">
                <input type="checkbox" name="radio3" class='radioBtn'/><span class="packageCheckmarks"></span>
            </label>
            </div>
    
  <div className="packagename">Paint& Fabric Plan</div>



        </div>
        <div className="radiopackage">
        <div className='labeladjust'>
            <label class="Modelradio">
                <input type="checkbox" name="radio3" class='radioBtn'/><span class="packageCheckmarks"></span>
            </label>
            </div>
    
  <div className="packagename">Extended Warranty</div>
        </div>
        <div className="radiopackage">
        <div className='labeladjust'>
            <label class="Modelradio">
                <input type="checkbox" name="radio3" class='radioBtn'/><span class="packageCheckmarks"></span>
            </label>
            </div>
    
  <div className="packagename">Infotainment Package</div>
        </div>
        <div className="radiopackage">
        <div className='labeladjust'>
            <label class="Modelradio">
                <input type="checkbox" name="radio3" class='radioBtn'/><span class="packageCheckmarks"></span>
            </label>
            </div>
    
  <div className="packagename">Driver Confidence Package</div>
        </div>
    
</div>
</div>
            
    )
}

export default Packages