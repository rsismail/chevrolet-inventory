import React from 'react'
import chevyimg from '../images/chevylogobowtie.svg'
import signupbtn from '../images/CTA.svg'
import facebook from '../images/Facebook.svg'
import twitter from '../images/Twitter.svg'
import youtube from '../images/Youtube.svg'
import instagram from '../images/Instagram.svg'
import Media from 'react-media'

const Footer = () => {
    return (


        <Media queries={{
            small: "(min-width:20px) and (max-width:767px)",
            medium: "(min-width:768px) and (max-width: 1023px)",
            mediumLarge:"(min-width:1024px) and (max-width:1439px)",
            large: " (min-width:1440px) and (max-width:1919px)",
            ExtraLarge: "(min-width: 1920px) and (max-width:3000px)",
        }}>
            {matches=>(
                <>

                {matches.ExtraLarge && <footer className='footerWrapper'>
                <div className='footerLinksContentWrapper'>
                <div className='logoAndSignupWrapper'>
                <div className='footerChevroletLogo'>
                    <img src={chevyimg}/>
                </div>
                <div className='footerSignup'>
                    <div className='signUpInputAndBtnWrapper'>
                        <input type='text' placeholder='Receive the latest updates'/><div className='signUpBtnWrapper'>
                            <img src={signupbtn}/>
                            </div>
                    </div>
                </div>
                </div>
                <div className='getSupportFollowChevroletWrapper'>
                <div className='footerModelsWrapper'>
                    <h1>MODEL</h1>
                    <span className='modelsSapan'>Bolt EUV</span><span className='modelsSapan'>Bolt EV</span>
                </div>
                <div className='footerGetSupportWrapper'>
                <h1>GET SUPPORT</h1>
                <div className='GetSupportListWrapper'>
                    <li><a>Recalls</a></li>   <li><a>Tech Support</a></li>    <li><a>Mailers</a></li>    <li><a>FAQs</a></li>    <li><a>Owner Manuals</a></li>    <li><a>Warrenty</a></li>
                </div>
                </div>
                <div className='footerFollowWrapper'>
                <h1>FOLLOW CHEVROLET</h1>
                <div className='followChevroletImgWrapper'>
                    <img src={facebook}/>  <img  src={instagram}/>  <img  src={twitter}/>  <img  src={youtube}/>
                </div>
                </div>
                </div>
                
                </div>
                <div className='footerInfoContentWrapper'>
                <div className='footerSiteLinkWrapper'>
               <div className='footerInfoContentLiWrapper'> <li><a>GM Sites</a></li>   <li><a>Copyright & Trademark</a></li>    <li><a>GM Privacy Statement</a></li>   <li><a>AD Choices</a></li>  <li><a>California Residents: Do Not Sell my Personal Info</a></li>  </div>
                   
                   <div className='findNewRoadsHeaderWrapper'><h1>FIND NEW ROADS<span>&#8482;</span></h1>
                        </div>
    
                     </div>
                    <div className='findNewRoadsWrapper'>
                        <div className='footerImportantNoteHeadingWrapper'>
                            <h1>
                                Important Note
                            </h1>
                        </div>
                        
                     <div className='footerOrderListWrapper'><ol>
                     <li>Deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
                     <li>Amet minim mollit non deserunt ullamco est </li>
                     <li>Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim ullamco est sit aliqua dolor do amet sint. Velit officia consequat veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia  met sint. Velit officia consequat duis enim velit mollit. Exercitation amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
                     <li>Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam con mollit non deserunt ullamco est sit aliqua dolor do ameta dolor do amet sint. Velit officia consequat duis enim velit mollit. Exernsequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqucitation veniam consequa minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li></ol></div>
    
                    </div>
    
    
    
                </div>
    
                
            </footer>}
            {matches.mediumLarge && <footer className='footerWrapper'>
                <div className='footerLinksContentWrapper'>
                <div className='logoAndSignupWrapper'>
                <div className='footerChevroletLogo'>
                    <img src={chevyimg}/>
                </div>
                <div className='footerSignup'>
                    <div className='signUpInputAndBtnWrapper'>
                        <input type='text' placeholder='Receive the latest updates'/><div className='signUpBtnWrapper'><img src={signupbtn}/></div>
                    </div>
                </div>
               
                </div>
                <div className='footerModelsWrapper'>
                    <h1>MODEL</h1>
                    <span className='modelsSapan'>Bolt EUV</span><span className='modelsSapan'>Bolt EV</span>
                </div>
                <div className='getSupportFollowChevroletWrapper'>
               
                <div className='footerGetSupportWrapper'>
                <h1>GET SUPPORT</h1>
                <div className='GetSupportListWrapper'>
                    <li><a>Recalls</a></li>   <li><a>Tech Support</a></li>    <li><a>Mailers</a></li>    <li><a>FAQs</a></li>    <li><a>Owner Manuals</a></li>    <li><a>Warrenty</a></li>
                </div>
                </div>
                <div className='footerFollowWrapper'>
                <h1>FOLLOW CHEVROLET</h1>
                <div className='followChevroletImgWrapper'>
                    <img src={facebook}/>  <img  src={instagram}/>  <img  src={twitter}/>  <img  src={youtube}/>
                </div>
                </div>
                </div>
                
                </div>
                <div className='footerInfoContentWrapper'>
                <div className='footerSiteLinkWrapper'>
    
                    <li><a>GM Sites</a></li>   <li><a>Copyright & Trademark</a></li>    <li><a>GM Privacy Statement</a></li>   <li><a>AD Choices</a></li>  <li><a>California Residents: Do Not Sell my Personal Info</a></li>  
                    </div>
                    <div className='findNewRoadsWrapper'>
                        <div className='findNewRoadsHeaderWrapper'><h1>FIND NEW ROADS<span>&#8482;</span></h1>
                     </div>
                     <div className='footerOrderListWrapper'><ol>
                     <li>Deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
                     <li>Amet minim mollit non deserunt ullamco est </li>
                     <li>Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim ullamco est sit aliqua dolor do amet sint. Velit officia consequat veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia  met sint. Velit officia consequat duis enim velit mollit. Exercitation amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
                     <li>Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam con mollit non deserunt ullamco est sit aliqua dolor do ameta dolor do amet sint. Velit officia consequat duis enim velit mollit. Exernsequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqucitation veniam consequa minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li></ol></div>
    
                    </div>
    
    
    
                </div>
    
                
            </footer>}
            {matches.large && <footer className='footerWrapper'>
                <div className='footerLinksContentWrapper'>
                <div className='logoAndSignupWrapper'>
                <div className='footerChevroletLogo'>
                    <img src={chevyimg}/>
                </div>
                <div className='footerSignup'>
                    <div className='signUpInputAndBtnWrapper'>
                        <input type='text' placeholder='Receive the latest updates'/><div className='signUpBtnWrapper'><img src={signupbtn}/></div>
                    </div>
                </div>
               
                </div>
                <div className='footerModelsWrapper'>
                    <h1>MODEL</h1>
                    <span className='modelsSapan'>Bolt EUV</span><span className='modelsSapan'>Bolt EV</span>
                </div>
                <div className='getSupportFollowChevroletWrapper'>
               
                <div className='footerGetSupportWrapper'>
                <h1>GET SUPPORT</h1>
                <div className='GetSupportListWrapper'>
                    <li><a>Recalls</a></li>   <li><a>Tech Support</a></li>    <li><a>Mailers</a></li>    <li><a>FAQs</a></li>    <li><a>Owner Manuals</a></li>    <li><a>Warrenty</a></li>
                </div>
                </div>
                <div className='footerFollowWrapper'>
                <h1>FOLLOW CHEVROLET</h1>
                <div className='followChevroletImgWrapper'>
                    <img src={facebook}/>  <img  src={instagram}/>  <img  src={twitter}/>  <img  src={youtube}/>
                </div>
                </div>
                </div>
                
                </div>
                <div className='footerInfoContentWrapper'>
                <div className='footerSiteLinkWrapper'>
    
                    <li><a>GM Sites</a></li>   <li><a>Copyright & Trademark</a></li>    <li><a>GM Privacy Statement</a></li>   <li><a>AD Choices</a></li>  <li><a>California Residents: Do Not Sell my Personal Info</a></li>  
                    </div>
                    <div className='findNewRoadsWrapper'>
                        <div className='findNewRoadsHeaderWrapper'><h1>FIND NEW ROADS<span>&#8482;</span></h1>
                     </div>
                     <div className='footerOrderListWrapper'><ol>
                     <li>Deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
                     <li>Amet minim mollit non deserunt ullamco est </li>
                     <li>Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim ullamco est sit aliqua dolor do amet sint. Velit officia consequat veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia  met sint. Velit officia consequat duis enim velit mollit. Exercitation amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
                     <li>Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam con mollit non deserunt ullamco est sit aliqua dolor do ameta dolor do amet sint. Velit officia consequat duis enim velit mollit. Exernsequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqucitation veniam consequa minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li></ol></div>
    
                    </div>
    
    
    
                </div>
    
                
            </footer> }

            {matches.medium && <footer className='footerWrapper'>
                
                <div className='footerLinksContentWrapper'>
                <div className='logoAndSignupWrapper'>
                <div className='footerChevroletLogo'>
                    <img src={chevyimg}/>
                </div>
                <div className='footerSignup'>
                    <div className='signUpInputAndBtnWrapper'>
                        <input type='text' placeholder='Receive the latest updates'/><div className='signUpBtnWrapper'><img src={signupbtn}/></div>
                    </div>
                </div>
               
                </div>
                
                <div className='getSupportFollowChevroletWrapperFor768'>
               
                <div className='footerGetSupportWrapperFor768'>
                <div className='footerModelsWrapperFor768'>
                    <h1>MODEL</h1>
                    <span className='modelsSapan'>Bolt EUV</span><span className='modelsSapan'>Bolt EV</span>
                </div>
               <div className='GetSupportListH1WrapperFor768'> <h1 className='GetSupportListH1WrapperFor768Original'>GET SUPPORT</h1>
                <div className='GetSupportListWrapperFor768'>
                    <li><a>Recalls</a></li>   <li><a>Tech Support</a></li>    <li><a>Mailers</a></li>    <li><a>FAQs</a></li>    <li><a>Owner Manuals</a></li>    <li><a>Warrenty</a></li>
                </div></div>
                </div>
                </div>
                <div className='footerFollowWrapperFor768'><div className='footerFollowWrapper'>
                <h1>FOLLOW CHEVROLET</h1>
                <div className='followChevroletImgWrapper'>
                    <img src={facebook}/>  <img  src={instagram}/>  <img  src={twitter}/>  <img  src={youtube}/>
                </div>
                </div></div>
                
                </div>
                <div className='footerInfoContentWrapper'>
                <div className='footerSiteLinkWrapper'>
    
                    <li><a>GM Sites</a></li>   <li><a>Copyright & Trademark</a></li>    <li><a>GM Privacy Statement</a></li>   <li><a>AD Choices</a></li>  <li><a>California Residents: Do Not Sell my Personal Info</a></li>  
                    </div>
                    <div className='findNewRoadsWrapper'>
                        <div className='findNewRoadsHeaderWrapper'><h1>FIND NEW ROADS<span>&#8482;</span></h1>
                     </div>
                     <div className='footerOrderListWrapper'><ol>
                     <li>Deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
                     <li>Amet minim mollit non deserunt ullamco est </li>
                     <li>Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim ullamco est sit aliqua dolor do amet sint. Velit officia consequat veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia  met sint. Velit officia consequat duis enim velit mollit. Exercitation amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
                     <li>Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam con mollit non deserunt ullamco est sit aliqua dolor do ameta dolor do amet sint. Velit officia consequat duis enim velit mollit. Exernsequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqucitation veniam consequa minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li></ol></div>
    
                    </div>
    
    
    
                </div></footer>}

                {matches.small  &&
                <footer className='footerWrapperFor320'>
                <div className='footerLinksContentWrapperFor320'>
                <div className='logoAndSignupWrapperFor320'>
                <div className='footerChevroletLogo'>
                    <img src={chevyimg}/>
                </div>
                <div className='footerSignupFor320'>
                    <div className='signUpInputAndBtnWrapperFor320'>
                        <input type='text' placeholder='Receive'/><div className='signUpBtnWrapperFor320'>
                            <img src={signupbtn}/>
                          
                            
                            </div>
                    </div>
                </div>
                </div>
                <div className='getSupportFollowChevroletWrapperFor320'>
                <div className='footerModelsWrapperFor320'>
                    <h1>MODEL</h1>
                    <span className='modelsSapan'>Bolt EUV</span><span className='modelsSapan'>Bolt EV</span>
                </div>
                <div className='footerGetSupportWrapperFor320'>
                <h1>GET SUPPORT</h1>
                <div className='GetSupportListWrapperFor320'>
                <div><span>Recalls</span>  <span>Tech Support</span>  <span>Mailers</span></div> <div><span>FAQs</span>  <span>Owner's Manuals</span>  <span>Warrenty</span></div>
                </div>
                </div>
                <div className='footerFollowWrapperFor320'>
                <h1>FOLLOW CHEVROLET</h1>
                <div className='followChevroletImgWrapperFor320'>
                    <img src={facebook}/>  <img  src={instagram}/>  <img  src={twitter}/>  <img  src={youtube}/>
                </div>
                </div>
                </div>
                
                </div>
                <div className='footerInfoContentWrapperFor320'>
                <div className='footerSiteLinkWrapperFor320'>
               <div className='footerInfoContentLiWrapperFor320'> <div><span> Sites</span>   <span>Copyright & Trademark</span>   </div> <div><span>GM Privacy Statement</span>   <span>AD Choices</span></div>  <div><span>California Residents: Do Not Sell my Personal Info</span> </div> </div>
              
    
                     </div>
                    <div className='findNewRoadsWrapperFor320'>
                             
                   <div className='findNewRoadsHeaderWrapperFor320'><h1>FIND NEW ROADS<span>&#8482;</span></h1>
                        </div>
                        
                        
                     <div className='footerOrderListWrapperFor320'><ol>
                     <li>Deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li>
                     <li>Amet minim mollit non deserunt ullamco est </li>
                     <li>Mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim ullamco est sit aliqua dolor do amet sint. Velit officia consequat veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia  met sint. Velit officia consequat duis enim velit mollit. Exercitation amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</li>
                     <li>Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam con mollit non deserunt ullamco est sit aliqua dolor do ameta dolor do amet sint. Velit officia consequat duis enim velit mollit. Exernsequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqucitation veniam consequa minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</li></ol></div>
    
                    </div>
    
    
    
                </div>
    
                
            </footer>
         }
            </>
            )}

        
        
        </Media>
    )
}

export default Footer



   /*






import React from 'react'
import search from '../images/search.svg'
import down from '../images/chevlogo.svg'
import grid from '../images/Grid.svg'
import list from '../images/List View.svg'
import Cards from './Cards'
import x from '../images/crosscheck.svg'
import dot from '../images/DotsThreeVertical.svg'
import Sortby from './onclickcontent/Sortby'
import {useAuth} from '../contexts/AuthContext'
import Capsule from './onclickcontent/Capsule'
import SearchBar from './onclickcontent/SearchBar'
import Media from 'react-media'

const CardNav = () => {
    const {sortBy,sortByVisible,changeToList,changeToGrid,capsuleDropDown,capsuleDropDownVisible,searchBarDropDown,searchBarDropDownVisible}=useAuth()
    return (
     
       
                <Media queries={{
                    mobsmall:"(min-width: 320px) and (max-width: 374px)",
          small: "(min-width: 375px) and (max-width: 767px)",
          medium: "(min-width:1024px) and (max-width: 1151px)",
          mediumLarge:"(min-width:1152px) and (max-width:1439px)",
          large: "(min-width: 1440px)"
        }}>{    matches=>(
            <>{matches.large &&
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
                       </div> <div className="secondContentWrapper">
<div className='cardsNavSearchWrapper'>
    <img src={search} alt="search" onClick={searchBarDropDownVisible}/>
</div>
<div className='feature'>
        <div>
            <button className="customBuildButton">CUSTOM BUILD</button>
        </div>
</div>
<div className='CardNavDot'>
                    <img onClick={sortByVisible} src={dot} alt="dot" />
                </div>

            </div>
            
            <div className="thirdContentWrapper">
                
                <div className='CardNavGrid' onClick={changeToGrid}>
                    <img src={grid} alt="grid" />
                </div>
                <div className='GridListSeperator'></div>
                <div className='CardNavList' onClick={changeToList}>
                    <img src={list} alt="list" />
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
                </div><div className='firstContentFilterFor1152'>2 Filter Applied</div> 
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
                    <img onClick={sortByVisible} src={dot} alt="dot" />
                </div>

            </div>
            
            <div className="thirdContentWrapper">
                
                <div className='CardNavGrid' onClick={changeToGrid}>
                    <img src={grid} alt="grid" />
                </div>
                <div className='GridListSeperator'></div>
                <div className='CardNavList' onClick={changeToList}>
                    <img src={list} alt="list" />
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
                    <img onClick={sortByVisible} src={dot} alt="dot" />
                </div>

            </div>
            
            <div className="thirdContentWrapper">
                
                <div className='CardNavGrid' onClick={changeToGrid}>
                    <img src={grid} alt="grid" />
                </div>
                <div className='GridListSeperator'></div>
                <div className='CardNavList' onClick={changeToList}>
                    <img src={list} alt="list" />
                </div>
           
           
            </div>
            </div>}
            {matches.small &&  <div className="cardNavWrapperFor320">
             {capsuleDropDown?<Capsule/>:null}
            {sortBy?<Sortby/>:null}
          {  searchBarDropDown?<SearchBar/>:null}

          <div className='cardsNavSearchWrapperFor320'>
    <img src={search} alt="search" onClick={searchBarDropDownVisible}/>
    <div className='feature'>
            <button className="customBuildButtonFor320">CUSTOM BUILD</button>
</div>
<div className='CardNavDotFor1023'>
                    <img onClick={sortByVisible} src={dot} alt="dot" />
                </div>
    
    
    
</div>
            
                {/* <div className="firstContentWrapperFor1023">
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
                    <img onClick={sortByVisible} src={dot} alt="dot" />
                </div></div>
                
                <div className='cardNavListGridIconWrapper'><div className='CardNavGrid' onClick={changeToGrid}>
                    <img src={grid} alt="grid" />
                </div>
                <div className='GridListSeperator'></div>
                <div className='CardNavListFor1023' onClick={changeToList}>
                    <img src={list} alt="list" />
                </div></div>*/
           
//              }
            
//             </div> }
//             {matches.mobsmall &&  <div className="cardNavWrapperFor320">
//              {capsuleDropDown?<Capsule/>:null}
//             {sortBy?<Sortby/>:null}
//           {  searchBarDropDown?<SearchBar/>:null}
            
                
// <div className='cardsNavSearchWrapperFor320'>
//     <img src={search} alt="search" onClick={searchBarDropDownVisible}/>
//     <div className='feature'>
//             <button className="customBuildButtonFor320">CUSTOM BUILD</button>
// </div>
// <div className='CardNavDotFor1023'>
//                     <img onClick={sortByVisible} src={dot} alt="dot" />
//                 </div>
    
    
    
// </div>


            
            
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
            
            // </div> }
//             </>
//             )
           
 
//             }
//                        </Media>
                
            
            
           
    
//     )
// }

// export default CardNav
