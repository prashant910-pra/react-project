// src/App.tsx

import React from 'react';
import Quiz from './components/Quiz';
import { Question } from './types';
import NavBar from './components/NavBar';


const questions: Question[] = [
  {
    question: 'Is 2+2 equal to 4?',
    options: ['Yes', 'No'],
    answer: 'Yes',
  },
  {
    question: 'Can a triangle have four sides?',
    options: ['Yes', 'No'],
    answer: 'No',
  },
  {
    question: 'Is the capital of India delhi?',
    options: ['Yes', 'No'],
    answer: 'Yes',
  },
];

const App: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <div className="container text-center">
  <div className="row">
    <div className="col">
      <Quiz questions={questions} />
      </div>
      </div>
      </div>
    </div>
  );
};

export default App;
