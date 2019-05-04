import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: [],
        selected: 0
    }
  }
  componentDidMount(){
    this.setState({ data: [...carouselData]})
  }

  leftClick = () => {
    (this.state.selected === 0) ? this.setState({ selected: 3}) : this.setState({ selected: this.state.selected - 1 })
  }

  rightClick = () => {
    (this.state.selected === 3) ? this.setState({ selected: 0 }) : this.setState({ selected: this.state.selected + 1 })
  }

  selectedImage = () => {
    return <img src={this.state.data[this.state.selected]} style={{display: 'block'}} alt="beautiful pic" />
  }

  render(){
    //console.log(this.state.data[this.state.selectedImage])
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
          {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
