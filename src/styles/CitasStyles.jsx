import styled, { keyframes } from "styled-components";

export const FadeIn = keyframes`

  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }

`;

export const MainContainer = styled.div`

  display: flex;
  justify-content:center;
  align-items: center;
  height: 100vh;

`;

export const Fondo = styled.section`

  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;  
  animation: ${FadeIn} 2s ease;
  transition: background-color 2s ease;

`;

export const QuoteContainer = styled.section`

  width: 550px;
  background-color: black;  
  color: white;
  margin-left:auto;
  margin-right: auto;
  padding: 40px 50px;
  border-radius: 3px;
  z-index: 999;

`;

export const Quote = styled.article`

  display: flex;  
  align-items: flex-start;
  /* background-color: green; */
  animation: ${FadeIn} 2s ease;

`;

export const Text = styled.p`

  font-size: 28px;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  text-align: center;
  animation: ${FadeIn} 2s ease;
  transition: color 2s ease;

`;

export const Author = styled.article`

  /* background-color: red; */
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  text-align: right;
  animation: ${FadeIn} 2s ease; 

`;

export const Buttons = styled.article`

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: aquamarine; */

`;

export const ButtonNew = styled.button`

  outline-width: 0;
  border-width: 0;  
  color: white;
  padding: 12px 14px;
  border-radius: 3px;
  font-family: "Raleway", sans-serif;
  transition: opacity 500ms ease;
  cursor: pointer;
  transition: background-color 2s ease;

  &:hover{
    opacity: 0.7;
  }

`;

export const LinksContainer = styled.section`

  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Link1 = styled.a`
  
  padding: 12px;
  margin-right: 5px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration-line: none;
  transition: opacity 500ms ease;
  transition: background-color 2s ease;

  &:hover{
    opacity: 0.7;
  }

`;

export const Link2 = styled.a`
  
  padding: 12px 15px;  
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration-line: none;
  transition: opacity 500ms ease;
  transition: background-color 2s ease;

  &:hover{
    opacity: 0.7;
  }

`;


