import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
    cursor:none;
    position:fixed;
    left: ${props => props.x - 5}%;
    top: ${props => props.y - 10}%;
    border-radius:50%;
    background-color: green;
    width:10%;
    height:20%;
`

class Circle extends React.Component{
    constructor(props){
        super(props)
        this.state = {force:''}
        this.updateCircle = this.updateCircle.bind(this)
    }
    render(){return (
        <MainDiv className="circle" x={this.props.x * 100 / window.innerWidth } y={this.props.y * 100 / window.innerHeight} onMouseMove={evt => this.props.updateCoords( evt.clientY , evt.clientX ) } >
           
        </MainDiv>

    )}
    updateCircle(){
        var coords = document.getElementsByClassName("circle")[0]
        this.props.updateCoords( (coords.offsetTop*100) / window.innerHeight, (coords.offsetLeft * 100) / window.innerWidth) 
    }
    componentDidMount(){
       // setInterval(this.updateCircle,5000)


    }
}
export default Circle