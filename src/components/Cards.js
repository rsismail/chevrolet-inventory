


import React from 'react'
import CardDetails from '../components/data/CardDetails.json'
import Footer from './Footer'
import Sortby from './onclickcontent/Sortby'
import {useAuth} from '../contexts/AuthContext'
import Disclaimer from './onclickcontent/Disclaimer'

const Cards = () => {

     const {gridListView,disclaimerDropDownVisible,disclaimerDropDown} = useAuth()
    
    return (
        
        <>

<div className={`cards${gridListView}`} >       
               { CardDetails.map(c=>(
            <div className={`card${gridListView}`} key="id">
            <div className={`cardcontainer${gridListView}`} >
           <div className={`titlecontainer${gridListView}`}>
               <h5 className={`available${gridListView}`}>{c.available}</h5>
               <h5 className={`gilory${gridListView}`}>{c.miles}</h5>
               <div className={`euvprem${gridListView}`}>
               <h6 className={`prem${gridListView}`}>{c.title}</h6>
               </div>
               </div>
               <div className={`cars${gridListView}`}>
               <img src={c.img} alt='cars' />
               </div>
              <div className={`frames${gridListView}`}>
                      <h6 className={`amount${gridListView}`}>{c.price} <img className={`infos${gridListView}`} src={c.infoimg} alt='info' onClick={disclaimerDropDownVisible}/></h6>
                      <h6 className= {`mis${gridListView}`}>{c.description}</h6>
                      <button className={`btn${gridListView}`}>{c.btn}</button>
                 </div>
               </div>
            </div>
       
             ) )}
           
        </div>
       
       </>
        

    )
}



export default Cards
