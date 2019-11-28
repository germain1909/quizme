import React from 'react';
import './Answer.css'


export class Answer extends React.Component {
   
render(){
return(<div className='answer'><p>{this.props.userAnswer}</p></div>); 

}
    

}