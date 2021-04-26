import React from 'react'
import Media from 'react-media'



const RadioButtons = () => {

    return (
        <Media queries={{
            small: "(min-width:320px) and (max-width:1439px)",
            large: "(min-width:1440px)"

          }}>
              {match=>(<>{match.large &&
                   <div className="exteriorcontainer">

                   <h5 className="exterior">Exterior</h5>
      <div className="colormain">
                   <div class="container" >
                       <div className='tooltip'>Kinetic Metallic Blue</div>
                  <label class="one">
                      <input type="checkbox" name="radio1" class='radioBtn'/><span class="checkmark"></span>
                  </label>

              </div>
              <div class="container">
              <div className='tooltip'>Kinetic Metallic green</div>
                  <label class="two">
                      <input type="checkbox" name="radio2" class='radioBtn '/><span class="checkmark"></span>
                  </label>
              </div>
              <div class="container">
              <div className='tooltip'>Kinetic Metallic pink</div>
                  <label class="three">
                      <input type="checkbox" name="radio3" class='radioBtn '/><span class="checkmark"></span>
                  </label>
              </div>
              <div class="container">
              <div className='tooltip'>Kinetic Metallic Blue</div>
                  <label class="four">
                      <input type="checkbox" name="radio4" class='radioBtn '/><span class="checkmark"></span>
                  </label>
              </div>
              <div class="container">
              <div className='tooltip'>Kinetic Metallic Blue</div>
                  <label class="five">
                      <input type="checkbox" name="radio5" checked class='radioBtn '/><span class="checkmark"></span>
                  </label>
              </div>


              <div class="container">
              <div className='tooltip'>Kinetic Metallic Blue</div>
                  <label class="six">
                      <input type="checkbox" name="radio6" class='radioBtn '/><span class="checkmark"></span>
                  </label>
              </div>
              <div class="container">
              <div className='tooltip'>Kinetic Metallic Blue</div>
                  <label class="svn">
                      <input type="checkbox" name="radio7" checked class='radioBtn '/><span class="checkmark"></span>
                  </label>
              </div>
              <div class="container">
              <div className='tooltip'>Kinetic Metallic Blue</div>
                  <label class="eight">
                      <input type="checkbox" name="radio8" class='radioBtn '/><span class="checkmark"></span>
                  </label>
              </div>
              <div class="container">
              <div className='tooltip'>Kinetic Metallic Blue</div>
                  <label class="nine">
                      <input type="checkbox" name="radio9" class='radioBtn '/><span class="checkmark"></span>
                  </label>
              </div>
            </div>
            <div className='interior'>
                <h5>Interior</h5>
                <div className='intercolor'>
                <div class="container">
                  <label class="ten">
                      <input type="checkbox" name="radio10" checked class='radioBtn '/><span class="checkmark"></span>
                  </label>
              </div>
              <div class="container">
                  <label class="eleven">
                      <input type="checkbox" name="radio11"  checked class='radioBtn '/><span class="checkmark"></span>
                  </label>
              </div>
                </div>
            </div>


              </div>}{match.small &&     <div className="exteriorcontainerSmall">
            <div className="exteriorcontainerOther">
            <h5 className="exteriorOther">Exterior</h5>
            
<div className="colormainOther">

<div class="container" >
    <div className='tooltip'>Kinetic Metallic Blue</div>
<label class="one">
   <input type="checkbox" name="radio1" class='radioBtn'/><span class="checkmarkOther"></span>
</label>

</div>
<div class="container">
<div className='tooltip'>Kinetic Metallic green</div>
<label class="two">
   <input type="checkbox" name="radio2" class='radioBtn '/><span class="checkmarkOther"></span>
</label>
</div>
<div class="container">
<div className='tooltip'>Kinetic Metallic pink</div>
<label class="three">
   <input type="checkbox" name="radio3" checked class='radioBtn '/><span class="checkmarkOther"></span>
</label>
</div>
<div class="container">
<div className='tooltip'>Kinetic Metallic Blue</div>
<label class="four">
   <input type="checkbox" name="radio4" class='radioBtn '/><span class="checkmarkOther"></span>
</label>
</div>
<div class="container">
<div className='tooltip'>Kinetic Metallic Blue</div>
<label class="five">
   <input type="checkbox" name="radio5" checked class='radioBtn '/><span class="checkmarkOther"></span>
</label>
</div>


<div class="container">
<div className='tooltip'>Kinetic Metallic Blue</div>
<label class="six">
   <input type="checkbox" name="radio6" class='radioBtn '/><span class="checkmarkOther"></span>
</label>
</div>
<div class="container">
<div className='tooltip'>Kinetic Metallic Blue</div>
<label class="svn">
   <input type="checkbox" name="radio7" checked class='radioBtn '/><span class="checkmarkOther"></span>
</label>
</div>
<div class="container">
<div className='tooltip'>Kinetic Metallic Blue</div>
<label class="eight">
   <input type="checkbox" name="radio8" class='radioBtn '/><span class="checkmarkOther"></span>
</label>
</div>
<div class="container">
<div className='tooltip'>Kinetic Metallic Blue</div>
<label class="nine">
   <input type="checkbox" name="radio9" class='radioBtn '/><span class="checkmarkOther"></span>
</label>
</div>
</div>
</div>

<div className='interior'>
    
<h5 className="interiorOther">Interior</h5>

<div className='intercolor'>
<div class="colormain">
<div class="container">
<div className='tooltip'>Kinetic Metallic Blue</div>
<label class="ten">
   <input type="checkbox" name="radio9" class='radioBtn '/><span class="checkmarkOther"></span>
</label>
</div>
</div>
<div class="container">
<div className='tooltip'>Kinetic Metallic Blue</div>
<label class="eleven">
   <input type="checkbox" name="radio9" class='radioBtn '/><span class="checkmarkOther"></span>
</label>
</div>
</div>
</div>


</div>}</>)}

        </Media>
    )
}

export default RadioButtons