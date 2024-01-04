import styled from "@emotion/styled";

export const ErorMessageDiv = styled.div`
    display: flex;
    
    padding: 12px;
    margin-bottom: 24px;
    gap: 10px;
`
export const ErrorIcon = styled.img`
    width: 24px;
    heigth: 24px;
`

export const ErrorMessage = styled.label`
    text-align: left;
    font-size: 14px;
    color:#CA040F;
    line-height: 1.2;
    width:100%;
    
    @media screen and (min-width: 768px) {
        font-size: 16px;
    
    }
`
