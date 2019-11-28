import React from 'react';
import {Answer} from './Answer';

export class SingleQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isVisible: true
        };
    }

    handleNextButtonClick(e){
        console.log(e.target.name)
    }

    render(){
        let singleQuestion =
         <div key={this.props.key +'i'} className="card" name={this.props.questionName}>   
        {this.props.question}
        {this.props.answers.map((answer)=> <Answer userAnswer={answer}/>)}
        <button name={this.props.questionName} onClick={this.handleNextButtonClick}>Next Question</button>
         </div>;
        return(
            this.state.isVisible?singleQuestion:null
        )
    }
}