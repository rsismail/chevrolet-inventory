import React from 'react'
import cancel from '../../images/cancel.svg'
import clearall from '../../images/clearall.svg'
import {useAuth} from '../../contexts/AuthContext'
import Media from 'react-media'



const RefineYourVehicle = () => {
    const {refineYourVehicleDropDown,refineYourVehicleDropDownFunction}=useAuth()
    return (
        <Media query="(min-width: 768px)" render={() =>
            (
                <>
                <div className="dummyRefineYourvehicleWrapper" onClick={refineYourVehicleDropDownFunction}></div>
                <div className={`RefineYourVehicle ${refineYourVehicleDropDown?'RefineYourVehicleVisible':''}`}>
                    <div className="RefineYourVehicleContainer">
                        <div className="xbtn">
                        <img src={cancel} alt="xbtn" onClick={refineYourVehicleDropDownFunction} />
                        </div>
                        <div className="RefineVehicle">
                            <h6>Refine your vehicle search </h6>
                        </div>
                        <div className="ModelYearTrim">
        <div className="modelsCar">
            <div>
            <h6>Model</h6> 
            </div>
                <div className="modelcarName">
          <div class="ModelRadioConatiner">
              <div className='labeladjust'>
                    <label class="Modelradio">
                        <input type="checkbox" name="radio3" class='radioBtn'/><span class="checkmarks"></span>
                    </label>
                    </div>
            
          <div className="textmodel">Bolt EUV</div>
        </div>
        
        
        <div class="ModelRadioConatiner">
              <div className='labeladjust'>
                    <label class="Modelradio">
                        <input type="checkbox" name="radio3" class='radioBtn'/><span class="checkmarks"></span>
                    </label>
                    </div>
            
          <div className="textmodel">Bolt EUV</div>
        </div>
        
        
        
                </div>
                
        
            
        
        
        
        
        </div>
        
        <div className="modelsYear">
            <div>
            <h6>Year</h6> 
            </div>
                <div className="modelcarName">
          <div class="ModelRadioConatiner">
              <div className='labeladjust'>
                    <label class="Modelradio">
                        <input type="checkbox" name="radio3" class='radioBtn'/><span class="checkmarks"></span>
                    </label>
                    </div>
            
          <div className="textmodel">2022</div>
        </div>
        
        
        <div class="ModelRadioConatiner">
              <div className='labeladjust'>
                    <label class="Modelradio">
                        <input type="checkbox" name="radio3" class='radioBtn'/><span class="checkmarks"></span>
                    </label>
                    </div>
            
          <div className="textmodel">2021</div>
        </div>
        
        
        <div class="ModelRadioConatiner">
              <div className='labeladjust'>
                    <label class="Modelradio">
                        <input type="checkbox" name="radio3" class='radioBtn'/><span class="checkmarks"></span>
                    </label>
                    </div>
            
          <div className="textmodel">2020</div>
        </div>
        
        
                </div>
                
        
            
        
        
        
        
        </div>
        
        
        
        <div className="modelsTrim">
            <div>
            <h6>Trim</h6> 
            </div>
                <div className="modelcarName">
          <div class="ModelRadioConatiner">
              <div className='labeladjust'>
                    <label class="Modelradio">
                        <input type="checkbox" name="radio3" class='radioBtn'/><span class="checkmarks"></span>
                    </label>
                    </div>
            
          <div className="textmodel">EV LT</div>
        </div>
        
        
        <div class="ModelRadioConatiner">
              <div className='labeladjust'>
                    <label class="Modelradio">
                        <input type="checkbox" name="radio3" class='radioBtn'/><span class="checkmarks"></span>
                    </label>
                    </div>
            
          <div className="textmodel">EV Premier</div>
        </div>
        
        
        <div class="ModelRadioConatiner">
              <div className='labeladjust'>
                    <label class="Modelradio">
                        <input type="checkbox" name="radio3" class='radioBtn'/><span class="checkmarks"></span>
                    </label>
                    </div>
            
          <div className="textmodel">EUV LT</div>
        </div>
        
        <div class="ModelRadioConatiner">
              <div className='labeladjust'>
                    <label class="Modelradio">
                        <input type="checkbox" name="radio3" class='radioBtn'/><span class="checkmarks"></span>
                    </label>
                    </div>
            
          <div className="textmodel">EUV Premier</div>
        </div>
        
                </div>
                
        
            
        
        
        
        
        </div>
        <div className="ClearAll">
        <img src={clearall} alt="clearAll"/>
        <p>CLEAR ALL</p>
        </div>
        
        
        
        
                        </div>
                    </div>
        
                </div>
                </>
            )}
          />
    )
}

export default RefineYourVehicle