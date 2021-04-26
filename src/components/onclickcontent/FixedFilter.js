import React from 'react'
import Media from 'react-media'
import filter from '../../images/Filter.svg'
import {useAuth} from '../../contexts/AuthContext'

const FixedFilter = () => {
    const {filterBtnVisible} =useAuth()
    return (
        <Media queries={{
          
            medium: "(max-width:1151px)",
            
          }}>
            {
              matches=>( matches.medium &&
                <div className='sideFooterFilterWrapperFixed'>
                <div className='filterIconWrapperFixed'>
                    <img src={filter}/>
           </div><div className='filterTextFixed' onClick={filterBtnVisible}><h2>Filters</h2></div>
           <div className='filterCountFixed'>1</div> </div>
            )
          }
  
  
          </Media>
        
    )
}

export default FixedFilter
