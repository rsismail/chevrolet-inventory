import React from 'react'
import filter from '../images/Filter.svg'
import Sliders from '../images/Sliders.svg'
import {useAuth} from '../contexts/AuthContext'
import close from '../images/L.svg'
import Packages from './onclickcontent/Packages'
import Media from 'react-media'

const Footer = () => {
    const{packageDropDown,packageDropDownFunction,filterBtnVisible}=useAuth()
    return (
       
             
           <Media queries={{
            small320:"(min-width:320px) and (max-width:374px)",
            small375:"(min-width:375px) and (max-width:767px)", 
              small768:"(min-width:768px) and (max-width:1023px)",
              medium: "(min-width:1024px) and (max-width:1151px)",
              large: "(min-width:1152px) and (max-width: 3000px)",

           }}>{matches=>(<>
               {matches.large && <> 
                <div className='sideFooterWrapper'>
            {packageDropDown?<Packages/>:null}<div className='sideFooterFilterWrapper'>
                 <div className='filterIconWrapper'>
                     <img src={filter}/>
            </div> <div className='filterText' onClick={packageDropDownFunction}><h2>{packageDropDown?'Hide Filters':'More Filters'}</h2></div>
            <div className='filterCount'>1</div> </div> 
            <div className="sideFooterLinkWrapper">
       <div>Ad Choices</div>
       <div>FAQs</div>
       
       <div>Sitemap</div>
     
       <div>Chevrolet Worldwide</div>
       <div>Special Pricing</div>
       </div>
</div> </> }
            {matches.medium && <div className='sideFooterWrapper'>
            {packageDropDown?<Packages/>:null}<div className='sideFooterFilterWrapper'>
                 <div className='filterIconWrapper'>
                     <img src={filter}/>
            </div> <div className='filterText' onClick={packageDropDownFunction}><h2>{packageDropDown?'Hide Filters':'More Filters'}</h2></div>
            <div className='filterCount'>1</div> </div> 
            <div className="sideFooterLinkWrapper">
       <div>Ad Choices</div>
       <div>FAQs</div>
       
       <div>Sitemap</div>
     
       <div>Chevrolet Worldwide</div>
       <div>Special Pricing</div>
       </div>
       <div className='sideFooterApplyFilter'>
           <div className='sideFooterApplyFilterBtn'><img src={Sliders}/><span>APPLY FILTER</span></div>

       </div>
</div>}
{matches.small768 && <div className='sideFooterWrapper'>
            {packageDropDown?<Packages/>:null}<div className='sideFooterFilterWrapper'>
                 <div className='filterIconWrapper'>
                     <img src={filter}/>
            </div> <div className='filterText' onClick={packageDropDownFunction}><h2>{packageDropDown?'Hide Filters':'More Filters'}</h2></div>
            <div className='filterCount'>1</div> </div> 
            <div className="sideFooterLinkWrapper">
       <div>Ad Choices</div>
       <div>FAQs</div>
       
       <div>Sitemap</div>
     
       <div>Chevrolet Worldwide</div>
       <div>Special Pricing</div>
       </div>
       <div className='sideFooterApplyFilter'>
           <div className='sideFooterApplyFilterBtn'><img src={Sliders}/><span>APPLY FILTER</span></div>

       </div>
</div> }
{matches.small375 && <div className='sideFooterWrapper'>
            {packageDropDown?<Packages/>:null}<div className='sideFooterFilterWrapper'>
                 <div className='filterIconWrapper'>
                     <img src={filter}/>
            </div> <div className='filterText' onClick={packageDropDownFunction}><h2>{packageDropDown?'Hide Filters':'More Filters'}</h2></div>
            <div className='filterCount'>1</div> </div> 
            <div className="sideFooterLinkWrapper">
       <div>Ad Choices</div>
       <div>FAQs</div>
       
       <div>Sitemap</div>
     
       <div>Chevrolet Worldwide</div>
       <div>Special Pricing</div>
       </div>
       <div className='sideFooterApplyFilterForMob'>
           <div className='sideFooterApplyFilterCloseBtn'><img src={close} onClick={filterBtnVisible}/></div><div className='sideFooterApplyFilterBtn'><img src={Sliders}/><span>APPLY FILTER</span></div>

       </div>
</div> }
{matches.small320 && <div className='sideFooterWrapper'>
            {packageDropDown?<Packages/>:null}<div className='sideFooterFilterWrapper'>
                 <div className='filterIconWrapper'>
                     <img src={filter}/>
            </div> <div className='filterText' onClick={packageDropDownFunction}><h2>{packageDropDown?'Hide Filters':'More Filters'}</h2></div>
            <div className='filterCount'>1</div> </div> 
            <div className="sideFooterLinkWrapperFor320">
       <div className='sideFooterLinkFirstWrapper'><div>Ad Choices</div>
       <div>FAQs</div>
       
       <div>Sitemap</div></div>
       <div className='sideFooterLinkSecondWrapper'><div>Chevrolet Worldwide</div>
       <div>Special Pricing</div></div>
     
       
       </div>
       <div className='sideFooterApplyFilterForMob'>
           <div className='sideFooterApplyFilterCloseBtn'><img src={close} onClick={filterBtnVisible}/></div><div className='sideFooterApplyFilterBtn'><span>APPLY FILTER</span></div>

       </div>
</div> }
           </>
           )}          
            </Media>
       
       
 
    )
}

export default Footer
