import React from 'react'
import{useAuth} from '../contexts/AuthContext'
import chevronup from '../images/chevronup.svg'
import clearall from '../images/clearall.svg'
import chevrondown from '../images/chevrondown.svg'
import arrowright from '../images/ArrowRight.svg'
import Media from 'react-media'
import RefineYourVehicle from './onclickcontent/RefineYourVehicle'
import cancel from '../images/cancel.svg'


const RefineModelWrapper = () => {
    // const {refineYourVehicleDropDownFunction}=useAuth()
    const {refineYourVehicleDropDown,refineYourVehicleDropDownFunction}=useAuth()
    return (
        
          <Media queries={{
             small: "(max-width: 767px)",
             large: "(min-width: 768px) and (max-width: 3000px)"
           }}>
             {matches => (
               <>
                 {   matches.small && 
                 <div className='refineModelWrapperFor375'>
        <div className='refineHeaderAndIconWrapper'>
          <h4>Refine Model/Year/Trim</h4>
          <img className='refineChevronDownImg' src={refineYourVehicleDropDown?chevronup:chevrondown} alt='arrow righrt' onClick={refineYourVehicleDropDownFunction}/>
          </div>
          <div className='RefineSubtitle'>
            <h6>Choose Your car model, Year
        and Trim variants</h6>
          </div> 
          <div className={`ModelYearTrimFor375 ${refineYourVehicleDropDown?'RefineYourVehicleVisibleFor375':''}`}>
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
     </div>
        

        {/* <div className={`RefineYourVehicleFor375 ${refineYourVehicleDropDown?'RefineYourVehicleVisibleFor375':''}`}>
            <div className="RefineYourVehicleContainerFor375">
                <div className="xbtn">
                <img src={cancel} alt="xbtn" onClick={refineYourVehicleDropDownFunction} />
                </div>
                <div className="RefineVehicle">
                    <h6>Refine your vehicle search </h6>
                </div>
        
            </div>
        </div> */}
          </div> 
          }
                 
                 {matches.large && <div className='refineModelWrapper'>
        <div className='refineHeaderAndIconWrapper'>
          <h4>Refine Model/Year/Trim</h4>
          <img src={arrowright} alt='arrow righrt' onClick={refineYourVehicleDropDownFunction}/>
          </div>
          <div className='RefineSubtitle'>
            <h6>Choose Your car model, Year <br/>
        and Trim variants</h6>
          </div> 
          
          
          </div>}
               </>
             )}
            
        

          </Media>





          
    )
}

export default RefineModelWrapper
