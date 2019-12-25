import React from 'react';
import {QuestionBlock} from './QuestionBlock.jsx'
import './Home.css';
import logo from "./images/theGuildLogoResize.png"


const questions =[
    'Slack Module',
    'Zoom Module',
    'Doodle Module'
]

let answers = [

    [   'Step 1 Copy the following link http://bit.ly/guildslacksignup',
        'Step 2 Enter email',
        'Step 3 Verify email',
        'Step 4 Create an account with password and username',
        'Step 5 Click #general channel and write greeting',
        'Step 6 Click the #onboarding channel and look at the pinned documents'
    ],
    [
        'Step 1 Copy the following link https://zoom.us/j/3671283747',
        'Step 2 Launch zoom meeting',
        'Step 3 Join with computer audio',
        'Step 4 Click chat icon and text greeting in zoom group chat',
    ],
    [
        'Step 1: Copy the following link https://doodle.com/poll/4x2ggedsxeduhrnr ',
        'Step 2: Enter participant name',
        'Step 3: Submit'
    ]

]

export class Home extends React.Component {

    //copied constructor from single question
    constructor(props) {
        super(props);
        this.state = {
          isComplete: false
        };
        //this.handleNextButtonClick = this.handleNextButtonClick.bind(this);

    }


    render(){
        return (
        <div className="background">
        <img className="logo" src={logo} />
        <QuestionBlock questions={questions} answers={answers}/>
        </div>
        )
    }
       

  }