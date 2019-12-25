import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Question.css';
import {SingleQuestion} from './SingleQuestion';


//Need to import Bootstrap to import from reactstrap


export class QuestionBlock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          activeQuestion: 'q0'
        };
        this.showNextQuestioninBlock = this.showNextQuestioninBlock.bind(this);
    }
   
    buildAQuestionBlock = (question,answers,key) =>{
        return(
            <SingleQuestion 
                showNextQuestion = {this.showNextQuestioninBlock}
                currentQuestion = {this.state.activeQuestion}
                key={key} 
                question={question} 
                answers={answers} 
                questionName={key}
                totalQuestions={this.props.questions.length}
            />
        )
    }

    getQuestionNumber = (questionName) =>{
        return(
            Number(questionName.replace(/q/g,''))
            )
    }

    showNextQuestioninBlock = (nextQuestion) =>{
        this.setState({activeQuestion:nextQuestion});
    }

   //will probably have to write a get content type function baseed on the state

render(){
    let questionBlock = [];
    let questions = this.props.questions;
    let answers = this.props.answers;
    let viewQuestion = '';
    let activeQuestionNum = this.getQuestionNumber(this.state.activeQuestion); // this is where we  have to change the 'done' string to work
    let i = 0;
    viewQuestion = this.buildAQuestionBlock(questions[activeQuestionNum],answers[activeQuestionNum],this.state.activeQuestion);
    return(<div>{viewQuestion}</div>); 
}
    

}

