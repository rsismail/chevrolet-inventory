import React from 'react'
import search from '../images/search.svg'
import down from '../images/chevron.svg'
import grid from '../images/Grid.svg'
import gridnonactive from '../images/GridNonActive.svg'
import list from '../images/List View.svg'
import listactive from '../images/listactive.svg'
import Cards from './Cards'
import x from '../images/crosscheck.svg'
import dot from '../images/DotsThreeVertical.svg'
import dotdisable from '../images/3dotsdisable.svg'

import Sortby from './onclickcontent/Sortby'
import {useAuth} from '../contexts/AuthContext'
import Capsule from './onclickcontent/Capsule'
import SearchBar from './onclickcontent/SearchBar'
import Media from 'react-media'

const CardNav = () => {
    const {sortBy,sortByVisible,changeToList,changeToGrid,gridListViewBool,gridListView,capsuleDropDown,capsuleDropDownVisible,searchBarDropDown,searchBarDropDownVisible}=useAuth()
    return (
     
       
                <Media queries={{
                    mobsmall:"(min-width: 320px) and (max-width: 374px)",
          small: "(min-width: 375px) and (max-width: 767px)",
          medium768And1023:"(min-width: 768px) and (max-width: 1023px)",
          medium: "(min-width:1024px) and (max-width: 1151px)",
          mediumLarge:"(min-width:1152px) and (max-width:1439px)",
          large: "(min-width: 1440px)"
        }}>{    matches=>(
            <>

            {matches.medium768And1023 && <div className="cardNavWrapperFor1023">
             {capsuleDropDown?<Capsule/>:null}
            {sortBy?<Sortby/>:null}
          {  searchBarDropDown?<SearchBar/>:null}
            
                <div className="firstContentWrapperFor1023">
<div className='cardsNavSearchWrapper'>
    <img src={search} alt="search" onClick={searchBarDropDownVisible}/><span>Search</span>
</div>


            </div>
            
            <div className="secondContentWrapperFor1023">
           <div className='filterCustomDotWrapperFor1023'>
           {/* <div className='firstContentFilterFor1152'>2 Filter Applied</div> */}
<div className='feature'>
            <button className="customBuildButton">CUSTOM BUILD</button>
</div>
<div className='CardNavDotFor1023'>
                    <img onClick={sortByVisible} src={sortBy?dotdisable:dot} alt="dot" />
                </div></div>
                
                <div className='cardNavListGridIconWrapper'><div className='CardNavGrid' onClick={changeToGrid}>
                    <img src={gridListView==='Grid'?gridnonactive:grid} alt="grid" />
                </div>
                <div className='GridListSeperator'></div>
                <div className='CardNavListFor1023' onClick={changeToList}>
                    <img src={gridListView==='List'?list:listactive} alt="list" />
                </div></div>
           
            </div>
            
            </div>
            
                }
            {matches.large &&
            <div className="cardNavWrapper">
            {capsuleDropDown?<Capsule/>:null}
           {sortBy?<Sortby/>:null}
         {  searchBarDropDown?<SearchBar/>:null}
           <div className="firstContentWrapper">
               <div className="inventory">
                   <p>354 Inventory</p>
                   <p>Available</p>
               </div>
                <div className="firstContentFilter">
                <div className='filter1'>BOLT EV<img src={x} alt="x" /></div>
                    <div className='filter2' >2022<img src={x} alt="x" /></div>
                    <div className='filterThree'>LT<img src={x} alt="x" /></div>
                    <div className='filterRemaining' style={{paddingRight:'16px'}} onClick={capsuleDropDownVisible}>+2more</div>
             
                       </div>
                       </div>

                       <Media  queries={{
                    large1440:"(min-width: 1440px) and (max-width: 1919px)",
                    large1920:"(min-width: 1920px)"
                    }}> 
                    {matches=>(<>


                    {matches.large1440 && <div className="secondContentWrapper">
<div className='cardsNavSearchWrapper'>
    <img src={search} alt="search" onClick={searchBarDropDownVisible}/>
</div>
<div className='feature'>
        <div>
            <button className="customBuildButton">CUSTOM BUILD</button>
        </div>
</div>
<div className='CardNavDot'>
                    <img onClick={sortByVisible} src={sortBy?dotdisable:dot} alt="dot" />
                </div>

            </div>}
            {matches.large1920 && <div className="secondContentWrapper">
<div className='cardsNavSearchWrapper'>
    <img src={search} alt="search" onClick={searchBarDropDownVisible}/>
</div>

<div className='featuredFor1920'>
                    <div>Featured</div>
                    <img src={down} alt="miles" onClick={ sortByVisible}/>
                
                    
                </div>
                <div className='feature'>
        <div>
            <button className="customBuildButton">CUSTOM BUILD</button>
        </div>
</div>

            </div>}
                    
                    
                    
                    </>)}


                       </Media>

                        
            
            <div className="thirdContentWrapper">
                
                <div className='CardNavGrid' onClick={changeToGrid}>
                    <img src={gridListView==='Grid'?gridnonactive:grid} alt="grid" />
                </div>
                <div className='GridListSeperator'></div>
                <div className='CardNavList' onClick={changeToList}>
                    <img src={gridListView==='List'?list:listactive} alt="list" />
                </div>
           
           
            </div>
            </div>}

           { matches.mediumLarge && <div className="cardNavWrapper">
             {capsuleDropDown?<Capsule/>:null}
            {sortBy?<Sortby/>:null}
          {  searchBarDropDown?<SearchBar/>:null}
            <div className="firstContentWrapper">
                <div className="inventory">
                    <p>354 Inventory</p>
                    <p>Available</p>
                </div><div className='firstContentFilterFor1152' onClick={ capsuleDropDownVisible}>2 Filter Applied</div> 
                </div>
                <div className="secondContentWrapper">
<div className='cardsNavSearchWrapper'>
    <img src={search} alt="search" onClick={searchBarDropDownVisible}/>
</div>
<div className='feature'>
        <div>
            <button className="customBuildButton">CUSTOM BUILD</button>
        </div>
</div>
<div className='CardNavDot'>
                    <img onClick={sortByVisible} src={sortBy?dotdisable:dot} alt="dot" />
                </div>

            </div>
            
            <div className="thirdContentWrapper">
                
                <div className='CardNavGrid' onClick={changeToGrid}>
                    <img src={gridListView==='Grid'?gridnonactive:grid} alt="grid" />
                </div>
                <div className='GridListSeperator'></div>
                <div className='CardNavList' onClick={changeToList}>
                    <img src={gridListView==='List'?list:listactive} alt="list" />
                </div>
           
            </div>
            
            </div>}
            
            {matches.medium && <div className="cardNavWrapper">
            {capsuleDropDown?<Capsule/>:null}
           {sortBy?<Sortby/>:null}
         {  searchBarDropDown?<SearchBar/>:null}
           <div className="firstContentWrapper">
               <div className="inventory">
                   <p>354 Inventory</p>
                   <p>Available</p>
               </div>
                <div className="firstContentFilter">
                <div className='filter1'>BOLT EV<img src={x} alt="x" /></div>
                    <div className='filter2' >2022<img src={x} alt="x" /></div>
                    <div className='filterThree'>LT<img src={x} alt="x" /></div>
                    <div className='filterRemaining' style={{paddingRight:'16px'}} onClick={capsuleDropDownVisible}>+2more</div>
             
                       </div></div> <div className="secondContentWrapper">
<div className='cardsNavSearchWrapper'>
    <img src={search} alt="search" onClick={searchBarDropDownVisible}/>
</div>
<div className='feature'>
        <div>
            <button className="customBuildButton">CUSTOM BUILD</button>
        </div>
</div>
<div className='CardNavDot'>
                    <img onClick={sortByVisible} src={sortBy?dotdisable:dot} alt="dot" />
                </div>

            </div>
            
            <div className="thirdContentWrapper">
                
                <div className='CardNavGrid' onClick={changeToGrid}>
                    <img src={gridListView==='Grid'?gridnonactive:grid} alt="grid" />
                </div>
                <div className='GridListSeperator'></div>
                <div className='CardNavList' onClick={changeToList}>
                    <img src={gridListView==='List'?list:listactive} alt="list" />
                </div>
           
           
            </div>
            </div>}
            {matches.small &&  <div className="cardNavWrapper"> {capsuleDropDown?<Capsule/>:null}
           {sortBy?<Sortby/>:null}
         {  searchBarDropDown?<SearchBar/>:null}  <div className="firstContentWrapperFor1023">
<div className='cardsNavSearchWrapper'>
    <img src={search} alt="search" onClick={searchBarDropDownVisible}/>
    
    <span>Search</span>
    
</div>


            </div>
            
            <div className="secondContentWrapperFor1023">
           <div className='filterCustomDotWrapperFor1023'>
           
<div className='feature'>
            <button className="customBuildButton">CUSTOM BUILD</button>
</div>
<div className='CardNavDotFor1023'>
                    <img onClick={sortByVisible} src={sortBy?dotdisable:dot} alt="dot" />
                </div></div>
                
                <div className='cardNavListGridIconWrapper'><div className='CardNavGrid' onClick={changeToGrid}>
                    <img src={gridListView==='Grid'?gridnonactive:grid} alt="grid" />
                </div>
                <div className='GridListSeperator'></div>
                <div className='CardNavListFor1023' onClick={changeToList}>
                    <img src={gridListView==='List'?list:listactive} alt="list" />
                </div></div></div>
           
             
            
            </div> }
            {matches.mobsmall &&  <div className="cardNavWrapperFor320">
             {capsuleDropDown?<Capsule/>:null}
            {sortBy?<Sortby/>:null}
          {  searchBarDropDown?<SearchBar/>:null}
            
                
<div className='cardsNavSearchWrapperFor320'>
    <img src={search} alt="search" onClick={searchBarDropDownVisible}/>
    <div className='feature'>
            <button className="customBuildButtonFor320">CUSTOM BUILD</button>
</div>
<div className='CardNavDotFor1023'>
                    <img onClick={sortByVisible} src={sortBy?dotdisable:dot} alt="dot" />
                </div>
    
    
    
</div>


            
            
            {/* <div className="secondContentWrapperFor1023">
           <div className='filterCustomDotWrapperFor1023'> */}
           {/* <div className='firstContentFilterFor1152'>2 Filter Applied</div> */}
{/* </div> */}
                
                {/* <div className='cardNavListGridIconWrapper'><div className='CardNavGrid' onClick={changeToGrid}>
                    <img src={grid} alt="grid" />
                </div>
                <div className='GridListSeperator'></div>
                <div className='CardNavListFor1023' onClick={changeToList}>
                    <img src={list} alt="list" />
                </div></div> */}
           
            {/* </div> */}
            
            </div> }
            </>
            )
           
 
            }
                       </Media>
                
            
            
           
    
    )
}

export default CardNav