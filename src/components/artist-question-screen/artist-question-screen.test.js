import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestionScreen from './artist-question-screen';
import questions from '../../mocks/questions';

describe(`Проверка <ArtistQuestionScreen>`, () => {
  it(`компонент <ArtistQuestionScreen> корректно отрисован`, () => {
    const question = 1;
    const currentQuestion = questions[question];
    const handlerClick = jest.fn();

    const tree = renderer
      .create(<ArtistQuestionScreen
        screenIndex = {question}
        question = {currentQuestion}
        onAnswer = {handlerClick}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
