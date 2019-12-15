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
        this.handlePreviousButtonClick = this.handlePreviousButtonClick.bind(this);
        this.handleFinalPagePreviousClick = this.handleFinalPagePreviousClick.bind(this);
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

    getPreviousQuestionName = (currentQuestion) =>{
        let previousQuestionNumber =  this.getQuestionNumber(currentQuestion) -1;
        let previousQuestionName = 'q'+ previousQuestionNumber;
        return previousQuestionName;
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

    handlePreviousButtonClick = (e) =>{
        let previousQuestionName = this.getPreviousQuestionName(this.props.questionName);
        let currentQuestionNumber = this.getQuestionNumber(this.props.currentQuestion);
        let  totalQuestions = this.getTotalQuestions();
        let previousQuestionNumber = this.getQuestionNumber(previousQuestionName);

        if(previousQuestionNumber == totalQuestions)
        {
             this.setState({isComplete:true});
             this.setState({isVisible:false});
             //this.setState({isVisible: false});
             console.log("HHHHHHHH")
        }

        if(this.props.currentQuestion == this.props.questionName)
        {   
            this.props.showNextQuestion(previousQuestionName);
            this.setState({isVisible: false});
            
        }

    }

    handleFinalPagePreviousClick = () =>{
        this.props.showNextQuestion(this.props.questionName);
        this.setState({isVisible: false});
        this.setState({isComplete:false});
    } 

    render(){

        let firstQuestion = 
        <div key={this.props.key +'i'} className="card" name={this.props.questionName}> 
            <p>Tasks {this.getQuestionNumber(this.props.questionName)+1}/{this.getTotalQuestions()}</p>
            {this.props.question}
            {this.props.answers.map((answer)=> <Answer userAnswer={answer}/>)}
            <span>
                <button onClick={this.handleNextButtonClick}>Next Task</button>
            </span>
        </div>;
    
        let singleQuestion =
        <div key={this.props.key +'i'} className="card" name={this.props.questionName}> 
            <p>Tasks {this.getQuestionNumber(this.props.questionName)+1}/{this.getTotalQuestions()}</p>
            {this.props.question}
            {this.props.answers.map((answer)=> <Answer userAnswer={answer}/>)}
            <span>
                <button onClick={this.handleNextButtonClick}>Next Task</button>
                <button onClick={this.handlePreviousButtonClick}>Previous Task</button>
            </span>
        </div>;

         let displayQuestion = this.props.questionName == 'q0'?firstQuestion:singleQuestion;

        let finito =
             <div key={'end'}className="card" name={'end'}> 
                <p>Thank you for completing The Guild Technology Module</p>
                <span>
                    <button onClick={this.handleFinalPagePreviousClick}>Go Back</button>
                </span>
            </div>;

          return(this.state.isComplete?finito:displayQuestion)
    }
}