import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Question.css';
import {SingleQuestion} from './SingleQuestion';


//Need to import Bootstrap to import from reactstrap


export class QuestionBlock extends React.Component {
   
    buildAQuestionBlock = (question,answers,key) =>{
        return(
            <SingleQuestion key={key} question={question} answers={answers} questionName={key}/>
        )
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
    console.log(this.props.answers);
    let i = 0;
    for(i;i<questions.length;i++){
        questionBlock.push(this.buildAQuestionBlock(questions[i],answers[i],'q'+i));
    }
    return(<div>{questionBlock}</div>); 
}
    

}

