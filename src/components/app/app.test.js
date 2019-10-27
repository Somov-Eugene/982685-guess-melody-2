import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';
import gameQuestions from '../../mocks/questions';

describe(`Проверка <App>`, () => {
  it(`компонент <App> корректно отрисован`, () => {
    const tree = renderer
      .create(<App
        gameTime = {5}
        errorCount = {3}
        questions = {gameQuestions}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
