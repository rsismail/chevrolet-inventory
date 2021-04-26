import React from 'react'

import { useAuth } from '../../contexts/AuthContext'
import Media from 'react-media'
import sortby from '../../images/sortby.svg'
import chevrondown from '../../images/chevrondown.svg'
import Grid from '../../images/Grid.svg'
import List from '../../images/List View.svg'

const Sortby = () => {
   const {sortByVisible,gridListViewBool,changeToGrid,gridListView,changeToList,sortByFilterFunction,sortByFilter}=useAuth()

    return (
        <Media queries={{
            small:"(min-width:320px) and (max-width:374px)",
            medium:"(min-width:375px) and (max-width:767px)",
            large:"(min-width:768px) and (max-width:3000px)"
        }}>

            {matches=>(<>
            {matches.small && <><div className='dummySortByWrapper' onClick={sortByVisible}></div>
        <div className='sortByWrapperForMobile'>

            <div className='sortByHeadingWrapperForMobile'><h1>354 Inventory Available</h1></div>

            <div className={`sortByContentsForMobile ${sortByFilter?'':'sortByContentsForMobilePadding'}`}>
            <div className='sortByContentHeaderWrapper'>
                <div className='sortByImageWrapper'>
                    <img src={sortby} alt='sort'  />
                </div>
                <div><h1>Sort by</h1></div>
                <div className='sortByImageWrapperChevronDown'>
                    <img src={chevrondown} alt='sort'onClick={sortByFilterFunction}/>
                </div>
            </div>

{sortByFilter?
            <>
            <div className="sortByContentDiv">
            <div className='labeladjustFor320'>
            <label class="ModelradioFor320">
                <input type="checkbox" name="radio3" class='radioBtnFor320 radioBtnFor320' /><span class="radiocheckFor320"></span>
            </label>
            </div>
            <p>Price (High to Low)</p>
            </div>
            <div className="sortByContentDiv">  <div className='labeladjustFor320'>
            <label class="ModelradioFor320">
                <input type="checkbox" name="radio3" class='radioBtnFor320' /><span class="radiocheckFor320"></span>
            </label>
            </div>
            <p>Price (Low to High)</p> </div>
            <div className="sortByContentDiv">  <div className='labeladjustFor320'>
            <label class="ModelradioFor320">
                <input type="checkbox" name="radio3" class='radioBtnFor320' /><span class="radiocheckFor320"></span>
            </label>
            </div>
            <p>Distance (Near to Far)</p> </div>
            <div className="sortByContentDiv">   <div className='labeladjustFor320'>
            <label class="ModelradioFor320">
                <input type="checkbox" name="radio3" class='radioBtnFor320' /><span class="radiocheckFor320"></span>
            </label>
            </div>
            <p>Availablity</p></div>
            <div className="sortByContentDiv">   <div className='labeladjustFor320'>
            <label class="ModelradioFor320">
                <input type="checkbox" name="radio3" class='radioBtnFor320' /><span class="radiocheckFor320"></span>
            </label>
            </div>
            <p>Featured</p></div>
            </>:null}

            </div>

            {/* { gridListView==='Grid'?<div className='sortByGridListIconWrapper' onClick={changeToList}>
                <img src={List} alt='grid'/>
                <h1>List View</h1>
            </div>:<div className='sortByGridListIconWrapper' onClick={changeToGrid}>
                <img src={Grid} alt='grid'/>
                <h1>Grid View</h1>
            </div>} */}

        </div></> }

            {matches.medium &&  <><div className='dummySortByWrapper' onClick={sortByVisible}></div>
        <div className='sortByWrapperForMobile'>

            <div className='sortByHeadingWrapperForMobile'><h1>354 Inventory Available</h1></div>

            <div className={`sortByContentsForMobile ${sortByFilter?'':'sortByContentsForMobilePadding'}`}>
            <div className='sortByContentHeaderWrapper'>
                <div className='sortByImageWrapper'>
                    <img src={sortby} alt='sort'/>
                    <div>  <h1>Sort by</h1></div>
                </div>
             
                <div className='sortByImageWrapperChevronDown'>
                    <img src={chevrondown} onClick={sortByFilterFunction} alt='sort'/>
                </div>
            </div>
            {sortByFilter?
            <>
            <div className="sortByContentDiv">
            <div className='labeladjustFor375'>
            <label class="ModelradioFor375">
                <input type="checkbox" name="radio3" class='radioBtnFor375' /><span class="radiocheckFor375"></span>
            </label>
            </div>
            <p>Price (High to Low)</p>
            </div>
            <div className="sortByContentDiv">  <div className='labeladjustFor375'>
            <label class="ModelradioFor375">
                <input type="checkbox" name="radio3" class='radioBtnFor375' /><span class="radiocheckFor375"></span>
            </label>
            </div>
            <p>Price (Low to High)</p> </div>
            <div className="sortByContentDiv">  <div className='labeladjustFor375'>
            <label class="ModelradioFor375">
                <input type="checkbox" name="radio3" class='radioBtnFor375' /><span class="radiocheckFor375"></span>
            </label>
            </div>
            <p>Distance (Near to Far)</p> </div>
            <div className="sortByContentDiv">   <div className='labeladjustFor375'>
            <label class="ModelradioFor375">
                <input type="checkbox" name="radio3" class='radioBtnFor375' /><span class="radiocheckFor375"></span>
            </label>
            </div>
            <p>Availablity</p></div>
            <div className="sortByContentDiv">   <div className='labeladjustFor375'>
            <label class="ModelradioFor375">
                <input type="checkbox" name="radio3" class='radioBtnFor375' /><span class="radiocheckFor375"></span>
            </label>
            </div>
            <p>Featured</p></div>
            </>:null}



            </div>
            {gridListView==='Grid'?<div className='sortByGridListIconWrapper' onClick={changeToList}>
                <img src={List} alt='grid'/>
                <h1>List View</h1>
            </div>:<div className='sortByGridListIconWrapper' onClick={changeToGrid}>
                <img src={Grid} alt='grid'/>
                <h1>Grid View</h1>
            </div>}
            </div>



        </> }
        {matches.large && <><div className='dummySortByWrapper' onClick={sortByVisible}></div>
        <div className='sortByWrapper'>
            <div className='sortByHeadingWrapper'><h1>Sort by</h1><div className='sortByHrLine'></div></div>

            <div className='sortByContents'>
            <div> Price (High to Low)</div>
            <div> Price (Low to High)</div>
            <div> Distance (Near to Far)</div>
            <div> Availablity</div>
            <div> Featured</div>
            </div>

        </div></>}

            </>)}

        </Media>

    )
}

export default Sortby