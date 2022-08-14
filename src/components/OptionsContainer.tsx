import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import api from "../api/ApiConections"
import UserContext from "../contexts/UserContext"
import { colors } from "../utils/Colors"

export const titles = {
    nextConsult: 'Próximas consultas',
    newConsult: 'Nova consulta',
    historic: 'Histórico'
}

export default function OptionsContainer(){
    const navigate = useNavigate()
    const [address, setAddress] = useState(null)
    const {setPrincipalContentTitle} = useContext(UserContext)

    useEffect(() => {
        const promise = api.getAddress()
        promise.then(response => setAddress(response.data))
        .catch(error => console.log(error))
    },[])

    return(
        <Options>
            {!address ? 
                <ItemRegister onClick={()=> navigate('/address/register')}>Cadastrar endereço</ItemRegister>
                :<>
                    <ItemHome onClick={()=> setPrincipalContentTitle(titles.nextConsult)}>{titles.nextConsult}</ItemHome>
                    <ItemHome onClick={()=> setPrincipalContentTitle(titles.newConsult)}>{titles.newConsult}</ItemHome>
                    <ItemHome onClick={()=> setPrincipalContentTitle(titles.historic)}>{titles.historic}</ItemHome>

                </>
            }
            
        </Options>
    )
}

const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 4px 24px rgba(25, 26, 25, 0.12);
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
    width: auto;
    @media (max-width:399px){
        width: auto;
    }
`
const ItemHome = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 192.5px;
    height: 120px;
    cursor: pointer;
    color: ${colors.secondary};
    padding: 0 12px;
    background: ${colors.clearColor};

    font-size: 20px;
    font-weight: 800;

    transition: 0.7s ease;
    :hover{
        color: ${colors.clearColor};
        background: ${colors.secondary};
        transition: 0.7s ease;
    }
    @media (max-width:399px){
        font-size: medium;
        height: 90px;
    }
`
const ItemRegister = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 190px;
    height: 110px;
    cursor: pointer;
    color: ${colors.secondary};
    padding: 0 12px;
    background: ${colors.clearColor};

    font-size: 20px;
    font-weight: 800;

    transition: 0.7s ease;
    :hover{
        color: ${colors.clearColor};
        background: ${colors.secondary};
        transition: 0.7s ease;
    }
    @media (max-width:399px){
        font-size: medium;
        height: 90px;
    }
`