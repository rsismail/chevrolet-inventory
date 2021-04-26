import React, {useState}from 'react'

const MenuListContent = (props) => {
   
    return (
        <div className='menuListWrapper'>
            <div className='menuListHeadingWrapper'>
            <h1>{props.menuList.listHeading}</h1>
            </div>
                   <div className='listWrapper'>
                  {props.menuList.listContents.map(listContent=>(<li><a>{listContent.name}</a></li>))}
                   </div>
                </div>
    )
}

export default MenuListContent
