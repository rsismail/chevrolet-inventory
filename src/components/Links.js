import React from 'react'
import styled from "styled-components";



const Links = () => {

    return (
        <div>
           <Container>
               <div className='link1'>BOLT EUV</div>
               <div className="link2">BOLT EV</div>
               <div className='link3'>LIVING ELECTRIC </div>
               <div className='link4'>BUY ONLINE </div>
            
               </Container>


        </div>
    )
}
export default Links;

const Container = styled.div`


display: flex;
flex-direction: row;
justify-content:space-around;
align-items: center;
padding: 0px;
color:blue;
margin-left:48px
// background:green;



`;