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
            />
        )
    }

    showNextQuestioninBlock = (nextQuestion) =>{
        console.log('Germain',nextQuestion);
        this.setState({activeQuestion:nextQuestion});
    }

    buildAMathProblem = () =>{
        let number1 = Math.floor((Math.random() * 100) )
        let number2 = Math.floor((Math.random() * 100) )
        return(
            <div>What is {number1} + {number2} </div>
        )
    }

   
render(){
    let questionBlock = [];
    let questions = this.props.questions;
    let answers = this.props.answers;
    let viewQuestion = '';
    console.log(this.props.answers);
    let i = 0;
    for(i;i<questions.length;i++){
        if(this.state.activeQuestion == ('q'+i))
            {
               viewQuestion = this.buildAQuestionBlock(questions[i],answers[i],'q'+i)
            }
    }
    console.log(viewQuestion);
    return(<div>{viewQuestion}</div>); 
}
    

}

