import React from 'react'
import styled from 'styled-components'
import Follower from './Follower.jsx'
import Circle from './Circle.jsx'

const MainDiv = styled.div`
    width:100%;
    height:100%;
`


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {x:'', y:''}
      
    }
    render(){return(
        <MainDiv>
            <Circle x={this.state.x} y={this.state.y} updateCoords = { (ypos,xpos) => this.setState({x: xpos, y:ypos})}/>
                <Follower followX = {this.state.x} followY= {this.state.y} moveSpeed = {5} fps={30}/>
            <Follower followX = {this.state.x} followY= {this.state.y} moveSpeed = {7} fps={30}/>
            <Follower followX = {this.state.x} followY= {this.state.y} moveSpeed = {3} fps={30}/>
        </MainDiv>
    )}



}

export default App