import React from 'react'
import styled from "styled-components";

const Loading = () => {
  return (
   <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <img src="/images/loading_icon.gif" alt="로딩중" />
   </Background>
  )
}

const Background = styled.div`
   width:100%;
   height:100%;
   
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
const LoadingText = styled.div`` 

export default Loading