import React from 'react'
import searchIcon from '../../images/search.svg'
import cancel from '../../images/cancel.svg'
    import { useAuth } from '../../contexts/AuthContext'

const SearchBar = () => {
    const {searchBarDropDownVisible }= useAuth()
    return (
        <>
        <div className='dummySearchDropDownWrapper' onClick={searchBarDropDownVisible}></div>
        <div className='searchDropDownWrapper'>
            <div className='searchDropDownContent'>
                <div className='SearchInputAndIconWrapper'>
                    <div className='searchIconWrapper'>
                        <img src={searchIcon}/>
                    </div><span>Search by</span>
                    <div className='searchInputWrapper'>
                        <input type='text' placeholder='budget, style, make, and model'/>
                    </div>
                </div>
                <div className='searchDropDownCancelBtnWrapper' onClick={searchBarDropDownVisible}>
                    <img src={cancel} onClick={searchBarDropDownVisible}/>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default SearchBar
