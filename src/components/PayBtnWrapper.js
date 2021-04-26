import React from 'react'
import check from '../images/check.svg'

const PayBtnWrapper = () => {
    return (
        <div className='payBtnWrapper'>
       <div className="paybutn">
          <div className="checked black">
              <h5>Finance</h5>
           <img className="check" src={check} alt="" /></div>
          <div className="white">Lease </div>
          <div className="white">Cash</div>


       </div>
    </div>
    )
}

export default PayBtnWrapper
