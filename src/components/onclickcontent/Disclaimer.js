import React from 'react'
import cancel from '../../images/Vector.svg'
import {useAuth} from '../../contexts/AuthContext'


 

const Disclaimer = () => {
    const{disclaimerDropDownVisible,}=useAuth()
    return (<>
       <div className='dummyDisclaimerWrapper' onClick={disclaimerDropDownVisible}></div>
            <div className='disclaimerWrapper'>
            
            <div className='disclaimerCancelImgWrapper'><img onClick={disclaimerDropDownVisible} src={cancel}/></div>
             <div className='disclaimerHeading'>
                 <p>
                     Disclaimer
                 </p></div>
                 <div className='disclaimerBody'>
                     <p>
                     New vehicle pricing includes all offers and incentives. Tax, Title and Tags not included in vehicle prices shown and must be paid by the purchaser. While great effort is made to ensure the accuracy of the information on this site, errors do occur so please verify information with a customer service rep. This is easily done by calling us at (248) 795-1841 or by visiting us at the dealership.
                     </p>
                 </div>
 
             
             
         </div>
       </>
    )
}

export default Disclaimer
