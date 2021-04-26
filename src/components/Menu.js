import React ,{useState}from 'react'
import chevroletImage from '../images/chevlogo.svg'
import cancel from '../images/cancel.svg'
import arrowforword from '../images/arrow.svg'
import playstore from '../images/playstore.svg'
import applelogo from '../images/applelogo.svg'
import userAvatar from '../images/userAvatar.svg'
import MenuListContent from './MenuListContent'
import {useAuth} from '../contexts/AuthContext'


const Menu = () => {
    const {menuDropDown,menufunction}=useAuth()
    const[menuLists,setMenuLists]=useState([

        {
           listHeading :'Bolt Euv',
           listContents:[{
               name:'Bolt Ev'
           },
           {
            name:'Search Inventory'
        },
        {
            name:'Test Drive'
        },
        {
            name:'Vehicle Compare'
        }
        ]
        },
        {
            listHeading :'Living Electric',
            listContents:[{
                name:'Charging and Range'
            },
            {
             name:'Performance'
         },
         {
             name:'Total Cost of Ownership'
         },
         {
             name:'Home Charging Information'
         }
         ]
         },
         {
            listHeading :'Ownership',
            listContents:[{
                name:'Chevrolet Complete Care'
            },
            {
             name:'My Chevrolet App'
         },
         {
             name:'Accessories'
         },
         {
             name:'Connected Services'
         }
         ]
         },
         {
            listHeading :'Support',
            listContents:[{
                name:'Find a Dealer'
            },
            {
             name:'Contact Us'
         }
         ]
         },

    ])
    return (<>
        <div className={menuDropDown?'menuDummyWrapper':''} onClick={menufunction}></div>

                <div className={`menuParent ${menuDropDown?'menuParentVisible':''}`}>
            <div className='menuHeader'>
            <div className='menuHeaderCancelBtnWrapper'>
                <img src={cancel} alt='images' onClick={menufunction}/>
                </div>
                <div className='menuHeaderLogoWrapper'>
                    <img src={chevroletImage} alt='images'/>
                </div>
                <div className='menuHeaderUserInfoWrapper'>
                    <div className='userImageWrapper'>
                    <img className='userImage' src={userAvatar}/>

                    </div>
                    <div className='userNameWrapper'>
                        <h1 className='userName'>
                            Dianne Russel
                        </h1>
                        <h3>
                            Mesa, New Jersey 45463
                        </h3>
                    </div>
                    <div className='menuHeaderForwordImgWrapper'>
                    <img src={arrowforword} alt='images'/>
                </div>

                </div>

            </div>
            <div className='menuBody'>
    {        menuLists.map(menuList=>(<MenuListContent menuList={menuList} />))}
    <div className='menuSignout'><a >Sign Out</a></div>
    <div className='menuDownloadAppWrapper'><h1>Download My Chevrolet App</h1></div>
    <div className='menuAppleLogoWrapper'>
                    <img src={applelogo} alt='images'/>
                </div>
                <div className='menuPlaystoreLogoWrapper'>
                    <img src={playstore} alt='images'/>
                </div>
                <div className='menuLanguageWrapper'><h1>Language</h1>
                <div >
                <div className='menuSelectedLanguage'> <div>EN</div></div>
            </div>
            <div className='menuLanguageSpan'><span>FR</span><span>ES</span></div>
                </div>

                <div className='menuFooterWrapper'>
                    <a>ChevroletEV. &copy; 2021. All rights reserved.</a>
                </div>

            </div>
        </div>
     
        </>

    )
}

export default Menu