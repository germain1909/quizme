import React from 'react';
import './Answer.css'


export class Answer extends React.Component {
   
render(){
return(
        <div className='answer'>
            <div>
                <input type= 'checkbox' className='myCheckbox'/>
                {this.props.userAnswer}
            </div>
        </div>); 

}
    

}