import React from 'react';

import ReactDOM from 'react-dom';


class CircleProgress extends React.Component{
    constructor(props) {
        super(props);
        const {size, percentage, stroke} = this.props;
       const {circumference, progress, radius} = this.calculatePaths();
        this.state = {
            size,
            percentage,
            stroke,
            circumference,
            progress,
            radius
        }
    }
    
  calculatePaths() {
      const {size, stroke ,percentage } = this.props;
      const radius = size/2;
      const circumference = 2 * Math.PI * radius;
      const progress = circumference - ((circumference * percentage) / 100);
      return {circumference, progress, radius}
  }
  
  tick(circle) {
      return (progress) => {
        circle.strokeDashoffset = progress
      } 
  }
  
    
    render() {
       const {size, stroke ,percentage, circumference, progress, radius } = this.state;
        const canvasSize = size+stroke;
         return (
           
           <svg width={canvasSize} height={canvasSize}> 
              <g>
                <circle transform = {`rotate(-90 ${canvasSize/2} ${canvasSize/2})`} fill="transparent" stroke="lightgrey" strokeWidth={stroke}  cx={canvasSize/2} cy={canvasSize/2}  r={radius} />     
                <circle  ref={(circle) => this.circle = circle} transform = {`rotate(-90 ${canvasSize/2} ${canvasSize/2})`}fill="transparent" stroke="green" strokeWidth={stroke}  cy={canvasSize/2} cx={canvasSize/2} r={radius}  strokeDasharray={circumference} strokeDashoffset={progress} />
            </g>
          </svg>
         )
    }
}


export default CircleProgress;

