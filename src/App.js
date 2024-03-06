import React from "react";
import { Container, Title, MainWrap, Box, Description, Content, CircleAnime, Button, ModeChanger } from "./style"
import Card from "./card";
import {ThemeProvider, createGlobalStyle} from "styled-components"


const GlobalContainer = createGlobalStyle`
      body{
        background: ${(props)=>props.theme.bg};
        color: ${(props)=>props.theme.cl};
      }
`


class App extends React.Component {

  state={
    direct: "normal",
    mode: true
  }

  

  render() {
    const theme={
       bg: this.state.mode?"white" : "black",
       cl: this.state.mode?"black" : "white"
    }
    return (
      <ThemeProvider theme={theme}>
        <GlobalContainer></GlobalContainer>
        <Container>
        <MainWrap>
          <ModeChanger onClick={()=>{this.setState({mode: !this.state.mode})}} >
            {this.state.mode? "Dark" : "Light"}
          </ModeChanger>
        </MainWrap>
        <Title>
          Salom DAsturchilar
        </Title>
        <MainWrap>
          <Card></Card>

          <Card></Card>

          <Card></Card>

          <Card></Card>
        </MainWrap>

        <hr />

        <MainWrap>
          <Box size="large" >Large</Box>
          <Box size="medium">Medium</Box>
          <Box size="small">Small</Box>
        </MainWrap>

        <hr />  

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus assumenda, adipisci autem animi quaerat dolor sit distinctio a libero quod placeat id delectus voluptatum aspernatur necessitatibus. Dolor nostrum error quidem eius, molestiae magni maiores doloribus laborum culpa minus, aut placeat facilis eligendi eum porro provident architecto adipisci fugit voluptatum quisquam omnis accusamus deleniti, sapiente natus. Perferendis dignissimos tenetur explicabo, deserunt, soluta corporis eveniet autem eos rem impedit minus mollitia blanditiis nisi! Fugit atque natus suscipit a dignissimos sapiente vel, quos iusto quibusdam debitis praesentium accusamus, ratione excepturi ad expedita sit perferendis ipsa tenetur ipsam eveniet. Aliquid veritatis minus dolores quidem ad modi tenetur error officiis culpa eum nemo, perspiciatis, unde maxime architecto corrupti et fuga illo, placeat sed. Fuga adipisci impedit, laborum amet mollitia alias nesciunt dolor minima sed. Minima, ducimus necessitatibus saepe aliquam nam odit enim quos modi. Reprehenderit dolores soluta atque minus? Placeat totam expedita eveniet suscipit eaque!
        </Description>

        <Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ratione placeat exercitationem accusamus dignissimos odio in fugiat repudiandae quo maiores! Similique sapiente aliquam vero aperiam sequi quas fugiat architecto, distinctio ipsa veritatis sunt debitis repellendus sed optio ea iure facere voluptatum voluptatem voluptate, inventore quos consectetur tempore nisi autem! Accusantium.
        </Content>

        <CircleAnime direction={this.state.direct}>
            Rotate
        </CircleAnime>
        <hr />

        <MainWrap>
          <Button onClick={()=>{this.setState({direct: "normal"})}}>Normal</Button>
          <Button onClick={()=>{this.setState({direct: "reverse"})}}>Reverse</Button>
          <Button onClick={()=>{this.setState({direct: "alternate"})}}>Alternate</Button>
        </MainWrap>

        

        

        
        




      </Container>
       
      </ThemeProvider>
    )
  }

}

export default App