import React ,{useRef}from 'react'
import{useAuth} from '../contexts/AuthContext'
import sliderImg from '../images/sliderImg.svg'
import info from '../images/Info.svg'
import DownPayment from '../components/onclickcontent/DownPayment'

const AdjustmentTextSliderWrapper = () => {
    const {
        monthlyPaymentSliderFunc,
        monthlyPaymentSlider,
        downPaymentDropDown,
        downPaymentDropDownVisible}=useAuth();
        const inputRangeRef=useRef();
    return (
        <div className='adjustmentTextSliderWrapper'>
        <div className='adjustmentTextWrapper'>
        <div className="adjust">
           <div className="adjustpay">
        <div>
            <h6 className="agjust">Adjust Monthly Payment </h6>
            <h3 className="admount" >${monthlyPaymentSlider}/mo</h3>
        </div>
        <div>
            <h5 className="downpay" onClick={downPaymentDropDownVisible}> Down Payment $0</h5>
         {downPaymentDropDown?<DownPayment/>:null}
            </div>
    </div>
           </div>
        </div>
        <div className='adjustmentImageWrapper'>
        <div className="slide" >
           <div className="slidermain " >
        <img src={sliderImg} alt='slider' />
    </div>
    <div className="main sliderProb">
        <input type="range" defaultValue='750' min='1' ref={inputRangeRef} max="1000"className='moved'id="slde" onChange={()=>monthlyPaymentSliderFunc(inputRangeRef.current.value)}/>
    <div className='withapproved'>
        <div>
        <h5>**With approved credit Terms may vary.</h5>
        </div>
    <div>
    <img src={info} alt='info' />
    </div>
    </div>
           </div>
           </div>
    
        </div>
        </div>
    )
}

export default AdjustmentTextSliderWrapper
