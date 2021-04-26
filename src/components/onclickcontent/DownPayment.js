import React from 'react'
import {useAuth} from '../../contexts/AuthContext'


const DownPayment = () => {
    const{downPaymentDropDownVisible}=useAuth()
    return(
        <>
        <div className='dumyDownPaymentDropDownWrapper' onClick={downPaymentDropDownVisible} ></div>
        <div className='downPaymentDropDownWrapper'>
            <div className='downPaymentDropDownTopContentWrapper'> <div className='downPaymentDropDownFinance'><h5>Finance</h5><h1>$750/mo</h1></div> <div className='doenPaymentDropDownSubtitle'>Based on 84 month term and 0% APR</div></div>

            <div className='downPaymentDropDownBottomContentWrapper'>
            <div className='downPaymentBottomLeftContent'>
                <h5>Down Payment</h5>
                <h1>
                    $0

                </h1>
            
            </div>
            <div className='downPaymentBottomRightContent'>

           <input type="range" min='1' max="1000"className='moved'id="downPaymentDropDownSlider"/>
            </div>

            </div>
            
        </div>
        </>
    )
}

export default DownPayment
