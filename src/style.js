import styled, { css, keyframes } from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    height: fit-content;
    padding: 5px 50px;
    box-sizing: border-box;
`

export const Title = styled('h1')`
   
    text-align: center;
    font-size: 60px;
`

export const MainWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const Sized = (props) => {
    switch (props.size) {
        case "large":
            return "200px"

        case "medium":
            return "150px"

        case "small":
            return "100px"


        default:
            return "250px"

    }
}

export const Box = styled.div`
    width: ${Sized};
    height: ${Sized};
    border: 1px solid black;
    background: coral;
    display: flex;
    justify-content: center;
    align-items: center; 
`
const reusable = css`
    text-align: justify;
    padding: 5px 10px;
    font-size: 20px;
    `

export const Description = styled.p`
        ${reusable}
    `

export const Content = styled('p')`
    ${reusable}
    font-family: monospace;
`

const anime = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg)
    }
`

const direct = (props) => {
    switch (props.direction) {
        case "normal":
            return "normal"
        case "reverse":
            return "reverse"
        case "alternate":
            return "alternate"
        default: 
            return "normal"
    }
}

export const CircleAnime = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${anime} 2s linear infinite;
    animation-direction: ${direct};
    background: ${(props)=>props.theme.bg==="black"? "white" : "black"};
    color: ${(props)=>props.theme.cl==="black"? "white" : "black"};
    border-radius: 50%;
    `

export const Button = styled.button`
        border: 1px solid black;
        border-radius: 4px;
        width: 150px;
        height: fit-content;
        padding: 5px 10px;
    `

export const ModeChanger = styled(Button)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    right: 0;    
`