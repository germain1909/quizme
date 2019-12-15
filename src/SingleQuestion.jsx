import React from 'react';
import {Answer} from './Answer';

export class SingleQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isVisible: false,
          isComplete: false
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
        let nextQuestionName = this.getNextQuestionName(this.props.questionName)
        let currentQuestionNumber = this.getQuestionNumber(this.props.currentQuestion);
        let  totalQuestions = this.getTotalQuestions();
        let nextQuestionNumber = this.getQuestionNumber(nextQuestionName);

        if(nextQuestionNumber == totalQuestions)
        {
             this.setState({isComplete:true});
             this.setState({isVisible:false});
             //this.setState({isVisible: false});
             console.log("HHHHHHHH")
        }
        else if(this.props.currentQuestion == this.props.questionName)
         {   
             this.props.showNextQuestion(nextQuestionName);
             this.setState({isVisible: false});
             
         }

         console.log('current question'+currentQuestionNumber,
                     'next question'+nextQuestionNumber, 
                     'total questions'+totalQuestions
                     )
        
    }

    render(){
    
        let singleQuestion =
         <div key={this.props.key +'i'} className="card" name={this.props.questionName}> 
        <p>Tasks {this.getQuestionNumber(this.props.questionName)+1}/{this.getTotalQuestions()}</p>
        {this.props.question}
        {this.props.answers.map((answer)=> <Answer userAnswer={answer}/>)}
        <span>
            <button onClick={this.handleNextButtonClick}>Next Task</button>
            <button>Previous Task</button>
        </span>
         </div>;

        let finito =
                <div key={'end'}className="card" name={'end'}> 
                <p>Thank you for completing The Guild Technology Module</p>
                </div>;

          return(this.state.isComplete?finito:singleQuestion)
    }
}