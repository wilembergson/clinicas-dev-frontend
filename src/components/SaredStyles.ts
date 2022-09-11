import styled from "styled-components"
import { colors } from "../utils/Colors"

export const Title = styled.h2`
    margin-top: 60px;
    font-size: 30px;
    color: ${colors.primary};
    font-family: 'Oxygen', sans-serif;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
  margin-bottom: 30px;
  @media (max-width:399px){
        align-items: center;
    }
`

export const Label = styled.label`
  font-family: 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  color: ${colors.primary};
  margin-top: 8px;
  margin-left: 5px;
  @media (max-width:399px){
        width: 80%;
    }
`

export const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  font-family: 'Lexend Deca', sans-serif;
  width: 100%;
  color: #000;
  background: #FFFFFF;
  padding: 15px;
  margin: 5px;
  border: 1px solid rgba(120, 177, 89, 0.25);
  border-radius: 7px;
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  transition: 0.7s ease;
  ::placeholder {
    color: #9C9C9C;
    font-family: 'Lexend Deca', sans-serif;
  }
  :hover{
        box-shadow: 0px 2px 12px  ${colors.primary};
        transition: 0.7s ease;
    }
  @media (max-width:399px){
        width: 80%;
    }
`

export const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  margin-top: 40px;
  margin-left: 10px;
  font-family: 'Oxygen', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 15px;
  color: #FFFFFF;
  text-align: center;
  padding: 10px;
  background: ${colors.primary};
  border-radius: 8px;
  width: 100%;
  height: 60px;
  transition: 0.7s ease;
  :hover{
        color: ${colors.primary};
        background: ${colors.secondary};
        transition: 0.7s ease;
    }
    @media (max-width:399px){
        width: 80%;
    }
`

export const RegisterBody = styled.section`
    display: flex;
    width: 500px;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-top: 80px;
    @media (max-width:490px){
        width: 90%;
        align-items: center;
    }
`
export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 30px;
    @media (max-width:399px){
          width: 80%;
      }
`
export const Confirm = styled.button`
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    margin-left: 5px;
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 15px;
    color: #FFFFFF;
    background: #539e4c;
    text-align: center;
    padding: 10px;
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    transition: 0.7s ease;
    :hover{
          background:#68b861;
          transition: 0.7s ease;
      }
      @media (max-width:399px){
          width: 100%;
      }
`
export const Cancel = styled.button`
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    margin-left: 5px;
    font-family: 'Oxygen', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 15px;
    color: #FFFFFF;
    background: #f7433d;
    text-align: center;
    padding: 10px;
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 50px;
    transition: 0.7s ease;
    :hover{
          background:#e05d59;
          transition: 0.7s ease;
      }
      @media (max-width:399px){
          width: 100%;
      }
`
export const NoConsults = styled.label`
    font-family: 'Oxygen', sans-serif;
    font-weight: 800;
    font-size: 32px;
    margin: 85px;
    color: #c7c5c5;
`