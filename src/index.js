import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

import settings from './mocks/settings';
import questions from './mocks/questions';

const init = (gameQuestions) => {
  ReactDOM.render(
      <App
        gameTime = {settings.gameTime}
        errorCount = {settings.errorCount}
        questions = {gameQuestions}
      />,
      document.querySelector(`#root`)
  );
};

init(questions);
