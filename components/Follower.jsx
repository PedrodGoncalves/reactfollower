import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
    position: fixed;
    left: ${props => props.x  - 2.5}%;
    top: ${props => props.y  - 5 }%;
    border-radius:50%;
    background-color: rgb(1,1,1);
    width:5%;
    height:10%;
`


class Follower extends React.Component{
    constructor(props){
        super(props)
        this.state = {xpos: 0, ypos: 0, targetDist: 0}
        var speed;
        var fps;
        this.speed = this.props.moveSpeed;
        this.fps = 1000/this.props.fps;
     
    }
    render(){
        return(
            <MainDiv className="circle" x = {this.state.xpos * 100 / window.innerWidth} y = {this.state.ypos * 100 / window.innerHeight}/>        
        )
    }

 

    updatePosition = () => {
        var coords = document.getElementsByClassName("circle")[0]
        this.setState({ypos: coords.offsetTop+250, xpos: coords.offsetLeft+250})
    }    
    
    getDistance = () => Math.sqrt(Math.pow(Math.abs(this.props.followX-this.state.xpos),2) 
        + Math.pow(Math.abs(this.props.followY-this.state.ypos),2))

    updateDistance = () => this.setState({targetDist: this.getDistance()}) 

    reachedTarget = () => Math.floor(this.state.targetDist) == 0 ? true : false

    getunitVector = (a) => a/this.getDistance()

    getXDirection = () => this.props.followX - this.state.xpos < 0 ? -this.speed : this.speed
    getYDirection = () => this.props.followY - this.state.ypos < 0 ? -this.speed : this.speed 

    getXMove = () => this.getXDirection() * this.getunitVector(Math.abs(this.props.followX-this.state.xpos))
    getYMove = () => this.getYDirection() * this.getunitVector(Math.abs(this.props.followY-this.state.ypos))

    move = () => {this.reachedTarget() == false ? 
        this.setState({xpos: this.state.xpos + this.getXMove(), ypos: this.state.ypos + this.getYMove()})
         :
        this.updateDistance();}

    componentDidMount(){
        this.updatePosition()
        setInterval(this.move,this.fps)      
    }
}

export default Follower;