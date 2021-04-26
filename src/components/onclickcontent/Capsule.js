import React from 'react'
import x from '../../images/crosscheck.svg'
import {useAuth} from '../../contexts/AuthContext'
import Media from 'react-media'


const Capsule = () => {
    const{capsuleDropDownVisible}=useAuth()
    return (<>
        
        <Media queries={{
            large:"(min-width:1024px)",
            small:"(max-width:1023px)"
        }}>
            {matches=>(<>
            {matches.large && 
            <>
            <div className='dummyCapsuleWrapper' onClick={capsuleDropDownVisible}></div>
            <div className='capsuleWrapper'>
            <div className='capsuleContainer'>
            <div >Bolt EUV<img src={x} alt="x" /></div>
                <div>Premier<img src={x} alt="x"/></div>
            </div>
            
        </div>
        </>
        
        }
            </>)}


        </Media>
        </>
    )
}

export default Capsule
