import React from 'react';
import {QuestionBlock} from './QuestionBlock.jsx'
import './Home.css';
import logo from "./images/theGuildLogoResize.png"


const questions =[
    'Slack Module Number 1: Find Pinned Item in Slack',
    'Slack module Number 2: Introduce to the team on slack',
    'Zoom Module 1: Get a zoom account',
    'Doodle Module 1: Take a doodle for our next business meeting'
]

let answers = [

    [   'Step 1 go to the theguildheadquarters@slack.com and log in',
        'Step2 find the #onboarding channel in slack and join the onboarding channel if you are not already a member',
        'Step3 find the pinned documents in the onboarding channel',
        'Step4 read the technology onboarding document'
    ],
    [
        'Step 1 Go to the #general channel inside of the guild slack workspace',
        'Step 2 Right a short introduction about yourself',
        'Step 3 In the intro you must include your hometown, favorite movie, and the word green',
        'Step 4 Send your introduction to the General channel '
    ],
    [
        'Step 1: Go to zoom.us',
        'Go to the following link',
        'Will there be people zoooming in to the orientation?',
    ],
    [
        'Step 1: Copy the link in step 2 and copy it',
        'Step 2: https://doodle.com/poll/4x2ggedsxeduhrnr',
        'Go to your browser, open a new tab and paste in the link that you copied',
    ]

]

export function Home() {
    return (
        <div className="background">
        <img className="logo" src={logo} />
        <QuestionBlock questions={questions} answers={answers}/>
        </div>
       
    );
  }