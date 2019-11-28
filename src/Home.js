import React from 'react';
import {QuestionBlock} from './QuestionBlock.jsx'
import './Home.css';


const questions =[
    'When you go to the club what brand shoes are you wearing',
    'What snack are you getting off of the ice cream truck',
    'When asked who you would vote for president in 2020 you reply?',
    'When asked who influenced you musically you reply',
    'At your concert what is your audience interaction?',
    'Which of these singers would you tap for a feature',
    'You just pulled up to the liquor store whats your go to alchol?',
    'You on tour on the road what fast food restaurant will you stop at'
]

let answers = [

    [   'Nike',
        'Balenciaga',
        'Louis Voutton',
        'Gucci'
    ],
    [
        'Bomb Pop',
        'Fudge Bar',
        'Snow Cone',
        'Ice Cream Sandwich'
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