import React from 'react';
import {QuestionBlock} from './QuestionBlock.jsx'
import './Home.css';


const questions =[
    'Slack Module Number 1: Find Pinned Item in Slack',
    'Slack module Number 2: Introduce to the team on slack',
    'When asked who you would vote for president in 2020 you reply?',
    'When asked who influenced you musically you reply',
    'At your concert what is your audience interaction?',
    'Which of these singers would you tap for a feature',
    'You just pulled up to the liquor store whats your go to alchol?',
    'You on tour on the road what fast food restaurant will you stop at'
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
        'Kanye West',
        'I dont vote',
        'Lets put Obama back in there',
        'Kamala Harris'
    ],
    [
        'Michael Jackson',
        'Tupac',
        'Notorious BIG',
        'Jay Z',
    ],
    [
        'Mosh Pit',
        'Crowd Surf',
        'Bring audience on stage',
        'Giant floating ballon of your face'
    ],
    [
        'Beyonce',
        'Whitney Houston',
        'Mariah Carey',
        'SZA'
    ],
    [
        'Hennessey',
        'Patron',
        'Moet',
        'Ciroc'
    ],
    [
        'Popeyes',
        'Taco Bell',
        'McDonalds',
        'In & Out'
    ]

]

export function Home() {
    let i = 0;
    return (
        <div className="background">
             <QuestionBlock questions={questions} answers={answers} key = {i}/>
        </div>
       
    );
  }