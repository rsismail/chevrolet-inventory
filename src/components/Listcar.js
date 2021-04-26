import React from 'react'
import CardDetails from '../data/CardDetails.json'


const Listcar = () => {
    return (
        <div className="cardsList">
                           { CardDetails.map(c=>(
            // <div className='cardList' key="id">
            // <div className="cardcontainerList ">
            // <div className='titlecontainerList'>
            //    <h5 className='available'List>{c.available}</h5>
            //    <h5 className='giloryList'>{c.miles}</h5>
            //    <div className='euvpremList'>
            //    <h6 className='premList'>{c.title}</h6>
            //    </div>
            //    </div>
            //    <div className='imgcontainers carsList '>
            //    <img src={c.img} alt='cars' />
            //    </div>




            //   <div className='framesList'>

            //           <h6 className="amountList ">{c.price} <img className="infosList" src={c.infoimg} alt='info'/></h6>
            //           <h6 className="misList">{c.description}</h6>
            //           <button className="btnList">{c.btn}</button>
            //      </div>

            //    </div>
            // </div>

            <div className='cardList' key="id">
            <div className="cardcontainerList ">
               <div className='titlecontainerList'>
               <h5 className='availableList'>{c.available}</h5>
               <h5 className='giloryList'>{c.miles}</h5>
               <div className='euvpremList'>
               <h6 className='premList'>{c.title}</h6>
                </div>
                </div>
               <div className='imgcontainers carsList '>
               <img src={c.img} alt='cars' />
               </div>
              <div className='framesList'>

                      <h6 className="amountList">{c.price} <img className="infosList" src={c.infoimg} alt='info'/></h6>
                      <h6 className="misList">{c.description}</h6>
                      <button className="btnList">{c.btn}</button>
                 </div>

               </div>
            </div>
            
             ) )}


        </div>
    )
}

export default Listcar
