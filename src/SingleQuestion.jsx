import React from 'react';
import {Answer} from './Answer';

export class SingleQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isVisible: false
        };
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);

    }

    //This is where we left off Need to 
    getTotalQuestions = () =>{
        return this.props.totalQuestions;
    }


    getQuestionNumber = (questionName) =>{
        return(
            Number(questionName.replace(/q/g,''))
            )
    }

    getNextQuestionName = (currentQuestion) =>{
        let nextQuestionNumber =  this.getQuestionNumber(currentQuestion) + 1;
        let nextQuestionName = 'q'+ nextQuestionNumber;
        return nextQuestionName;
    }

    handleNextButtonClick  = (e) =>{
        console.log(e.target.parentNode);
        console.log(this.props);
        let nextQuestionName = this.getNextQuestionName(this.props.questionName)
        console.log('next question',nextQuestionName);
        if(this.props.currentQuestion == this.props.questionName)
         {   
             this.props.showNextQuestion(nextQuestionName);
             this.setState({isVisible: false});
             
         }
        
    }

    render(){
    
        let singleQuestion =
         <div key={this.props.key +'i'} className="card" name={this.props.questionName}> 
        <p>Question {this.getQuestionNumber(this.props.questionName)+1}/{this.getTotalQuestions()+1}</p>
        {this.props.question}
        {this.props.answers.map((answer)=> <Answer userAnswer={answer}/>)}
        <button name={this.props.questionName} onClick={this.handleNextButtonClick}>Next Question</button>
         </div>;
          return(
            singleQuestion
        )
    }
}