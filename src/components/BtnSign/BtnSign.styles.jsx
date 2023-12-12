import styled from "@emotion/styled";

export const BtnSignIn = styled.button`

  position: relative;
  display: flex;
  

  text-transform: uppercase;
    background: #0B0000;
  z-index: 1;
  transition: color 150ms ease-in-out;


    width:100%;
    padding: 12px 36px;
    margin-bottom:24px;
    justify-content: center;
    align-items: center;
    
    color:  #FDFDFD;
    
    font-size: 18px;
    
    font-weight: 700;
    line-height: 1.2;
    border-radius: 4px;

    border: 1px solid  #110003;

    @media screen and (min-width: 768px) {
        
    padding: 16px 36px;
    font-size: 22px;
    line-height: 1.4;
    }

    &:after {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 100%;
        background-color:  #D9D9D9;
        border-radius: 4px;
        z-index: -1;
        transition: width 150ms ease-in-out;
    }
    &:hover {
     color:  #0B0000;
    &:after {
      
      width: 100%;
    }

    
    }

    &.active{
        color:  #0B0000;
        background:#FDFDFD;
      
    &:after {
      
      width: 0;
    }
    } 

    &:active {
     color:  #0B0000;
      
    &:after {
      background:#FDFDFD;
      width: 100%;
    }


  }
    
`